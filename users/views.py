from django.conf import settings
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
import json


def logout_user(request):
    logout(request)
    return redirect('/polls/')


def login_form(request):
    return render(request, 'index.html', {})


def login_user(request):
    email = json.loads(request.body)['email']
    password = json.loads(request.body)['password']
    user = authenticate(email=email, password=password)
    if user is not None:
        # the password verified for the user
        if user.is_active:
            login(request, user)
            return JsonResponse({'status': 'logged', 'user': email}, status=200)
    return JsonResponse({"message": "incorrect credentials"}, status=401)
