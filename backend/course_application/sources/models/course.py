import uuid

from django.db import models


class Course(models.Model):
    course_id = models.UUIDField(primary_key=True, default=uuid.uuid4, null=False)
    name = models.CharField(max_length=255, null=False, blank=False)
    description = models.CharField(max_length=255, null=True, blank=True)
    difficulty = models.IntegerField(null=False, blank=False, default=1)
    image = models.TextField(null=True)
