from rest_framework.generics import RetrieveAPIView, ListAPIView
from .models import Department
from .serializers import DepartmentsSerializer


class DepartmentsListView(ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentsSerializer


class DepartmentsDetailView(RetrieveAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentsSerializer
