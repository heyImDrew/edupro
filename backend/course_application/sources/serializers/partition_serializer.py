from rest_framework import serializers


class PartitionSerializer(serializers.Serializer):
    partition_id = serializers.UUIDField()
    index = serializers.IntegerField()
    type = serializers.CharField()
    including_task = serializers.BooleanField()
    text_1 = serializers.CharField()
    text_2 = serializers.CharField()
    picture = serializers.CharField()

class PartitionTaskSerializer(serializers.Serializer):
    task_question = serializers.CharField()
    task_answer = serializers.CharField()
