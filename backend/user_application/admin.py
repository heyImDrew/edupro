from django.contrib.auth.models import Group
from django.contrib import admin
from .models import Profile
from .models import Feedback

# Removing Group from admin panel
admin.site.unregister(Group)

# Adding Profile to admin panel
admin.site.register(Profile)
admin.site.register(Feedback)
