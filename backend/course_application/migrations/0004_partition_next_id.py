# Generated by Django 3.2.8 on 2021-12-14 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course_application', '0003_course_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='partition',
            name='next_id',
            field=models.UUIDField(null=True),
        ),
    ]
