# Generated by Django 2.0.7 on 2021-10-06 06:00

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client_manager', '0005_auto_20211006_0733'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='cell_number',
            field=models.CharField(max_length=10, validators=[django.core.validators.RegexValidator('^((\\+|00|09)\\d{2,3}|0)\\d{9}$')]),
        ),
    ]
