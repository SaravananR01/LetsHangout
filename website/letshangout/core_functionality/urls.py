from django.urls import path,include

from . import views

urlpatterns = [
    path("calender/", views.calender, name="calender"),
    path("confirmation/", views.confirmation, name="confirmation"),
    path("entercode/", views.entercode, name="entercode"),
    path("", views.home, name="home"),
    path("howtouse/",views.howtouse,name="howtouse"),
    path("newcode/",views.newcode,name="newcode")
]