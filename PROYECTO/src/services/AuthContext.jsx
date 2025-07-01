// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshTimer, setRefreshTimer] = useState(null);

  const logout = useCallback(() => {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    setUser(null);
    setAccessToken(null);
    if (refreshTimer) {
      clearTimeout(refreshTimer);
      setRefreshTimer(null);
    }
  }, [refreshTimer]);

  // Refresca el token usando fetch
  const refreshAccessToken = useCallback(async () => {
    const refreshToken = Cookies.get('refresh_token');
    if (!refreshToken) {
      logout();
      throw new Error('No refresh token disponible');
    }

    try {
      const res = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      if (!res.ok) {
        throw new Error('No se pudo refrescar token');
        
      }

      const data = await res.json();
      const newAccessToken = data.access; // ✅ <- esta es la corrección clave

      if (!newAccessToken || typeof newAccessToken !== 'string') {
      throw new Error('Token inválido o no recibido del backend');
      }

      Cookies.set('access_token', newAccessToken);
      setAccessToken(newAccessToken);
      setUser(jwtDecode(newAccessToken));
      scheduleTokenRefresh(newAccessToken);

      return newAccessToken;
    } catch (error) {
      logout();
      throw error;
    }
  }, [logout]);

  // Programa refresco automático
  const scheduleTokenRefresh = useCallback((token) => {
    const decoded = jwtDecode(token);
    const exp = decoded.exp * 1000;
    const tiempoRestante = exp - Date.now();
    const tresMinutos = 3 * 60 * 1000;
    const delay = tiempoRestante - tresMinutos;

    if (refreshTimer) {
      clearTimeout(refreshTimer);
      setRefreshTimer(null);
    }

    if (delay > 0) {
      const timerId = setTimeout(() => {
        refreshAccessToken().catch((err) => {
          console.error('Error refrescando token:', err);
          logout();
        });
      }, delay);
      setRefreshTimer(timerId);
    } else {
      // Si está por expirar ya, refrescar inmediatamente
      refreshAccessToken().catch((err) => {
        console.error('Error en refresco inmediato:', err);
        logout();
      });
    }
  }, [refreshAccessToken, refreshTimer, logout]);

  // Solo al cargar la app, intenta recuperar el token
  useEffect(() => {
    const token = Cookies.get('access_token');
    if (!token) return;

    setAccessToken(token);
    setUser(jwtDecode(token));
    scheduleTokenRefresh(token);
  }, []); // Dependencias vacías = solo se ejecuta 1 vez

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        logout,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}


