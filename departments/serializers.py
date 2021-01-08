from rest_framework import serializers
from .models import Department
from users.serializers import CustomUserListSerializer


class DepartmentsSerializer(serializers.ModelSerializer):
    users = CustomUserListSerializer(
        source='customuser_set', many=True, read_only=True)

    class Meta:
        model = Department
        fields = ('__all__')
