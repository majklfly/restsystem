from rest_framework.generics import RetrieveAPIView, ListAPIView
from company.models import Company
from .serializers import CompanySerializer


class CompanyListView(ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetailView(RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
