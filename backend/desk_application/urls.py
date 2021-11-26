from rest_framework.routers import DefaultRouter
from .views import (
    DeskViewSet,
    CardViewSet
)

router = DefaultRouter()
router.register(r'desks', DeskViewSet, basename='desks')
router.register(r'cards', CardViewSet, basename='cards')

urlpatterns = router.urls
