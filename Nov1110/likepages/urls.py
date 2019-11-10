from django.urls import path
from . import views

app_name = "likepages"

urlpatterns = [
    path('', views.index, name="index"),
    path('<int:id>/like/', views.like, name="like"),
]