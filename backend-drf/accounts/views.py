from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import generics # pyright: ignore[reportMissingImports]
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User

# Create your views here.
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_class = [AllowAny]