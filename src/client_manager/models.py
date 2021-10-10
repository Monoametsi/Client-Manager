from django.db import models
from django.core.validators import RegexValidator
from django.contrib.postgres.fields import ArrayField
import uuid
	
# Create your models here.
class Client(models.Model):
	ID				= models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	first_name   	= models.CharField(max_length=128)
	last_name    	= models.CharField(max_length=128, default="")
	cell_number  	= models.CharField(max_length=10, validators=[RegexValidator('^((\+|00|09)\d{2,3}|0)\d{9}$')])
	client_email 	= models.EmailField(max_length=254)
	client_ID    	= models.CharField(max_length=13, validators=[RegexValidator('\d')])
	
class Request(models.Model):
	client_ID   = models.CharField(max_length=128, validators=[RegexValidator('\d')])
	request_msg = models.TextField();
	
class Files(models.Model):
	client_ID 	  = models.CharField(max_length=128, validators=[RegexValidator('\d')])
	requested_doc = models.FileField()