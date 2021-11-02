from django.contrib.auth.models import Group
from django.contrib import admin
from .models import Profile

# Removing Group from admin panel
admin.site.unregister(Group)

# Adding Profile to admin panel
admin.site.register(Profile)
