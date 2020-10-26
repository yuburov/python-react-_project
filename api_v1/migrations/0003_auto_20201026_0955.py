# Generated by Django 3.1.2 on 2020-10-26 09:55

from django.db import migrations
import mirage.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api_v1', '0002_auto_20201021_0751'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='inn',
            field=mirage.fields.EncryptedCharField(max_length=50, verbose_name='ИНН'),
        ),
    ]