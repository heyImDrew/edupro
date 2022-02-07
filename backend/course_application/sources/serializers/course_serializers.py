from rest_framework import serializers


class CourseSerializer(serializers.Serializer):
    course_id = serializers.UUIDField()
    name = serializers.CharField()
    description = serializers.CharField()
    difficulty = serializers.IntegerField()
    image = serializers.CharField()


class CourseIdSerializer(serializers.Serializer):
    course_id = serializers.UUIDField()
