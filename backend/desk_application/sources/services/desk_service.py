import uuid

from ..models.desk import Desk
from ..models.card import Card
from ..models.user_desk import UserDesk
from ..serializers.desk_serializer import DeskSerializer
from ..serializers.card_serializer import CardDeskSerializer


class DeskService:

    def add_cards_to_desk_data(self, desk: dict):
        cards = Card.objects.filter(desk_id=desk['desk_id'])
        serializer = CardDeskSerializer(cards, many=True)
        desk['cards'] = serializer.data

    def add_toggle_status_to_desk_data(self, user, desk: dict):
        user_desk = UserDesk.objects.get(user_id=user.id, desk_id=desk['desk_id'])
        desk['toggle'] = user_desk.liked

    def get_desks(self, user):
        user_id = user.id
        desks = Desk.objects.filter(
            deleted=False,
            desk_id__in=(
                UserDesk.objects.filter(user_id=user_id).values_list('desk_id', flat=True)
        ))
        serializer = DeskSerializer(desks, many=True)
        for desk in serializer.data:
            self.add_cards_to_desk_data(desk)
            self.add_toggle_status_to_desk_data(user, desk)
        return serializer.data

    def get_bin_desks(self, user):
        user_id = user.id
        desks = Desk.objects.filter(
            deleted=True,
            desk_id__in=(
                UserDesk.objects.filter(user_id=user_id).values_list('desk_id', flat=True)
        ))
        serializer = DeskSerializer(desks, many=True)
        for desk in serializer.data:
            self.add_cards_to_desk_data(desk)
        return serializer.data

    def create_desk(self, user, name, description):
        desk = Desk()
        desk.desc_id = uuid.uuid4()
        desk.created_by_id = user.id
        desk.name = name
        desk.description = description
        desk.save()
        serializer = DeskSerializer(desk)
        return serializer.data

    def remove_desk(self, user_id, desk_id):
        try:
            desk = Desk.objects.get(desk_id=desk_id)
            if desk.created_by_id is not user_id:
                raise Exception("User authenticated is not the creator of the Desk.")
            desk.deleted = True
            desk.save()
        except Exception as e:
            return {"error": f"Error when deleting Desk. Traceback: {e}"}
        return {"status": "OK"}

    def restore_desk(self, user_id, desk_id):
        try:
            desk = Desk.objects.get(desk_id=desk_id)
            if desk.created_by_id is not user_id:
                raise Exception("User authenticated is not the creator of the Desk.")
            desk.deleted = False
            desk.save()
        except Exception as e:
            return {"error": f"Error when restoring Desk. Traceback: {e}"}
        return {"status": "OK"}

    def toggle(self, user_id, desk_id):
        user_desk = UserDesk.objects.get(
            user_id=user_id,
            desk_id=desk_id
        )
        user_desk.liked = False if user_desk.liked else True
        user_desk.save()
        return {"status": user_desk.liked}


desk_service = DeskService()
