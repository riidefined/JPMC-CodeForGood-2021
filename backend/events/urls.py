from .views import EventListView, ApplyView, SubmitReport, SeeAllApplications, GetPublished
from django.urls import path
from rest_framework.routers import DefaultRouter

app_name = 'events'
router = DefaultRouter()
router.register('submit', SubmitReport, basename='submit_for_review')
router.register('coordinator/seeall', SeeAllApplications)

urlpatterns = [
    path('', EventListView.as_view(), name='listpost'),
    path('apply/', ApplyView.as_view(), name='apply'),
    path('getpublished/', GetPublished.as_view(), name='getpublished'),
]+router.urls
