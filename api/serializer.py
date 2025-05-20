from .models import *
from  rest_framework import serializers

class categoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = categorias
        fields = "__all__"
        
class eventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = evento
        fields = "__all__"

class inscripcionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = inscripciones
        fields = "__all__"

