from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView, ListAPIView
from .models import *
from .serializer import *
from .permisos import *
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from django.contrib.auth.models import User, Group 

UserGroup = User.groups.through

# Create your views here.

class UserListCreateAPIView(ListCreateAPIView):
    
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class UserRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class GroupListCreateAPIView(ListCreateAPIView):
   
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    
class GroupRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView): 
   
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    
class UserGroupCreatAPIView(ListCreateAPIView): 
    queryset = UserGroup.objects.all()
    serializer_class = UserGroupThroughSerializer
    
class UserGroupRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView): 
    queryset = UserGroup.objects.all()
    serializer_class = UserGroupThroughSerializer


class categoriasListCreateAPIView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = categorias.objects.all()
    serializer_class = categoriasSerializer
    
class categoriasRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    permission_classes = [isadminUserGroup]
    queryset = categorias.objects.all()
    serializer_class = categoriasSerializer
  
class eventoListCreateAPIView(ListCreateAPIView):
    """ permission_classes = [IsAuthenticated] """
    queryset = evento.objects.all()
    serializer_class = eventoSerializer
    
class eventoRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    """ permission_classes = [IsAuthenticated] """
    queryset = evento.objects.all()
    serializer_class = eventoSerializer

class inscripcionesListCreateAPIView(ListCreateAPIView):
    permission_classes = [IsAuthenticated,isadminUserGroup]
    queryset = inscripciones.objects.all()
    serializer_class = inscripcionesSerializer
    
class inscripcionesRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    """ permission_classes = [IsAuthenticated,isadminUserGroup] """
    queryset = inscripciones.objects.all()
    serializer_class = inscripcionesSerializer
    
class cantonesListCreateAPIView(ListCreateAPIView):
    """ permission_classes = [IsAuthenticated] """
    queryset = cantones.objects.all()
    serializer_class = cantonesSerializer
    
class cantonessRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = cantones.objects.all()
    serializer_class = cantonesSerializer
    
class empleadosListCreateAPIView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = empleados.objects.all()
    serializer_class = empleadosSerializer
    
class empleadosRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = empleados.objects.all()
    serializer_class = empleadosSerializer
       
class patrocinadoresListCreateAPIView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = patrocinadores.objects.all()
    serializer_class = patrocinadoresSerializer
    
class patrocinadoresRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
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
    permission_classes = [IsAuthenticated,isadminUserGroup]
    queryset = notificaciones.objects.all()
    serializer_class = notificacionesSerializer
        
class notificacionesRetrieveUpdateAPIView(RetrieveUpdateDestroyAPIView):
    permission_classes = [isadminUserGroup]
    queryset = notificaciones.objects.all()
    serializer_class = notificacionesSerializer

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
    
    
    
    
    