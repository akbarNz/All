# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils.timezone import now
from django.db.models.signals import post_save,pre_save

# Create your models here.

class Book(models.Model):
    name = models.CharField(max_length=45)
    numero = models.IntegerField()
    isDone = models.BooleanField()

class UserProfileManager(BaseUserManager):

    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('Users must have an email address.')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, name, password):
    
        user = self.create_user(
            email,
            name,
            password
        )

        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user

class UserProfile(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(null=True, blank=True,max_length=300)
    is_staff = models.BooleanField(default=False)
    objects = UserProfileManager()

    USERNAME_FIELD = 'email'# Spécifie à DRF de s'identifier avec l'email au lieu du nom d'utilisateur
    REQUIRED_FIELDS = ['name']

    #def update_Profile(sender,instance, **kwargs):
    #    false = UserProfile.objects.filter(is_staff=True)
    #   if false:
    #       false.update(is_staff=False)

    #post_save.connect(update_Profile, sender=Periode)

    def __str__(self):

        return self.email