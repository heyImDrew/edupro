import uuid

from django.db import models


class Card(models.Model):
    """
    Cards in desk
    """
    card_id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4)
    desk_id = models.UUIDField(blank=False, null=False)
    question = models.TextField(blank=False, null=False)
    answer = models.TextField(blank=False, null=False)
