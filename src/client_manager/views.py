from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from .forms import UploadFileForm
from .models import Client, Request, Files
import json

# Create your views here
def home_view(request, *args, **kwargs):
	
	if request.method == 'POST':
		return HttpResponseRedirect("/");
	
	querySet = Client.objects.all()
	file_query_set = Files.objects.all()
	num = Client.objects.count();
	
	my_clients_table = {
		'clients': querySet,
		'Total_Client_Amount': num,
		'Files': file_query_set
	}
	
	return render(request, 'index.html', my_clients_table);
	
def dashboard_view(request, id):
	queryFilter = Request.objects.filter(client_ID=id);
	queryCount = Request.objects.filter(client_ID=id).count();
	
	if queryCount == 0:
		return HttpResponseRedirect("/");
	
	if request.method == 'POST':
		return HttpResponseRedirect(request.path);
	
	req_msg_dic = {
		'my_req_msgs': queryFilter,
		'ID': str(request.path).replace("/client-dashboard/", "")
	}
	
	return render(request, 'client-dashboard.html', req_msg_dic)
	
def create_request_view(request, id):
	if request.method == 'POST':
		id_list = id.split(',');
		request_message = json.load(request)['request_message']
		
		for client_id in id_list:
			Request.objects.create(client_ID=client_id, request_msg=request_message)
		
	return HttpResponseRedirect("/")
	
def create_files_view(request, id):
	if request.method == 'POST':
		for file in request.FILES.getlist('file'):
			Files.objects.create(client_ID=id, requested_doc=file);
		
	return HttpResponseRedirect("/")