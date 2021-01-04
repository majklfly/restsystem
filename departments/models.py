from django.db import models


class Department(models.Model):
    name = models.CharField(max_length=200)
    company = models.ForeignKey(
        "company.Company", on_delete=models.CASCADE)

    def __str__(self):
        return self.name
