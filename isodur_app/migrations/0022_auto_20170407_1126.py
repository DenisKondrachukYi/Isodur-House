# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-04-07 11:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('isodur_app', '0021_auto_20170407_1121'),
    ]

    operations = [
        migrations.RenameField(
            model_name='partner',
            old_name='title',
            new_name='name',
        ),
        migrations.RemoveField(
            model_name='partnerimage',
            name='project_photo',
        ),
        migrations.AddField(
            model_name='partnerimage',
            name='partners',
            field=models.ImageField(blank=True, null=True, upload_to='partners'),
        ),
    ]