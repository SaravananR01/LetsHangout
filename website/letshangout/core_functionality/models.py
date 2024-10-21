from django.db import models

class HangoutCode(models.Model):
    code = models.CharField(max_length=255,primary_key=True)
    event_name = models.CharField(max_length=100)
    from_date = models.DateField()
    to_date = models.DateField()
    max_slot_time = models.PositiveIntegerField()
    
    def __str__(self):
        return self.code
    
class UserData(models.Model):
    user_code=models.CharField(max_length=255,primary_key=True)
    name=models.CharField(max_length=100)
    event=models.ForeignKey(HangoutCode,on_delete=models.CASCADE)


    def __str__(self):
        return self.code
    
class TimeInterval(models.Model):
    tid=models.CharField(max_length=255,primary_key=True)
    author=models.ForeignKey(UserData,on_delete=models.CASCADE)
    start=models.TimeField()
    end=models.TimeField()