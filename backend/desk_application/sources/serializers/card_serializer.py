from rest_framework import serializers


class CardSerializer(serializers.Serializer):
    card_id = serializers.UUIDField()
    desk_id = serializers.UUIDField()
    question = serializers.CharField()
    answer = serializers.CharField()

class CardDeskSerializer(serializers.Serializer):
    card_id = serializers.UUIDField()
    question = serializers.CharField()
    answer = serializers.CharField()

class CardCreateSerializer(serializers.Serializer):
    desk_id = serializers.UUIDField()
    question = serializers.CharField()
    answer = serializers.CharField()

class CardDeleteSerializer(serializers.Serializer):
    card_id = serializers.UUIDField()
