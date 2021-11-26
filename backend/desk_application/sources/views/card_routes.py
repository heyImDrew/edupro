from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from drf_yasg.utils import swagger_auto_schema
from ..serializers.card_serializer import (
    CardSerializer,
    CardCreateSerializer,
    CardDeleteSerializer
)
from ..services.card_service import card_service

class CardViewSet(viewsets.ViewSet):

    @swagger_auto_schema(
        request_body=CardCreateSerializer,
        responses={
            status.HTTP_200_OK: CardSerializer
        },
        tags=['Cards'])
    @action(methods=['POST'], detail=False, permission_classes=[IsAuthenticated])
    def add(self, request):
        response = card_service.add_card(
            desk_id=request.data['desk_id'],
            question=request.data['question'],
            answer=request.data['answer'],
        )
        return Response(response)

    @swagger_auto_schema(
        request_body=CardDeleteSerializer,
        tags=['Cards'])
    @action(methods=['DELETE'], detail=False, permission_classes=[IsAuthenticated])
    def remove(self, request):
        response = card_service.remove_card(
            card_id=request.data['card_id']
        )
        return Response(response)
