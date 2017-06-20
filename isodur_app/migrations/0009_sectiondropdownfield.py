# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-03-18 13:55
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('isodur_app', '0008_auto_20170127_1209'),
    ]

    operations = [
        migrations.CreateModel(
            name='SectionDropdownField',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('title_en', models.CharField(max_length=50, null=True)),
                ('title_fr', models.CharField(max_length=50, null=True)),
                ('title_ru', models.CharField(max_length=50, null=True)),
                ('url', models.CharField(max_length=200)),
                ('section', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='isodur_app.Section')),
            ],
        ),
    ]
