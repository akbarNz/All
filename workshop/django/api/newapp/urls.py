from django.urls import path, include

from rest_framework.routers import DefaultRouter, SimpleRouter
from . import views

router = DefaultRouter()
router.register('book', views.BookViewSet)
router.register('profile', views.UserProfileViewSet)
urlpatterns = [
    path('', include(router.urls)),
]