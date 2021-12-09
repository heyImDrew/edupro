from ..serializers.dn_serializer import DashNewsSerializer
from ..services.dn_service import dn_service
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from drf_yasg.utils import swagger_auto_schema


class DashNewsViewSet(viewsets.ViewSet):
    serializer = DashNewsSerializer

    """
    Returns user that is authenticated by token
    """
    @swagger_auto_schema(
        responses={
            status.HTTP_200_OK: DashNewsSerializer
        },
        tags=['News'])
    def list(self, request):
        response = dn_service.list()
        return Response(response)
