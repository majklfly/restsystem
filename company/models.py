from django.db import models
from datetime import datetime


class Company(models.Model):
    name = models.CharField(max_length=200)
    created = models.DateField(default=datetime.now)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Companies'
