# Generated by Django 2.2.14 on 2020-07-15 08:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0003_bggfjgfmh'),
    ]

    operations = [
        migrations.AddField(
            model_name='bggfjgfmh',
            name='cvnncvgnv',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bggfjgfmh_cvnncvgnv', to='home.HomePage'),
        ),
        migrations.AddField(
            model_name='bggfjgfmh',
            name='jhkjh',
            field=models.ManyToManyField(blank=True, related_name='bggfjgfmh_jhkjh', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='bggfjgfmh',
            name='jhkjhkh',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bggfjgfmh_jhkjhkh', to=settings.AUTH_USER_MODEL),
        ),
    ]
