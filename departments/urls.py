from django.urls import re_path, path
from . import views

urlpatterns = [
    path('', views.DepartmentsListView.as_view(), name="departmentListView"),
    path('<int:pk>/', views.DepartmentsDetailView.as_view(),
         name='departmentsDetailView')
]
