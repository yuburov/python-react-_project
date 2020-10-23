from rest_framework import serializers
from api_v1.models import User
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'surname', 'name', 'lastName', 'phone', 'address', 'inn')


# class UserSerializer(serializers.ModelSerializer):
#
#     def create(self, validated_data):
#
#         user = User.objects.create(
#             surname=validated_data['surname'],
#             name=validated_data['name'],
#             lastName=validated_data['lastName'],
#             phone=validated_data['phone'],
#             address=validated_data['address'],
#             inn=validated_data['inn']
#         )
#         user.save()
#
#         return user
#
#     class Meta:
#         model = User
#         # Tuple of serialized model fields
#         fields = ('id', 'surname', 'name', 'lastName', 'phone', 'address', 'inn')
        # extra_kwargs = {
        #     'inn': {'write_only': True}}