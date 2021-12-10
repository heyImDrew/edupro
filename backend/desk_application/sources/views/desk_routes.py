from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from drf_yasg.utils import swagger_auto_schema
from ..serializers.desk_serializer import (
    DeskSerializer,
    DeskCreateSerializer,
    DeskIdSerializer
)
from ..services.desk_service import desk_service


class DeskViewSet(viewsets.ViewSet):
    serializer = DeskSerializer

    @swagger_auto_schema(
        responses={
            status.HTTP_200_OK: DeskSerializer
        },
        tags=['Desks'])
    def list(self, request):
        response = desk_service.get_desks(request.user)
        return Response(response)


    @swagger_auto_schema(
        responses={
            status.HTTP_200_OK: DeskSerializer
        },
        tags=['Bin Desks'])
    @action(methods=['GET'], detail=False, permission_classes=[IsAuthenticated])
    def bin(self, request):
        response = desk_service.get_bin_desks(request.user)
        return Response(response)


    @swagger_auto_schema(
        request_body=DeskCreateSerializer,
        responses={
            status.HTTP_200_OK: DeskSerializer
        },
        tags=['Desks'])
    @action(methods=['POST'], detail=False, permission_classes=[IsAuthenticated])
    def add(self, request):
        response = desk_service.create_desk(
            user=request.user,
            name=request.data["name"],
            description=request.data["description"]
        )
        return Response(response)

    @swagger_auto_schema(
        request_body=DeskIdSerializer,
        tags=['Bin Desks'])
    @action(methods=['DELETE'], detail=False, permission_classes=[IsAuthenticated])
    def remove(self, request):
        response = desk_service.remove_desk(
            user_id=request.user.id,
            desk_id=request.data['desk_id']
        )
        return Response(response)

    @swagger_auto_schema(
        request_body=DeskIdSerializer,
        tags=['Bin Desks'])
    @action(methods=['POST'], detail=False, permission_classes=[IsAuthenticated])
    def restore(self, request):
        response = desk_service.restore_desk(
            user_id=request.user.id,
            desk_id=request.data['desk_id']
        )
        return Response(response)

    @swagger_auto_schema(
        request_body=DeskIdSerializer,
        tags=['Desks'])
    @action(methods=['PUT'], detail=False, permission_classes=[IsAuthenticated])
    def toggle(self, request):
        response = desk_service.toggle(
            user_id=request.user.id,
            desk_id=request.data['desk_id']
        )
        return Response(response)

    @swagger_auto_schema(
        tags=['Desks'])
    @action(methods=['GET'], detail=False, permission_classes=[IsAuthenticated])
    def random(self, request):
        response = desk_service.random(request.user.id)
        return Response(response)
