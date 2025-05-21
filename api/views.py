from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView
from .models import *
from .serializer import *

# Create your views here.

class categoriasListCreateAPIView(ListCreateAPIView):
    queryset = categorias.objects.all()
    serializer_class = categoriasSerializer
    
class categoriasRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    queryset = categorias.objects.all()
    serializer_class = categoriasSerializer
  

class eventoListCreateAPIView(ListCreateAPIView):
    queryset = evento.objects.all()
    serializer_class = eventoSerializer
    
    
class eventoRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    queryset = evento.objects.all()
    serializer_class = eventoSerializer

    
class inscripcionesListCreateAPIView(ListCreateAPIView):
    queryset = inscripciones.objects.all()
    serializer_class = inscripcionesSerializer
    
class inscripcionesRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    queryset = inscripciones.objects.all()
    serializer_class = inscripcionesSerializer
    

    
    