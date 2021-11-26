import uuid

from django.db import models


class UserDesk(models.Model):
    """
    User added
    """
    user_id = models.IntegerField(null=False, blank=False)
    desk_id = models.UUIDField(null=False, blank=False, default=uuid.uuid4)
    liked = models.BooleanField(default=False)
