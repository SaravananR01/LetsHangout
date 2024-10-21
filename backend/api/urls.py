from django.urls import path
from . import views

urlpatterns = [
    path('get_data/', views.get_data),  # Match the view you defined
    path('generate_code/', views.generate_code, name='generate_code'),
]