# Generated by Django 2.0.7 on 2021-10-07 07:43

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client_manager', '0018_auto_20211006_1544'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='client_ID',
            field=models.CharField(max_length=128, validators=[django.core.validators.RegexValidator('\\d')]),
        ),
    ]
