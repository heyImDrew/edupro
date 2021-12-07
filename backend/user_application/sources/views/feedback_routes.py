from ..serializers.feedback_serializers import FeedbackSerializer, FeedbackSendSerializer
from ..services.feedback_service import feedback_service
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from drf_yasg.utils import swagger_auto_schema


class FeedbackViewSet(viewsets.ViewSet):
    serializer = FeedbackSerializer
    send_serializer = FeedbackSendSerializer

    """
    Returns user that is authenticated by token
    """
    @swagger_auto_schema(
        responses={
            status.HTTP_200_OK: FeedbackSerializer
        },
        tags=['Feedback'])
    @action(methods=['get'], detail=False, permission_classes=[AllowAny])
    def show(self, request):
        response = feedback_service.list()
        return Response(response)

    @swagger_auto_schema(
        tags=['Feedback'])
    @action(methods=['get'], url_path='show/multiple', detail=False, permission_classes=[AllowAny])
    def show_two_random(self, request):
        response, status_code = feedback_service.list_two_random()
        return Response(response, status=status_code)

    @swagger_auto_schema(
        request_body=FeedbackSendSerializer,
        tags=['Feedback'])
    @action(methods=['post'], detail=False, permission_classes=[AllowAny])
    def send(self, request):
        response, status_code = feedback_service.send_feedback(request.data)
        return Response(response, status=status_code)
