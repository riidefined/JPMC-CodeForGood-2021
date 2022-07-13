from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from multiselectfield import MultiSelectField


class CustomAccountManager(BaseUserManager):

    def create_superuser(self, email, username, first_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, username, first_name, password, **other_fields)

    def create_user(self, email, username, first_name, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))

        email = self.normalize_email(email)
        user = self.model(email=email, username=username,
                          first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user

    def make_inactive(self, username):
        user = self.get_by_natural_key(username)
        user.model(is_active=False)
        user.save()
        return


class NewUser(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(_('email address'), unique=True)
    username = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150, blank=True)
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(_(
        'about'), max_length=500, blank=True)
    is_staff = models.BooleanField(default=False)
    intial = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name']

    def __str__(self):
        return self.username


projects = (
    ('Bright Spark Education Program', 'Bright Spark Education Program'),
    ('Transformers (Livelihood)', 'Transformers (Livelihood)'),
    ('Feeding Program (Zero Hunger)', 'Feeding Program (Zero Hunger) '),
    ('Women of Courage (Gender)', 'Women of Courage (Gender)'),
    ('Youngistaan Animal Heroes', ' Youngistaan Animal Heroes'),
    ('Blood Donor', 'Blood Donor'),
    ('Other', 'Other'),
)


class UserData(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='user_assign')
    phoneNumber = models.CharField(max_length=15)
    age = models.IntegerField()
    nameofCompanyorCollege = models.CharField(max_length=250)
    city = models.CharField(max_length=150)
    projectsInterested = MultiSelectField(choices=projects)
    pastVolunteeringExperience = models.TextField(max_length=1000)
    howDidYouHearAboutUs = models.TextField(max_length=500)
    hoursWorked = models.IntegerField(default=0)
    status = models.CharField(max_length=15, default='volunteer',choices=(('volunteer','volunteer'),('su','su'),('coordinator','coordinator')))
    objects = models.Manager

    def __str__(self):
        return self.user.email
