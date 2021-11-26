import uuid

from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Profile


@receiver(post_save, sender=User)
def profile_autocreate(instance, created, **kwargs):
    if created:
        user_id = instance.id
        profile = Profile()
        profile.profile_id = uuid.uuid4()
        profile.user_id = user_id
        profile.save()


@receiver(post_delete, sender=User)
def profile_autodelete(instance, **kwargs):
    user_id = instance.id
    profile = Profile.objects.get(user_id=user_id)
    print(profile)
    profile.delete()
