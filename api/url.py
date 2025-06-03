
from django.urls import path
from .views import  *
from rest_framework_simplejwt.views import(TokenObtainPairView,TokenRefreshView)



urlpatterns = [
    path('categorias/', categoriasListCreateAPIView.as_view(), name='categorias-list-create'),
    path('categorias/<int:pk>/', categoriasRetrieveUpdateAPIView.as_view(), name='categorias-detail'),

    path('eventos/', eventoListCreateAPIView.as_view(), name='evento-list-create'),
    path('eventos/<int:pk>/', eventoRetrieveUpdateAPIView.as_view(), name='evento-detail'),

    path('inscripciones/', inscripcionesListCreateAPIView.as_view(), name='inscripciones-list-create'),
    path('inscripciones/<int:pk>/', inscripcionesRetrieveUpdateAPIView.as_view(), name='inscripciones-detail'),

    path('cantones/', cantonesListCreateAPIView.as_view(), name='cantones-list-create'),
    path('cantones/<int:pk>/', cantonessRetrieveUpdateAPIView.as_view(), name='cantones-detail'),

    path('empleados/', empleadosListCreateAPIView.as_view(), name='empleados-list-create'),
    path('empleados/<int:pk>/', empleadosRetrieveUpdateAPIView.as_view(), name='empleados-detail'),

    path('patrocinadores/', patrocinadoresListCreateAPIView.as_view(), name='patrocinadores-list-create'),
    path('patrocinadores/<int:pk>/', patrocinadoresRetrieveUpdateAPIView.as_view(), name='patrocinadores-detail'),

    path('comentarios/', comentariosListCreateAPIView.as_view(), name='comentarios-list-create'),
    path('comentarios/<int:pk>/', comentariosRetrieveUpdateAPIView.as_view(), name='comentarios-detail'),

    path('sugerencias/', sugerenciasListCreateAPIView.as_view(), name='sugerencias-list-create'),
    path('sugerencias/<int:pk>/', sugerenciasRetrieveUpdateAPIView.as_view(), name='sugerencias-detail'),
    
    path('notificaciones/', notificacionesListCreateAPIView.as_view(), name='notificaciones-list-create'),
    path('notificaciones/<int:pk>/', notificacionesRetrieveUpdateAPIView.as_view(), name='notificaciones-detail'),
    
    path('usuarios/', UserListCreateAPIView.as_view(), name='Usuarios-list-ceare'),
    path('usuarios/<int:pk>/', UserRetrieveUpdateAPIView.as_view(), name='notificaciones-detail'),
    
    path('roles/', GroupListCreateAPIView.as_view(), name='Usuarios-list-ceare'),
    path('roles/<int:pk>/', GroupRetrieveUpdateAPIView.as_view(), name='notificaciones-detail'),
    
    path('token/', TokenObtainPairView.as_view(), name='notificaciones-detail'),

]



