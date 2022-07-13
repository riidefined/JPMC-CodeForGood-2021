from django.urls import path
from .views import CustomUserCreate, UserDataView
from rest_framework.routers import DefaultRouter


app_name = 'users'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('userData/', UserDataView.as_view(), name="userData")
]
