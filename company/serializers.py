from rest_framework import serializers
from .models import Company
from departments.models import Department
from departments.serializers import DepartmentsSerializer


class CompanySerializer(serializers.ModelSerializer):
    departments = DepartmentsSerializer(
        source="department_set", many=True, read_only=True)

    class Meta:
        model = Company
        fields = ('__all__')
