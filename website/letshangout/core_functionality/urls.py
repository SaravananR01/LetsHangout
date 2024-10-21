from django.urls import path,include

from . import views

urlpatterns = [
    path("calendar/<str:code>", views.calendar, name="calendar"),
    path("confirmation/", views.confirmation, name="confirmation"),
    path("entercode/", views.entercode, name="entercode"),
    path("", views.home, name="home"),
    path("howtouse/",views.howtouse,name="howtouse"),
    path("newcode/",views.newcode,name="newcode"),
    path('select-slots/<str:selected_date>/<str:username>/', views.select_slots, name='select_slots'),
    path('save-slots/<str:selected_date>/', views.save_slots, name='save_slots'),
    path('save-user/', views.save_user_data, name='save_user_data'),
]