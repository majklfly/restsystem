from rest_framework import serializers
from .models import CustomUser


class ResetPasswordEmailRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=2)

    class Meta:
        fields = ('__all__')


class CustomUserListSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ('__all__')
