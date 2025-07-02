
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import Cookies from 'js-cookie'; // Librería para manejar cookies fácilmente
import { jwtDecode } from 'jwt-decode'; // Para decodificar el token JWT y extraer info como el usuario

// 1. Crear un nuevo contexto de autenticación
const AuthContext = createContext();

// 2. Proveedor del contexto, que va a envolver la app
export function AuthProvider({ children }) {
  // Estado del usuario decodificado desde el token
  const [user, setUser] = useState(null);
  // Estado del token de acceso actual
  const [accessToken, setAccessToken] = useState(null);
  // Temporizador para refrescar el token antes de que expire
  const [refreshTimer, setRefreshTimer] = useState(null);

  // 3. Función para cerrar sesión
  const logout = useCallback(() => {
    // Borrar cookies
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    // Limpiar estado de usuario y token
    setUser(null);
    setAccessToken(null);
    // Cancelar temporizador si existía
    if (refreshTimer) {
      clearTimeout(refreshTimer);
      setRefreshTimer(null);
    }
  }, [refreshTimer]);

  // 4. Función que solicita un nuevo access token al backend
  const refreshAccessToken = useCallback(async () => {
    // Obtener el token de refresco desde las cookies
    const refreshToken = Cookies.get('refresh_token');
    if (!refreshToken) {
      logout(); // No hay refresh token, se cierra sesión
      throw new Error('No refresh token disponible');
    }

    try {
      // Enviar petición POST al endpoint de Django para refrescar el token
      const res = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh: refreshToken }), // Importante: la clave es `refresh`
      });

      if (!res.ok) {
        throw new Error('No se pudo refrescar token');
      }

      const data = await res.json();
      const newAccessToken = data.access; // El backend debe devolver el nuevo access token como `access`

      // Validación adicional por si el token viene mal
      if (!newAccessToken || typeof newAccessToken !== 'string') {
        throw new Error('Token inválido o no recibido del backend');
      }

      // Guardar el nuevo token en cookies
      Cookies.set('access_token', newAccessToken);
      // Actualizar el estado
      setAccessToken(newAccessToken);
      // Decodificar token para extraer datos del usuario
      setUser(jwtDecode(newAccessToken));
      // Programar el siguiente refresco automático
      scheduleTokenRefresh(newAccessToken);

      return newAccessToken; // Por si se necesita usar el token renovado
    } catch (error) {
      logout(); // Si hay error, cerrar sesión
      throw error;
    }
  }, [logout]);

  // 5. Programar el refresco automático del token antes de que expire
  const scheduleTokenRefresh = useCallback(
    (token) => {
      // Decodificar el token para obtener el tiempo de expiración
      const decoded = jwtDecode(token);
      const exp = decoded.exp * 1000; // Exp viene en segundos, pasarlo a milisegundos
      const tiempoRestante = exp - Date.now();
      const tresMinutos = 3 * 60 * 1000;
      const delay = tiempoRestante - tresMinutos; // Refrescar 3 minutos antes

      // Limpiar cualquier temporizador anterior
      if (refreshTimer) {
        clearTimeout(refreshTimer);
        setRefreshTimer(null);
      }

      if (delay > 0) {
        // Si aún falta para que expire, programar un setTimeout
        const timerId = setTimeout(() => {
          refreshAccessToken().catch((err) => {
            console.error('Error refrescando token:', err);
            logout(); // Si falla, cerrar sesión
          });
        }, delay);
        setRefreshTimer(timerId);
      } else {
        // Si el token está a punto de expirar o ya expiró, refrescar de inmediato
        refreshAccessToken().catch((err) => {
          console.error('Error en refresco inmediato:', err);
          logout();
        });
      }
    },
    [refreshAccessToken, refreshTimer, logout]
  );

  // 6. useEffect: se ejecuta una vez al montar el componente
  useEffect(() => {
    const token = Cookies.get('access_token');
    if (!token) return;

    // Si hay token en cookies, cargarlo al estado
    setAccessToken(token);
    // Decodificar para obtener datos del usuario
    setUser(jwtDecode(token));
    // Programar su renovación automática
    scheduleTokenRefresh(token);
  }, []); // Solo se ejecuta una vez

  // 7. Exponer el contexto con los valores necesarios
  return (
    <AuthContext.Provider
      value={{
        user, // Objeto de usuario decodificado desde el token
        accessToken, // Access token actual
        logout, // Función para cerrar sesión
        refreshAccessToken, // Función manual para refrescar el token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// 8. Hook personalizado para usar el contexto
export function useAuth() {
  return useContext(AuthContext);
}


