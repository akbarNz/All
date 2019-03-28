# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from . import serializers
from . import models
from rest_framework import viewsets, filters

# Create your views here.

class BookViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.BookSerializer
    queryset = models.Book.objects.all()

class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserProfileSerializer
    queryset = models.UserProfile.objects.all()
    filter_backends = (filters.SearchFilter,)
    search_fields = ('email','name')
