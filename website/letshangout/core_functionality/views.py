from django.shortcuts import render

def calender(request):
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
    return render(request,"newcode.html",context)