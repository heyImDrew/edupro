from rest_framework import serializers


class DashNewsSerializer(serializers.Serializer):
    dn_id = serializers.UUIDField()
    header = serializers.CharField()
    text = serializers.EmailField()
    url = serializers.CharField()
    created_at = serializers.CharField()
