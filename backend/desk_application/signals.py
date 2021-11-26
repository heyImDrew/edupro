import uuid

from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Desk, UserDesk


@receiver(post_save, sender=Desk)
def userdesk_autocreate(instance, created, **kwargs):
    if created:
        user_id = instance.created_by_id
        desk_id = instance.desk_id
        userdesk = UserDesk()
        userdesk.user_id = user_id
        userdesk.desk_id = desk_id
        userdesk.save()
