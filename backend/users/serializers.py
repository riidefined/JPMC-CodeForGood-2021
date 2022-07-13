from rest_framework import serializers
from users.models import NewUser
from rest_framework import serializers
from .models import UserData
from django.conf import settings
from rest_framework import fields, serializers

projects = (
    ('Bright Spark Education Program', 'Bright Spark Education Program'),
    ('Transformers (Livelihood)', ' Transformers (Livelihood)'),
    ('Feeding Program (Zero Hunger)', ' Feeding Program (Zero Hunger) '),
    ('Women of Courage (Gender)', 'Women of Courage (Gender)'),
    ('Youngistaan Animal Heroes', ' Youngistaan Animal Heroes'),
    ('Blood Donor', ' Blood Donor'),
    ('Other', 'Other'),
)



class CustomUserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = NewUser
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance




class UserDataSerializer(serializers.ModelSerializer):
    projectsInterested = fields.MultipleChoiceField(choices=projects)
    phoneNumber = serializers.CharField(max_length=15)
    age = serializers.IntegerField()
    nameofCompanyorCollege = serializers.CharField(max_length=250)
    city = serializers.CharField(max_length=150)
    pastVolunteeringExperience = serializers.CharField(max_length=1000)
    howDidYouHearAboutUs= serializers.CharField(max_length=500)
    hoursWorked = serializers.IntegerField(default=0)

    def create(self, validated_data):
        return UserData.objects.create(**validated_data)
    
    class Meta:
        model = UserData
        read_only_fields = ['user']
        fields = '__all__'