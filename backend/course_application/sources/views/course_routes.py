from ..serializers.course_serializers import CourseSerializer, CourseIdSerializer
from ..services.course_service import course_service
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import action
from drf_yasg.utils import swagger_auto_schema


class CourseViewSet(viewsets.ViewSet):
    serializer = CourseSerializer

    """
    Returns user that is authenticated by token
    """
    @swagger_auto_schema(
        responses={
            status.HTTP_200_OK: CourseSerializer
        },
        tags=['Courses'])
    def list(self, request):
        response = course_service.list(request.user.id)
        return Response(response)

    @swagger_auto_schema(
        responses={
            status.HTTP_200_OK: CourseSerializer
        },
        tags=['Courses'])
    def retrieve(self, request, pk=None):
        response = course_service.retrieve(pk)
        return Response(response)

    @swagger_auto_schema(
        request_body=CourseIdSerializer,
        tags=['Courses'])
    @action(methods=['PUT'], detail=False, permission_classes=[IsAuthenticated])
    def toggle(self, request):
        response = course_service.toggle(
            user_id=request.user.id,
            course_id=request.data['course_id']
        )
        return Response(response)

    @swagger_auto_schema(
        tags=['Courses'])
    @action(methods=['GET'], detail=False, permission_classes=[IsAuthenticated])
    def amount(self, request):
        response = course_service.amount(
            user_id=request.user.id
        )
        return Response(response)

    @swagger_auto_schema(
        tags=['Courses'])
    @action(methods=['GET'], detail=False, permission_classes=[IsAuthenticated])
    def random(self, request):
        response = course_service.random(request.user.id)
        return Response(response)
