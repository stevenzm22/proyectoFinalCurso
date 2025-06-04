
from rest_framework.permissions import BasePermission, IsAuthenticated


class isadminUserGroup(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="admin").exists()
    
    
class isUsuarioUserGroup(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="usuarios").exists()
    
    


















