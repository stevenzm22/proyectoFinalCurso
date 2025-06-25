from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class categorias(models.Model):
    nombre = models.CharField(max_length=200)
    
    def __str__(self):
        return self.nombre
    
class cantones(models.Model):
    nombre = models.CharField(max_length=200)
    
    def __str__(self):
        return self.nombre
    
class empleados(models.Model):
    nombre = models.CharField(max_length=200)
    apellido = models.CharField(max_length=150)
    email = models.EmailField()
    
    def __str__(self):
        return f"{self.nombre} {self.apellido}"
    
class patrocinadores(models.Model):
    nombre = models.CharField(max_length=200)
    tipoPatrocinio = models.CharField(max_length=222)
    contratoDuracion = models.IntegerField()
    
    def __str__(self):
        return self.nombre

class evento(models.Model):
    tituloEvento = models.CharField(max_length=200)
    fechaEvento = models.DateField()
    hora = models.TimeField()
    duracion = models.IntegerField()
    ubicacion = models.TextField()
    descripcion = models.TextField()
    organizador = models.CharField(max_length=100)
    email = models.EmailField()
    imagen = models.ImageField(upload_to='eventos/', null=True)
    categorias =  models.ForeignKey(categorias, on_delete=models.CASCADE,related_name='evento')
    cantones = models.ForeignKey(cantones, on_delete=models.CASCADE, related_name='evento')
    patrocinadores = models.ForeignKey(patrocinadores, on_delete=models.CASCADE, related_name='evento')
    
    
class inscripciones(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name='inscripciones')
    evento = models.ForeignKey(evento, on_delete=models.CASCADE, related_name='inscripciones')
    fecha_inscripcion = models.DateField()
    
    
class comentarios(models.Model):
    nombre = models.CharField(max_length=200)
    texto = models.TextField()
    fecha = models.DateField()


class sugerencias(models.Model):
    texto = models.TextField()
    fecha = models.DateField()
    
class notificaciones(models.Model):
    texto = models.TextField
    fecha = models.DateField()
    user= models.ForeignKey(User, on_delete=models.CASCADE, related_name='notificaciones')
    
    
    


    
    

    