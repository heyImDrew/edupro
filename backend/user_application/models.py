import uuid
from django.db import models


class Profile(models.Model):
    """
    Profile class for each user
    """
    profile_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id = models.IntegerField(primary_key=False, null=False, blank=False)
    # Other fields
