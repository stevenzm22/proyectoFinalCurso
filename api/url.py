
from django.urls import path
from .views import  *

urlpatterns = [

    path('categorias/',categoriasListCreateAPIView.as_view(),name='categorias-lista-crear'),
    path('categorias/<int:pk>',categoriasRetrieveUpdateAPIView.as_view(),name='categorias-lista-actualisar'),
    path('evento/',eventoListCreateAPIView.as_view(),name='evento-lista-crear'),
    path('evento/<int:pk>',eventoRetrieveUpdateAPIView.as_view(),name='evento-lista-actualizar'),
    path('inscripciones/',inscripcionesListCreateAPIView.as_view(),name='inscripciones-lista-actualizar'),
    path('inscripciones/',inscripcionesRetrieveUpdateAPIView.as_view(),name='inscripciones-lista-actualizar')

]



