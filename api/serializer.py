from .models import *
from  rest_framework import serializers
from django.contrib.auth.models import User, Group 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

UserGroup = User.groups.through

class categoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = categorias
        fields = "__all__"
        
        def validate_nombre(self,value):
            if len(value) <= 3:
                raise serializers.ValidationError("El nombre tiene que tener mas a 3  caracteres")
            return value
        

class UserSerializer(serializers.ModelSerializer):
    rol = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = "__all__"
        
    def create(self, validated_data):
       return User.objects.create_user(**validated_data)
   
    def validate_User(self,value):
            if len(value) <= 3:
                raise serializers.ValidationError("El nombre tiene que tener mas o igual a 3  caracteres")
            return value
        
    def get_rol(self, obj):
        grupos = obj.groups.all()
        return grupos[0].name if grupos.exists() else "Sin rol"

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = "__all__"
        

class UserGroupThroughSerializer(serializers.ModelSerializer):
    group_name = serializers.SerializerMethodField()
    class Meta:
        model = UserGroup
        fields = ['id', 'user', 'group', 'group_name']

    """ def validate(self, data):
        user_id = data.get('user_id') or self.instance.user_id
        group_id = data.get('group_id') or self.instance.group_id
        if UserGroup.objects.filter(user_id=user_id, group_id=group_id).exclude(id=self.instance.id).exists():
            raise serializers.ValidationError("Ya tiene ese grupo asignado.")
        return data """
    
    def get_group_name(self, obj):
        return obj.group.name 

class cantonesSerializer(serializers.ModelSerializer):
    class Meta:
        model = cantones
        fields = "__all__"
        
        def validate_nombre(self,value):
            if len(value) <= 3:
                raise serializers.ValidationError("El nombre  tiene que tener mas  a 3  caracteres")
            return value

class eventoSerializer(serializers.ModelSerializer):
    nombre_canton = serializers.SerializerMethodField()
    nombre_categorias = serializers.SerializerMethodField()
    nombre_patrocinadores = serializers.SerializerMethodField()
    
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
    
    def get_nombre_canton(self, obj):
        return obj.cantones.nombre if obj.cantones else None
    
    def get_nombre_categorias(self, obj):
        return obj.categorias.nombre if obj.categorias else None
    
    def get_nombre_patrocinadores(self, obj):
        return obj.patrocinadores.nombre if obj.patrocinadores else None
    

class inscripcionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = inscripciones
        fields = "__all__"
        
  
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
    
    
    