from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.utils import timezone

from .managers import CustomUserManager


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    firstName = models.CharField(max_length=200, null=True, blank=True)
    lastName = models.CharField(max_length=200, null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    access_employees = models.BooleanField(default=False)
    access_stock = models.BooleanField(default=False)
    access_training = models.BooleanField(default=False)
    access_orders = models.BooleanField(default=False)
    access_rota = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    department = models.ForeignKey(
        "departments.Department", on_delete=models.CASCADE, null=True, blank=True)
    company = models.ForeignKey(
        "company.company", on_delete=models.CASCADE, null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email
