from django.urls import re_path, path
from rest_framework import routers
from . import views

urlpatterns = [
    re_path(r'^login/$', views.login_user, name='login'),
    re_path(r'^logout/$', views.logout_user, name='logout'),
    re_path(r'^auth/$',  views.login_form, name='login_form'),
    path('request-reset-email/', views.RequestPasswordResetEmail.as_view(),
         name='request-reset-email'),
    path('password-reset/<uidb64>/<token>/',
         views.PasswordTokenCheckAPI.as_view(), name='password-reset-confirm'),
]
