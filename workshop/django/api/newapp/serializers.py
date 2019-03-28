from rest_framework import serializers, fields
from . import models

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Book
        fields = '__all__'

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserProfile
        fields = ('id', 'email', 'name','is_staff')
        extra_kwargs = {
            'last_login': {'read_only': True},
        }

    def create(self, validated_data):

        user = models.UserProfile(
            email=validated_data['email'],
            name=validated_data['name']
        )

        user.save()
        return user

