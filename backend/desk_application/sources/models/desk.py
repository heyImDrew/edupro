import uuid

from django.db import models


class Desk(models.Model):
    """
    Desk to store cards at
    """
    desk_id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4)
    created_by_id = models.IntegerField(blank=False, null=False)
    name = models.CharField(blank=False, null=False, max_length=256)
    description = models.TextField(blank=True, null=False)
    deleted = models.BooleanField(default=False)
