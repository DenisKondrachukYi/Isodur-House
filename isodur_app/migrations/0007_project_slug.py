# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-01-26 09:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('isodur_app', '0006_product_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='slug',
            field=models.SlugField(default='', max_length=200),
            preserve_default=False,
        ),
    ]
