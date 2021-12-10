from . import views
from django.urls import path

urlpatterns = [
    path('', views.landing, name='landing'),
    path('location/', views.location, name='location'),
    path('committee/', views.committee, name='committee'),
]
