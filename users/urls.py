from django.conf.urls import url
from rest_framework import routers
from . import views

urlpatterns = [
    url(r'^login/$', views.login_user, name='login'),
    url(r'^logout/$', views.logout_user, name='logout'),
    url(r'^auth/$',  views.login_form, name='login_form'),
]
