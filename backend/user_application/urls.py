from rest_framework.urls import path
from rest_framework.routers import DefaultRouter
from .views import (
    DecoratedTokenObtainPairView,
    DecoratedTokenRefreshView,
    UserViewSet,
    FeedbackViewSet,
    DashNewsViewSet,
)

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='users')
router.register(r'feedbacks', FeedbackViewSet, basename='feedbacks')
router.register(r'dashnews', DashNewsViewSet, basename='dashnews')

token_urlpatterns = [
    path('token/', DecoratedTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', DecoratedTokenRefreshView.as_view(), name='token_refresh'),
]

urlpatterns = router.urls + token_urlpatterns
