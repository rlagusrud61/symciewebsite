from . import views
from django.urls import path

urlpatterns = [
    path('', views.content, name='content'),
    path('location/', views.location, name='location'),
    path('committees/', views.committee, name='committees'),
    path('partners/' , views.partners, name='partners'),
    path('speakers/', views.speakers, name='speakers'),
]
