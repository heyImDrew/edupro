from ..models.dashnews import DashNews
from ..serializers.dn_serializer import DashNewsSerializer


class DnService():
    def list(self):
        queryset = DashNews.objects.all().order_by('created_at')
        serializer = DashNewsSerializer(queryset, many=True)
        return serializer.data


dn_service = DnService()
