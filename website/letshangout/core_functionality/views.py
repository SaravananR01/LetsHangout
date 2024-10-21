from django.shortcuts import render,redirect
from .models import HangoutCode, UserData, TimeInterval
from datetime import timedelta
import random

chars=[chr(x) for x in range (65,91)]
nums=[chr(x) for x in range (48,58)]

def generategeneric():
    return random.choice(chars)+random.choice(chars)+random.choice(nums)+random.choice(nums)+random.choice(chars)+random.choice(chars)

def generateHangoutCode():
    code=generategeneric()
    while len(HangoutCode.objects.filter(code=code))>0:
        code=generategeneric()
    return code

def calendar(request):
    context={}
    return render(request,"calender.html",context)

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

def generate_calendar(request, code):
    event = HangoutCode.objects.get(code=code)
    users = UserData.objects.filter(event=event)
    
    start_date = event.from_date
    end_date = event.to_date
    delta = timedelta(days=1)
    
    dates = []
    current_date = start_date
    while current_date <= end_date:
        dates.append(current_date)
        current_date += delta
    
    user_intervals = []
    for user in users:
        time_intervals = TimeInterval.objects.filter(author=user)
        user_intervals.append({
            'name': user.name,
            'intervals': time_intervals
        })
    
    context = {
        'event': event,
        'dates': dates,
        'user_intervals': user_intervals
    }
    
    return render(request, 'calendar.html', context)