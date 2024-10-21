from django.urls import path,include

from . import views

urlpatterns = [
    path("calendar/<str:code>", views.calendar, name="calendar"),
    path("confirmation/", views.confirmation, name="confirmation"),
    path("entercode/", views.entercode, name="entercode"),
    path("", views.home, name="home"),
    path("howtouse/",views.howtouse,name="howtouse"),
    path("newcode/",views.newcode,name="newcode"),
    path("summary/<str:code>",views.summary,name="summary"),
]