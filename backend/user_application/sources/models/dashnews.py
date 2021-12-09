from django.db import models

class DashNews(models.Model):
    dn_id = models.UUIDField(null=False, blank=False, primary_key=True)
    header = models.CharField(null=False, blank=False, max_length=255)
    text = models.TextField(null=False, blank=False)
    url = models.CharField(null=False, blank=False, max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.header)
