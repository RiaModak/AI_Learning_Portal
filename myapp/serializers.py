from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import (
    Course,
    Assignment,
    TestSourceDocument
)

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
            "date_joined",
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
    def update(self, instance, validated_data):

        role = validated_data.pop("role", None)
        password = validated_data.pop("password", None)

        instance.username = validated_data.get(
            "username",
            instance.username
        )

        instance.first_name = validated_data.get(
            "first_name",
            instance.first_name
        )

        instance.last_name = validated_data.get(
            "last_name",
            instance.last_name
        )

        instance.email = validated_data.get(
            "email",
            instance.email
        )

        instance.is_active = validated_data.get(
            "is_active",
            instance.is_active
        )

        if password:
            instance.set_password(password)

        instance.save()

        if role:

            instance.groups.clear()

            group, created = Group.objects.get_or_create(
                name=role
            )

            instance.groups.add(group)

        return instance
    
class TeacherSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            "id",
            "username"
        ]
class CourseSerializer(serializers.ModelSerializer):

    teachers = TeacherSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Course
        fields = [
            "id",
            "name",
            "description",
            "teachers",
        ]

class AssignmentSerializer(serializers.ModelSerializer):

    course_name = serializers.CharField(
        source="course.name",
        read_only=True
    )

    class Meta:
        model = Assignment

        fields = [
            "id",
            "title",
            "description",
            "due_date",
            "assignment_file",
            "course",
            "course_name",
            "created_at",
        ]

class TestSourceDocumentSerializer(serializers.ModelSerializer):

    course_name = serializers.CharField(
        source="course.name",
        read_only=True
    )

    class Meta:
        model = TestSourceDocument

        fields = [
            "id",
            "title",
            "course",
            "course_name",
            "uploaded_file",
            "uploaded_at",
            "qna_id",
        ]
