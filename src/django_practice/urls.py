"""django_practice URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from client_manager.views import home_view, dashboard_view, create_request_view, create_files_view

urlpatterns = [
	path('', home_view, name='home'),
	path('client-dashboard/<str:id>', dashboard_view, name='client-dashboard'),
	path('file-upload/<str:id>', create_files_view, name='file-upload'),
    path('admin/', admin.site.urls),
    path('<str:id>/', create_request_view, name="create-request"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)