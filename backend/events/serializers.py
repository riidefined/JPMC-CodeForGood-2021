from rest_framework import serializers
from users.models import NewUser
from rest_framework import serializers
from .models import Event, Application
from django.conf import settings
from rest_framework import fields, serializers

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        read_only_fields = ['user',]
        fields = ('event', 'id', 'user')

class ApplicationGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        read_only_fields = ['user',]
        fields = ('event', 'id', 'user', 'approve')

class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        read_only_fields = ['user','event','id']
        fields = ('event', 'id', 'user', 'hours', 'media', 'description', 'status', 'end_date')

class SeeAllApplicationsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Application
        fields = "__all__"