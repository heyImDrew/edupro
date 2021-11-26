from rest_framework import serializers


class DeskSerializer(serializers.Serializer):
    desk_id = serializers.UUIDField()
    created_by_id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()

class DeskCreateSerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()

class DeskIdSerializer(serializers.Serializer):
    desk_id = serializers.UUIDField()
