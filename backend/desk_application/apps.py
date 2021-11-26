from django.apps import AppConfig


class DeskApplicationConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'desk_application'

    def ready(self):
        from . import signals
