from django.db import models
from django.utils import timezone
from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from rest_framework.exceptions import ValidationError
from multiselectfield import MultiSelectField
from users.models import UserData

projects = [
    ('Bright Spark Education Program', 'Bright Spark Education Program'),
    ('Transformers (Livelihood)', 'Transformers (Livelihood)'),
    ('Feeding Program (Zero Hunger)', 'Feeding Program (Zero Hunger) '),
    ('Women of Courage (Gender)', 'Women of Courage (Gender)'),
    ('Youngistaan Animal Heroes', 'Youngistaan Animal Heroes'),
    ('Blood Donor', 'Blood Donor'),
    ('Other', 'Other'),

]


class Event(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=250)
    desc = models.CharField(max_length=500)
    image = models.ImageField(upload_to='events/images')
    project = models.CharField(max_length=100, choices=projects)
    ongoing = models.BooleanField(default=True)
    coordinator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)
    objects = models.Manager

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if UserData.objects.filter(user=self.coordinator).first().status == 'coordinator':
            super(Event, self).save(*args, **kwargs)
        else:
            raise ValidationError('Selected User is not a coordinator')



class Application(models.Model):

    class InReviewApplication(models.Model):
        def get_queryset(self):
            return super().get_queryset.all().filter(approve=True, status='review')

    class UnApprovedApplication(models.Model):
        def get_queryset(self):
            return super().get_queryset.all().filter(approve=False)

    event = models.ForeignKey(
        Event, on_delete=models.CASCADE, related_name='event_superset', default=1)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    unique = models.CharField(max_length=300, default="")
    application_date = models.DateTimeField(default=timezone.now)
    approve = models.BooleanField(default=False)
    end_date = models.DateTimeField(null=True, default=timezone.now)
    status = models.CharField(max_length=20, default='unpub')
    description = models.TextField(null=True)
    media = models.ImageField(upload_to='events/images')
    hours = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)

    in_review = InReviewApplication
    un_approved = UnApprovedApplication
    objects = models.Manager
    
    class Meta:
        ordering = ('-application_date',)

    def __str__(self):
        return self.unique

