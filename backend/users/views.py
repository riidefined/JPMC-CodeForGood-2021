from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated, IsAuthenticatedOrReadOnly, BasePermission, IsAdminUser, DjangoModelPermissions
from .serializers import CustomUserSerializer, UserDataSerializer
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django.core.serializers import serialize 
from .models import UserData
import json
from django.shortcuts import get_object_or_404, resolve_url


class UserAccessPermission(BasePermission):
    # def has_permission(self,request,view):
    #     return UserData.objects.filter(user=request.user).first().status == 'coordinator'

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDataView(APIView):
    permission_classes = [IsAuthenticated, UserAccessPermission]
    serializer_class = UserDataSerializer
    queryset = UserData.objects.all()

    def get(self, request):
        try:
            obj = UserData.objects.filter(user=request.user).first()
            srl = UserDataSerializer(obj, context={'request': request})
            return Response(srl.data)
        except UserData.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)


    def post(self, request, format=None):
        print(request.data)
        serializer = UserDataSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save(user=self.request.user, initial= True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
