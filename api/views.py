from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView, ListAPIView
from .models import *
from .serializer import *


# Create your views here.

class UserListCreateAPIView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class UserRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class GroupListCreateAPIView(ListCreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    
class GroupRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

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
    
class cantonesListCreateAPIView(ListCreateAPIView):
    queryset = cantones.objects.all()
    serializer_class = cantonesSerializer
    
class cantonessRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    queryset = cantones.objects.all()
    serializer_class = cantonesSerializer
    
class empleadosListCreateAPIView(ListCreateAPIView):
    queryset = empleados.objects.all()
    serializer_class = empleadosSerializer
    
class empleadosRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    queryset = empleados.objects.all()
    serializer_class = empleadosSerializer
       
class patrocinadoresListCreateAPIView(ListCreateAPIView):
    queryset = patrocinadores.objects.all()
    serializer_class = patrocinadoresSerializer
    
class patrocinadoresRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    queryset = patrocinadores.objects.all()
    serializer_class = patrocinadoresSerializer
    
class comentariosListCreateAPIView(ListCreateAPIView):
    queryset = comentarios.objects.all()
    serializer_class = comentariosSerializer
        
class comentariosRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    queryset = comentarios.objects.all()
    serializer_class = comentariosSerializer
    
class sugerenciasListCreateAPIView(ListCreateAPIView):
    queryset = sugerencias.objects.all()
    serializer_class = sugerenciasSerializer
        
class sugerenciasRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    queryset = sugerencias.objects.all()
    serializer_class = sugerenciasSerializer
    
class notificacionesListCreateAPIView(ListCreateAPIView):
    queryset = notificaciones.objects.all()
    serializer_class = notificacionesSerializer
        
class notificacionesRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    queryset = notificaciones.objects.all()
    serializer_class = notificacionesSerializer

    
    
    
    
    
    
    
    