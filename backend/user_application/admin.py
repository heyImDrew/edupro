from django.contrib.auth.models import Group, User
from django.contrib import admin
from .models import Profile, Feedback, DashNews

# Removing Group from admin panel
admin.site.unregister(Group)

# Adding Profile to admin panel
admin.site.register(Profile)
admin.site.register(Feedback)
admin.site.register(DashNews)

class MyUserAdmin(admin.ModelAdmin):
    list_display = ['email', 'first_name', 'last_name', 'id']

admin.site.unregister(User)
admin.site.register(User, MyUserAdmin)

