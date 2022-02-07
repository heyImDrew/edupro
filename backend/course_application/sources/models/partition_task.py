import uuid

from django.db import models


class PartitionTask(models.Model):
    task_id = models.UUIDField(primary_key=True, null=False, blank=False, default=uuid.uuid4)
    partition_id = models.UUIDField(null=False, blank=False)
    task_question = models.TextField(null=False, blank=False)
    task_answer = models.TextField(null=False, blank=False)
