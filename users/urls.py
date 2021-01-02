from django.conf.urls import url
from rest_framework import routers
from . import views

urlpatterns = [
    url(r'^login/$', views.login_user, name='login'),
]
