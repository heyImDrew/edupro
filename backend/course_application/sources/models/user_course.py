import uuid

from django.db import models

from .partition import Partition


class UserCourse(models.Model):
    usercourse_id = models.UUIDField(primary_key=True, null=False, blank=False, default=uuid.uuid4)
    user_id = models.IntegerField(null=False, blank=False)
    course_id = models.UUIDField(null=False, blank=False)
    partitions_completed = models.ManyToManyField(Partition, blank=True)
    index_progress = models.IntegerField(null=False, blank=False, default=0)
    liked = models.BooleanField(null=False, default=False)
