from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from django.contrib.auth.models import User


@receiver(pre_save, sender=User)
def presave_user_printout(instance, **kwargs):
    print("Trying to create User...")


@receiver(post_save, sender=User)
def postsave_user_printout(instance, **kwargs):
    print("User created!")
