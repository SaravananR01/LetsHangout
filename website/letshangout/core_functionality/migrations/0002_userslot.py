# Generated by Django 4.1.13 on 2024-10-21 17:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core_functionality', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserSlot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=100)),
                ('date', models.DateField()),
                ('slot', models.CharField(max_length=50)),
                ('event_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core_functionality.hangoutcode')),
            ],
        ),
    ]
