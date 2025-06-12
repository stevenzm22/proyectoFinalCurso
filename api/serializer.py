from .models import *
from  rest_framework import serializers
from django.contrib.auth.models import User, Group 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class categoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = categorias
        fields = "__all__"
        
        def validate_nombre(self,value):
            if len(value) <= 3:
                raise serializers.ValidationError("El nombre tiene que tener mas a 3  caracteres")
            return value
        

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        
    def create(self, validated_data):
       return User.objects.create_user(**validated_data)
   
    def validate_User(self,value):
            if len(value) <= 3:
                raise serializers.ValidationError("El nombre tiene que tener mas o igual a 3  caracteres")
            return value

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = "__all__"
        
class eventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = evento
        fields = "__all__"
        
        def validate_tituloEvento(self,value):
            if len(value) <= 3:
                raise serializers.ValidationError("El nombre del evento tiene que tener mas o igual a 3  caracteres")
            return value
        
        def validate_duracion(self,value):
            if value <=0:
                raise serializers.ValidationError("la duracion no puede ser negativa ")
            return value
        
        def validate_descripcion(self,value):
            if len(value) <= 10:
                raise serializers.ValidationError("la descripcion debe tener maximo 10 caracteres")
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
        
        def validate_apellido(self,value):
            if len(value) <= 3:
                raise serializers.ValidationError("El apellido  tiene que tener mas  a 3  caracteres")
            return value
        
class patrocinadoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = patrocinadores
        fields = "__all__"
        
        def validate_nombre(self,value):
            if len(value) <= 3:
                raise serializers.ValidationError("El nombre tiene que tener mas a 3  caracteres")
            return value
        
        def validate_contratoDuracion(self,value):
            if value <=0:
                raise serializers.ValidationError("la duracion no puede ser negativa ")
            return value
        
class comentariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = comentarios
        fields = "__all__"
        
        def validate_nombre(self,value):
            if len(value) <= 3:
                raise serializers.ValidationError("El nombre tiene que tener mas a 3  caracteres")
            return value
        
        def validate_texto(self,value):
            if len(value) <= 1:
                raise serializers.ValidationError("el texto debe tener minimo 1 caracteres")
            return value
        
        
class sugerenciasSerializer(serializers.ModelSerializer):
    class Meta:
        model = sugerencias
        fields = "__all__"
        
        def validate_texto(self,value):
            if len(value) <= 1:
                raise serializers.ValidationError("el texto debe tener minimo 1 caracteres")
            return value
        
class notificacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = notificaciones
        fields = "__all__"
        
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # Obtener el grupo del usuario (rol)
        groups = self.user.groups.values_list('name', flat=True)

        # Agrega el primer grupo como 'role'
        data['role'] = groups[0] if groups else None
        data['user_id'] = self.user.id 

        return data
    
    
    