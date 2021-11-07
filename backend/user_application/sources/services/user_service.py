import uuid

from django.contrib.auth.models import User
from ..serializers.user_serializers import UserSerializer
from ..models.profile import Profile


class UserService:
    @staticmethod
    def get_username_from_email(email):
        return email.split('@')[0]

    @staticmethod
    def serialize_request_user(user):
        serializer = UserSerializer(user)
        return serializer.data

    @staticmethod
    def is_email_exists(email):
        return User.objects.filter(email=email).exists()

    def create_user(self, email, password):
        try:
            if self.is_email_exists(email):
                raise Exception("Provided email is already registered in the system.")
            user = User.objects.create(
                username=self.get_username_from_email(email),
                email=email
            )
            user.set_password(password)
            user.save()
            return {"status": "success", "message": "User successfully created."}, 200
        except Exception as e:
            return {"status": "error", "error_message": str(e)}, 409


user_service = UserService()
