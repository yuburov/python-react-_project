from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated
from api_v1.models import User
from api_v1.serializers import UserSerializer


class UserListView(ListAPIView):
	permission_classes = [IsAuthenticated]
	queryset = User.objects.all()
	serializer_class = UserSerializer

class UserCreateView(CreateAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer

class UserDeleteView(DestroyAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer