# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-04-07 12:18
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('isodur_app', '0022_auto_20170407_1126'),
    ]

    operations = [
        migrations.RenameField(
            model_name='partner',
            old_name='name',
            new_name='title',
        ),
    ]
