from rest_framework import generics, filters
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated, IsAuthenticatedOrReadOnly, BasePermission, IsAdminUser, DjangoModelPermissions, AllowAny
from rest_framework.response import Response
from rest_framework import viewsets
from django.shortcuts import get_object_or_404, resolve_url
from users.models import NewUser, UserData
from rest_framework.views import APIView
from .models import Event, Application
from users.models import UserData
from .serializers import EventSerializer, ApplicationSerializer, ApplicationGetSerializer, SubmissionSerializer, SeeAllApplicationsSerializer
from rest_framework import status

class AccessApplicationPermission(BasePermission):
    def has_permission(self, request, view):
        q = UserData.objects.filter(user=request.user).first()
        if q.status == 'coordinator':
            return True
        else:
            return False

class SubmitPermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user

class EventListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        obj = UserData.objects.get(user=request.user)
        events = Event.objects.filter(ongoing=True, project__in=[
                                      project for project in obj.projectsInterested])
        srl = EventSerializer(events, many=True)
        print(srl.data)
        return Response(srl.data)


class ApplyView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self,request):
        obj = Application.objects.filter(user=request.user)
        srl = ApplicationGetSerializer(obj, many=True)
        print(srl.data)
        return Response(srl.data)

    def post(self, request):
        print(request.data)
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer.validated_data)
            serializer.save(user=request.user, unique=request.user.email+" "+ str(request.data.get('event')))
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SubmitReport(viewsets.ModelViewSet):
    permission_classes=[SubmitPermission, IsAuthenticated]
    serializer_class = SubmissionSerializer
    queryset = Application.objects.all()


class SeeAllApplications(viewsets.ModelViewSet):
    permission_classes=[AccessApplicationPermission,IsAuthenticated]
    serializer_class = SeeAllApplicationsSerializer
    queryset = Application.objects.all()

class GetPublished(APIView):
    permission_classes=[AllowAny]

    def get(self, request):
        obj = Application.objects.filter(status='published')
        srl = SeeAllApplicationsSerializer(obj, many=True)
        print(srl.data)
        return Response(srl.data)


