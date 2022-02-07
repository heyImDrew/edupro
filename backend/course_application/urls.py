from rest_framework.routers import DefaultRouter
from .views import (
    CourseViewSet,
)

router = DefaultRouter()
router.register(r'courses', CourseViewSet, basename='desks')

urlpatterns = router.urls
