from django.db import models

class HangoutCode(models.Model):
    name = models.CharField(max_length=100)
    event_name = models.CharField(max_length=100)
    from_date = models.DateField()
    to_date = models.DateField()
    max_slot_time = models.PositiveIntegerField()  # In hours
    max_people = models.PositiveIntegerField()
    code = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.code