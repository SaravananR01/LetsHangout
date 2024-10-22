from django.shortcuts import render,redirect
from .models import HangoutCode,UserData,TimeInterval
import random
from datetime import timedelta,datetime,time
from django.utils import timezone

chars=[chr(x) for x in range (65,91)]
nums=[chr(x) for x in range (48,58)]

def generategeneric():
    return random.choice(chars)+random.choice(chars)+random.choice(nums)+random.choice(nums)+random.choice(chars)+random.choice(chars)

def generateHangoutCode():
    code=generategeneric()
    while len(HangoutCode.objects.filter(code=code))>0:
        code=generategeneric()
    return code

def generateUserCode():
    code=generategeneric()
    while len(UserData.objects.filter(user_code=code))>0:
        code=generategeneric()
    return code

def generateTimeCode():
    code=generategeneric()
    while len(TimeInterval.objects.filter(tid=code))>0:
        code=generategeneric()
    return code

def calendar(request,code):
    try:
        event = HangoutCode.objects.get(code=code)
    except HangoutCode.DoesNotExist:
        return redirect('/')


    users = UserData.objects.filter(event=event)
    start_date = event.from_date
    end_date = event.to_date

    # Generate all dates for the current month
    month_dates = []
    current_date = start_date.replace(day=1)  # Start from the first day of the month

    # Calculate the last day of the month
    if current_date.month == 12:
        next_month = current_date.replace(year=current_date.year + 1, month=1)
    else:
        next_month = current_date.replace(month=current_date.month + 1)

    last_day_of_month = (next_month - timedelta(days=1)).day

    # Generate all dates for the month
    for day in range(1, last_day_of_month + 1):
        month_dates.append(current_date.replace(day=day))

    # Prepare weeks for the calendar
    weeks = []
    week = []
    
    # Add placeholder boxes for days before the first of the month
    first_day_of_month = month_dates[0].weekday()  # Get the starting weekday
    for _ in range(first_day_of_month):
        week.append(None)  # Add None for placeholders

    for date in month_dates:
        week.append(date)
        if len(week) == 7:  # When a week is full (7 days), append it to weeks
            weeks.append(week)
            week = []

    # Fill the remaining days in the last week (if any)
    if week:
        while len(week) < 7:  # Fill the remaining days with None
            week.append(None)
        weeks.append(week)

    # Prepare user availability data
    user_intervals = []
    for user in users:
        time_intervals = TimeInterval.objects.filter(author=user)
        user_intervals.append({
            'name': user.name,
            'intervals': time_intervals
        })

    context = {
        'event': event,
        'weeks': weeks,  # List of weeks containing dates
        'user_intervals': user_intervals,
        'username': request.POST.get('username', ''),
    }
    if 'user' in request.session:
        context['userexists']=request.session['user']
    return render(request, 'calendar.html', context)

def generate_time_slots(max_slot_time):
    slots = []
    for start_hour in range(0, 24, max_slot_time):
        start_time = f"{start_hour:02}:00"
        end_time = f"{(start_hour + max_slot_time) % 24:02}:00"
        if start_hour + max_slot_time <= 24:
            slots.append(f"{start_time} - {end_time}")
    return slots

def confirmation(request,code):
    context={'user_name':request.session['user'],"unique_code":code}
    return render(request,"confirmation.html",context)

def entercode(request):
    context={}
    return render(request,"entercode.html",context)

def home(request):
    context={}
    if ('user' in request.session):
        del request.session['user']
        request.session.modified=True
    return render(request,"homepage.html",context)

def howtouse(request):
    context={}
    return render(request,"howtouse.html",context)

def summary(request, code):
    context = {}
    event = HangoutCode.objects.get(code=code)
    context['event_name'] = event.event_name
    context['code'] = event.code

    # Get all users related to the specified HangoutCode
    users = UserData.objects.filter(event=event)

    # List to hold merged intervals for each user
    user_merged_intervals = []
    user_merged_intervals_dict={}
    # Gather free intervals for each user and merge them
    for user in users:
        user_intervals = TimeInterval.objects.filter(author=user).order_by('start')

        # List to hold this user's intervals
        user_intervals_list = [(interval.start, interval.end) for interval in user_intervals]

        # Merge the user's intervals
        merged_user_intervals = merge_intervals(user_intervals_list)

        # Append the merged intervals for this user
        user_merged_intervals.append(merged_user_intervals)
        user_merged_intervals_dict[user.name]=merged_user_intervals
    # Now find common free slots across all users
    common_free_slots = find_common_slots(user_merged_intervals)
    context['free'] = common_free_slots
    context['userslots']=user_merged_intervals_dict
    return render(request, "summary.html", context)



def merge_intervals(intervals):
    """ Merge overlapping and contiguous intervals for a single user. """
    if not intervals:
        return []

    # Convert end time of 00:00 to 23:59 for merging purposes
    for i in range(len(intervals)):
        if intervals[i][1].time() == time(0, 0):  # Check for end time 00:00
            intervals[i] = (intervals[i][0], datetime.combine(intervals[i][1].date(), time(23, 59), tzinfo=intervals[i][1].tzinfo))

    # Sort intervals by start time
    intervals.sort(key=lambda x: x[0])

    merged = []
    current_start, current_end = intervals[0]

    for start, end in intervals[1:]:
        # Check if the current interval overlaps with or is contiguous with the next one
        if start <= current_end or (current_end.time() == time(23, 59) and start.time() == time(0, 0)):
            current_end = max(current_end, end)  # Merge them
        else:
            merged.append((current_start, current_end))  # No overlap
            current_start, current_end = start, end  # Move to next interval

    # Don't forget to add the last interval
    merged.append((current_start, current_end))
    return merged





def find_common_slots(user_merged_intervals):
    """ Find common free slots across all users. """
    if not user_merged_intervals:
        return []

    # Start with the first user's merged intervals
    common_slots = user_merged_intervals[0]

    # Compare with the merged intervals of other users
    for user_slots in user_merged_intervals[1:]:
        new_common_slots = []
        for start, end in common_slots:
            for user_start, user_end in user_slots:
                # Find the overlap
                overlap_start = max(start, user_start)
                overlap_end = min(end, user_end)

                # If there's an overlap, add it to the new common slots
                if overlap_start < overlap_end:  # There is an overlap
                    new_common_slots.append((overlap_start, overlap_end))

        common_slots = new_common_slots

    return common_slots


def newcode(request):
    context={}
    if request.method=="POST":
        code = generateHangoutCode()
        event_name = request.POST['eventname']
        from_date = request.POST['fromdate']
        to_date = request.POST['todate']
        max_slot_time = request.POST['maxslottime']
        HangoutCode.objects.create(code=code,event_name=event_name,from_date=from_date,to_date=to_date,max_slot_time=max_slot_time)
        return redirect(f"/calendar/{code}")
    return render(request,"newcode.html",context)

# def generate_calendar(request, code):
   

def select_slots(request, selected_date,code):
    try:
        event = HangoutCode.objects.get(code=code)
    except HangoutCode.DoesNotExist:
        return redirect("/")
    username=request.session['user']
    # Fetch user intervals for the selected date
    year,month,day=map(int,selected_date.split('-'))
    max_slot_time=HangoutCode.objects.get(code=code).max_slot_time
    time_slots=generate_time_slots(max_slot_time)
    #user_intervals = TimeInterval.objects.filter(
    #    author=username, 
    #)

    # Render the template with the selected date and user intervals
    return render(request, 'slots.html', {
        'selected_date': selected_date,
        'username': username,
        'event': event,
        #'user_intervals': user_intervals,
        'max_slot_time':max_slot_time,
        'time_slots':time_slots,
        'code':code,
    })


def save_slots(request, selected_date,code):
    if request.method == 'POST':
        try:
            event = HangoutCode.objects.get(code=code)
        except HangoutCode.DoesNotExist:
            return redirect("/")
        username = request.POST.get('username')
        selected_times = request.POST.getlist('selected_times')  # Get the list of selected times

        # Get the author object (UserData) based on the username
        author = UserData.objects.get(name=username,event=HangoutCode.objects.get(code=code))

        for time in selected_times:
            # Split the time string by space instead of hyphen
            start_time_str, end_time_str = [selected_date+" "+t.strip() for t in time.split('-')]

            interval=TimeInterval(
                    tid=generateTimeCode(),
                    author=author,
                    start=start_time_str,
                    end=end_time_str
            )
            interval.save()

        return redirect(f'/confirmation/{author.event.code}')  # Redirect to a confirmation page or another view

    return redirect("/")

def save_user_data(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        code = request.POST.get('code')
        
        try:
            event = HangoutCode.objects.get(code=code)
        except HangoutCode.DoesNotExist:
            return redirect("/")

        # Save user data
        if (UserData.objects.get(name = username,event = event)):
            user_data=UserData.objects.get(name = username,event = event)
        else:
            user_data= UserData.objects.create(user_code=generateUserCode(),name = username,event = event)
            user_data.save()
        request.session['user']=user_data.name
        request.session.modified=True
        

        return redirect(f"/calendar/{code}")  # Redirect to the calendar or another page

    return render(request, 'error.html', {'message': 'Invalid request'})
