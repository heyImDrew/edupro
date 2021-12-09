from datetime import datetime, timezone

from django.contrib.auth.models import User
from ..serializers.user_serializers import UserSerializer


class UserService:
    @staticmethod
    def get_username_from_email(email):
        return email.split('@')[0]

    @staticmethod
    def get_first_name(email):
        return email.split('@')[0].split(".")[0]

    @staticmethod
    def get_last_name(email):
        return email.split('@')[0].split(".")[1]

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
                first_name=self.get_first_name(email),
                last_nale=self.get_last_name(email),
                email=email
            )
            user.set_password(password)
            user.save()
            return {"status": "success", "message": "User successfully created."}, 200
        except Exception as e:
            return {"status": "error", "error_message": str(e)}, 409

    def get_information(self, user):
        data = {
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'company': ' '.join([x.capitalize() for x in user.email.split('@')[1].split('.')[0].replace('-', ' ').split(' ')]),
            'days': (datetime.now(timezone.utc) - user.date_joined).days,
            'courses': 4
        }
        return data

user_service = UserService()
