from django import forms

from .models import Files

from django.core.validators import RegexValidator

class UploadFileForm(forms.Form):
	client_ID 	  = forms.CharField(max_length=128, validators=[RegexValidator('\d')])
	requested_doc = forms.FileField()