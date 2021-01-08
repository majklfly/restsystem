from django.conf import settings
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
import json
from django.urls import reverse
from django.core.mail import send_mail
from rest_framework.response import Response
from django.utils.encoding import smart_str, force_str, force_bytes, DjangoUnicodeDecodeError

from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .serializers import ResetPasswordEmailRequestSerializer
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode

from rest_framework import generics, status
from .models import CustomUser


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
        if user.is_active:
            login(request, user)
            user_data = CustomUser.objects.get(
                email=email)
            return JsonResponse({'status': 'logged', 'user': email, 'company': user.company.name, 'company_id': user.company.id, 'access_employees': user.access_employees, 'access_stock': user.access_stock, 'access_training': user.access_training, 'access_orders': user.access_orders, 'access_rota': user.access_rota, 'is_active': user.is_active, 'firstName': user.firstName, 'lastName': user.lastName}, status=200)
    return JsonResponse({"message": "incorrect credentials"}, status=401)


class RequestPasswordResetEmail(generics.GenericAPIView):
    serializer_class = ResetPasswordEmailRequestSerializer

    def post(self, request):
        email = request.data['email']

        if CustomUser.objects.filter(email=email).exists():
            user = CustomUser.objects.get(email=email)
            print(user)
            uidb64 = urlsafe_base64_encode(force_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            relativeLink = reverse(
                'password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token})
            absurl = 'https://r-restsystem.herokuapp.com/' + relativeLink
            # email_body = "Hello there, \n You have requested a recovery email. If you don't recognize this email, please contact administrator on majklfly@gmail.com. \nPlease use link below to reset your password \n" + absurl
            send_mail('Subject here', "body", 'majklfly2@seznam.cz',
                      ['majklfly@gmail.com'], fail_silently=False)
        return Response({'A recovery link has been sent to the provided email.'}, status=status.HTTP_200_OK)


class PasswordTokenCheckAPI(generics.GenericAPIView):
    def get(self, request, uidb64, token):

        try:
            id = smart_str(urlsafe_base64_decode(uidb64))
            user = CustomUser.objects.get(id=id)

            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response({'error': 'Token is not valid, please request a new one'}, status=status.HTTP_401_UNAUTHORIZED)

            return Response({'success': True, 'message': 'Credentials are Valid', 'uidb64': uidb64, 'token': token, 'status': status.HTTP_200_OK})

        except DjangoUnicodeDecodeError:
            return Response({'error': 'Token is not valid, please request a new one'}, status=status.HTTP_401_UNAUTHORIZED)
