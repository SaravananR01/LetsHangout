from django.shortcuts import render,redirect
from .models import HangoutCode,UserData,TimeInterval
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

def calendar(request,code):
    context={}
    return render(request,"calendar.html",context)

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