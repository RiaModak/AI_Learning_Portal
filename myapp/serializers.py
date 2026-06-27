from django.contrib.auth.models import User, Group
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    role = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)

    role_name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "password",
            "is_active",
            "role",
            "role_name",
        ]

    def get_role_name(self, obj):
        group = obj.groups.first()
        return group.name if group else "No Role"

    def create(self, validated_data):

        role = validated_data.pop("role")
        password = validated_data.pop("password")

        user = User.objects.create(**validated_data)

        user.set_password(password)
        user.save()

        group, created = Group.objects.get_or_create(name=role)
        user.groups.add(group)

        return user