from django.contrib import admin
from django.urls import path, include, re_path

from .views import index

urlpatterns = [
    path('', index, name='index'),
    path('user/', include('users.urls')),
    path('company/', include('company.urls')),
    path('departments/', include('departments.urls')),
    path('admin/', admin.site.urls),
    re_path(r'^', include('django.contrib.auth.urls')),
]
