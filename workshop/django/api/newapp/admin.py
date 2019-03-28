# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from . import models

# Register your models here.


@admin.register(models.UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
	list_display = ("email","name","is_staff")
