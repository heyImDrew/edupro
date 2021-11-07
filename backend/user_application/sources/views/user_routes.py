from django.contrib.auth.models import User
from ..serializers.user_serializers import UserSerializer, UserRegisterSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes, action
from drf_yasg.utils import swagger_auto_schema

from ..services.user_service import user_service

class UserViewSet(viewsets.ViewSet):
    serializer = UserSerializer
    register_serializer = UserRegisterSerializer

    """
    Property to get the QuerySet of existing Users
    """
    @property
    def queryset(self):
        return User.objects.all()

    """
    Returns user that is authenticated by token
    """
    @swagger_auto_schema(
        responses={
            status.HTTP_200_OK: UserSerializer
        },
        tags=['User'])
    def list(self, request):
        response = user_service.serialize_request_user(request.user)
        return Response(response)

    @swagger_auto_schema(
        request_body=UserRegisterSerializer,
        tags=['User'])
    @action(methods=['post'], detail=False, permission_classes=[AllowAny])
    def register(self, request):
        response, status_code = user_service.create_user(
            email=request.data.get('email'),
            password=request.data.get('password')
        )
        return Response(response, status=status_code)
