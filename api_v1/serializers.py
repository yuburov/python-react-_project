from rest_framework import serializers
from api_v1.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        # Tuple of serialized model fields
        fields = ('id', 'surname', 'name', 'lastName', 'phone', 'address', 'inn')

