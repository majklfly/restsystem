from django.urls import re_path, path
from . import views

urlpatterns = [
    path('', views.CompanyListView.as_view(), name="companyListView"),
    path('<int:pk>/', views.CompanyDetailView.as_view(), name='companyDetailView')
]
