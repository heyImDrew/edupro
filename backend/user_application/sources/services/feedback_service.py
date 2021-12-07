import random
import uuid

from ..models.feedback import Feedback
from ..serializers.feedback_serializers import FeedbackSerializer


class FeedbackService:

    def list(self):
        feedbacks = Feedback.objects.all()
        serializer = FeedbackSerializer(feedbacks, many=True)
        return serializer.data

    def list_two_random(self):
        data = self.list()
        feedback_first = random.choice(data)
        data.remove(feedback_first)
        feedback_second = random.choice(data)
        return [feedback_first, feedback_second], 200

    def send_feedback(self, data: dict):
        try:
            if Feedback.objects.filter(
                email=data.get('email', ''),
                message=data.get('message', ''),
            ).exists():
                raise Exception("Same Feedback was already found.")
            feedback = Feedback(
                feedback_id=uuid.uuid4(),
                email=data.get('email', ''),
                full_name=data.get('full_name', ''),
                phone=data.get('phone', ''),
                message=data.get('message', '')
            )
            feedback.save()
            return {"status": "success", "message": "Feedback successfully sended."}, 200
        except Exception as e:
            return {"status": "error", "message": str(e)}, 500


feedback_service = FeedbackService()
