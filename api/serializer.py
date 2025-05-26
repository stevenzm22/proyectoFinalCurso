from .models import *
from  rest_framework import serializers
from django.contrib.auth.models import User, Group

class categoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = categorias
        fields = "__all__"
        
        def validate_nombre(self,value):
            if len(value) <= 3:
                raise serializers.ValidationError("El nombre del producto tiene que tener mas o igual a 3  caracteres")
            return value
        

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = "__all__"
        
class eventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = evento
        fields = "__all__"
        
        def validate_nombre(self,value):
            if len(value) <= 3:
                raise serializers.ValidationError("El nombre del evento tiene que tener mas o igual a 3  caracteres")
            return value

class inscripcionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = inscripciones
        fields = "__all__"
        
class cantonesSerializer(serializers.ModelSerializer):
    class Meta:
        model = cantones
        fields = "__all__"
        
        def validate_nombre(self,value):
            if len(value) <= 3:
                raise serializers.ValidationError("El nombre  tiene que tener mas  a 3  caracteres")
            return value
        
class empleadosSerializer(serializers.ModelSerializer):
    class Meta:
        model = empleados
        fields = "__all__"
        
        def validate_nombre(self,value):
            if len(value) <= 3:
                raise serializers.ValidationError("El nombre  tiene que tener mas o igual a 3  caracteres")
            return value
        
class patrocinadoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = patrocinadores
        fields = "__all__"
        
class comentariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = comentarios
        fields = "__all__"
        
class sugerenciasSerializer(serializers.ModelSerializer):
    class Meta:
        model = sugerencias
        fields = "__all__"
        
class notificacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = notificaciones
        fields = "__all__"
        
