from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class categorias(models.Model):
    nombre = models.CharField(max_length=200)
    
    
class evento(models.Model):
    tituloEvento = models.CharField(max_length=200)
    fechaEvento = models.DateField()
    hora = models.TimeField()
    duracion = models.IntegerField()
    ubicacion = models.TextField()
    descripcion = models.TextField()
    organizador = models.CharField(max_length=100)
    email = models.EmailField()
    categorias =  models.ForeignKey(categorias, on_delete=models.CASCADE,related_name='evento')
    
class inscripciones(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name='inscripciones')
    evento = models.ForeignKey(evento, on_delete=models.CASCADE, related_name='inscripciones')
    fecha_inscripcion = models.DateField()
    
    


    
    

    