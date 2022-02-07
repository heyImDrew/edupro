import uuid

from django.db import models
from .enums.course_type import CourseType


class Partition(models.Model):
    partition_id = models.UUIDField(primary_key=True, null=False, blank=False, default=uuid.uuid4)
    course_id = models.UUIDField(null=False, blank=False)
    index = models.IntegerField(null=False, blank=False, default=0)
    type = models.CharField(max_length=255, choices=CourseType.choices(), null=False, blank=False)
    including_task = models.BooleanField(null=False, default=False)
    text_1 = models.TextField(null=True, blank=True)
    text_2 = models.TextField(null=True, blank=True)
    picture = models.TextField(null=True, blank=True)
    next_id = models.UUIDField(null=True, blank=True, default=None)
