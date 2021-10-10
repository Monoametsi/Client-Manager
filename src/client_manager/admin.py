from django.contrib import admin

# Register your models here.
from .models import Client, Request, Files

admin.site.register(Client);
admin.site.register(Request);
admin.site.register(Files);