# Generated by Django 3.2.8 on 2021-11-20 18:17

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Card',
            fields=[
                ('card_id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False, unique=True)),
                ('desc_id', models.UUIDField()),
                ('question', models.TextField()),
                ('answer', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Desk',
            fields=[
                ('desc_id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False, unique=True)),
                ('created_by_id', models.IntegerField()),
                ('name', models.CharField(max_length=256)),
                ('description', models.TextField(blank=True)),
            ],
        ),
    ]