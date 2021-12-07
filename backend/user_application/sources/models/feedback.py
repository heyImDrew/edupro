import uuid
from django.db import models


class Feedback(models.Model):
    """
    Feedback class for anonymous user
    """
    feedback_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    full_name = models.CharField(max_length=255, null=False, blank=True)
    email = models.EmailField(null=False, blank=False)
    phone = models.CharField(max_length=255, null=True, blank=True)
    message = models.TextField(null=False, blank=False)
    # Other fields

    def __str__(self):
        return f"feedback id: {self.feedback_id}"
