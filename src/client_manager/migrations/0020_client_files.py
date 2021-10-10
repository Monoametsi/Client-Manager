# Generated by Django 2.0.7 on 2021-10-08 19:38

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client_manager', '0019_auto_20211007_0943'),
    ]

    operations = [
        migrations.CreateModel(
            name='Client_Files',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('client_ID', models.CharField(max_length=128, validators=[django.core.validators.RegexValidator('\\d')])),
                ('requested_doc', models.FileField(upload_to='uploads')),
            ],
        ),
    ]
