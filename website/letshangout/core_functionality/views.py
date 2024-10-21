from django.shortcuts import render,redirect
from .models import HangoutCode,UserData,TimeInterval
import random
from datetime import timedelta,datetime
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

    return render(request, 'calendar.html', context)

def generate_time_slots(max_slot_time):
    slots = []
    for start_hour in range(0, 24, max_slot_time):
        start_time = f"{start_hour:02}:00"
        end_time = f"{(start_hour + max_slot_time) % 24:02}:00"
        if start_hour + max_slot_time <= 24:
            slots.append(f"{start_time} - {end_time}")
    return slots

def confirmation(request):
    context={}
    return render(request,"confirmation.html",context)

def entercode(request):
    context={}
    return render(request,"entercode.html",context)

def home(request):
    context={}
    return render(request,"homepage.html",context)

def howtouse(request):
    context={}
    return render(request,"howtouse.html",context)

def summary(request,code):
    context={}
    return render(request,"summary.html",context)

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
   

def select_slots(request, selected_date, username):
    code = request.GET.get('code')
    
    # Validate if the code exists
    try:
        event = HangoutCode.objects.get(code=code)
    except HangoutCode.DoesNotExist:
        return render(request, 'error.html', {'message': 'Event not found'})

    # Fetch user intervals for the selected date
    year,month,day=map(int,selected_date.split('-'))
    max_slot_time=HangoutCode.objects.get(code=code).max_slot_time
    date_object=datetime(year,month,day)
    time_slots=generate_time_slots(max_slot_time)
    user_intervals = TimeInterval.objects.filter(
        author=username, # Change this to match your model's field
    )

    # Render the template with the selected date and user intervals
    return render(request, 'slots.html', {
        'selected_date': selected_date,
        'username': username,
        'event': event,
        'user_intervals': user_intervals,
        'max_slot_time':max_slot_time,
        'time_slots':time_slots,
    })


def save_slots(request, selected_date):
    if request.method == 'POST':
        username = request.POST.get('username')
        selected_times = request.POST.getlist('selected_times')  # Get the list of selected times

        # Get the author object (UserData) based on the username
        author = UserData.objects.get(name=username)

        for time in selected_times:
            # Split the time string by space instead of hyphen
            start_time_str, end_time_str = [t.strip() for t in time.split('-')]
        
            # try:
            #     # Assuming time is in HH:MM format
            #     start_time = timezone.datetime.strptime(start_time_str, "%H:%M:%S").time()
            #     end_time = timezone.datetime.strptime(end_time_str, "%H:%M:%S").time()

            #     # Create and save TimeInterval instance
            #     interval = TimeInterval(
            #         tid=f"{username}_{start_time_str}",  # Generate a unique tid
            #         author=author,
            #         start=start_time,
            #         end=end_time
            #     )
            #     interval.save()

            # except ValueError as e:
            #     return render(request, 'error.html', {'message': f'Invalid time format: {start_time_str} or {end_time_str}'})

            interval=TimeInterval(
                    tid=f"{username}_{start_time_str}",
                    author=author,
                    start=start_time_str,
                    end=end_time_str
            )
            interval.save()

        return redirect('confirmation')  # Redirect to a confirmation page or another view

    return render(request, 'error.html', {'message': 'Invalid request'})

def save_user_data(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        code = request.POST.get('code')
        
        try:
            event = HangoutCode.objects.get(code=code)
        except HangoutCode.DoesNotExist:
            return render(request, 'error.html', {'message': 'Event not found'})

        # Save user data
        user_data= UserData.objects.create(user_code=generateUserCode(),name = username,event = event)
        user_data.save()

        return redirect(f"/calendar/{code}")  # Redirect to the calendar or another page

    return render(request, 'error.html', {'message': 'Invalid request'})
