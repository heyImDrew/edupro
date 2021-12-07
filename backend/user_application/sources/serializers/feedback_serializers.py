from rest_framework import serializers


class FeedbackSerializer(serializers.Serializer):
    feedback_id = serializers.UUIDField()
    full_name = serializers.CharField()
    email = serializers.EmailField()
    phone = serializers.CharField()
    message = serializers.CharField()

class FeedbackSendSerializer(serializers.Serializer):
    full_name = serializers.CharField()
    email = serializers.EmailField()
    phone = serializers.CharField()
    message = serializers.CharField()

