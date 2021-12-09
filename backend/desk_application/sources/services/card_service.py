import uuid

from ..models.desk import Desk
from ..models.card import Card
from ..serializers.card_serializer import CardSerializer\


class CardService:

    def get_by_id(self, card_id):
        cards = Card.objects.get(card_id=card_id)
        serializer = CardSerializer(cards)
        return serializer.data

    def get_cards_by_desk(self, desk_id):
        cards = Card.objects.filter(desk_id=desk_id)
        serializer = CardSerializer(cards, many=True)
        return serializer.data

    def amount(self, user):
        desk_ids = Desk.objects.filter(created_by_id=user.id).values_list('desk_id', flat=True)
        cards = Card.objects.filter(desk_id__in=desk_ids)
        return {"desks": len(desk_ids), "cards": len(cards)}

    def add_card(self, desk_id, question=None, answer=None):
        card = Card()
        card.card_id = uuid.uuid4()
        card.desk_id = desk_id
        card.question = question
        card.answer = answer
        card.save()
        serializer = CardSerializer(card)
        return serializer.data

    def remove_card(self, card_id):
        card = Card.objects.get(card_id=card_id)
        card.delete()
        return {"status": "OK"}


card_service = CardService()
