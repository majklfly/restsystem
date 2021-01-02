from django.conf import settings
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout


def login_user(request):
    email = request.POST.get('email')
    password = request.POST.get('password')
    user = authenticate(email=email, password=password)
    if user is not None:
        # the password verified for the user
        if user.is_active:
            login(request, user)
            return redirect('/')
    return redirect('/', request)
