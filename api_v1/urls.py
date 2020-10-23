from django.urls import path, include

from api_v1.views import UserListView, UserCreateView, UserDeleteView

app_name = 'api_v1'

urlpatterns = [
	path('', UserListView.as_view(), name="user_list"),
	path('user/create/', UserCreateView.as_view(), name="user-create"),
	path('<int:pk>/delete/', UserDeleteView.as_view(), name="user-delete"),
	path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]