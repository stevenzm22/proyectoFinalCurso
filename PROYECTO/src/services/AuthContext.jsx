// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { refreshAccessToken } from './AuthServices';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshTimer, setRefreshTimer] = useState(null);

  // ✅ Logout total
  const logout = () => {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    setUser(null);
    setAccessToken(null);
    if (refreshTimer) clearTimeout(refreshTimer);
  };

  // ✅ Programa refresh automático
  const scheduleTokenRefresh = (token) => {
    const decoded = jwtDecode(token);
    const exp = decoded.exp * 1000;
    const tiempoRestante = exp - Date.now();

    const tresMinutos = 3 * 60 * 1000;

    const refreshDelay = tiempoRestante - tresMinutos;

    if (refreshDelay > 0) {
      const timerId = setTimeout(async () => {
        try {
          const newToken = await refreshAccessToken();
          setAccessToken(newToken);
          setUser(jwtDecode(newToken));
          scheduleTokenRefresh(newToken); // Reprogramar de nuevo
        } catch (error) {
          console.error("Error refrescando token:", error);
          logout();
        }
      }, refreshDelay);

      setRefreshTimer(timerId);
    } else {
      // Token está por expirar en menos de 3 min → refrescar ya
      refreshAccessToken()
        .then(newToken => {
          setAccessToken(newToken);
          setUser(jwtDecode(newToken));
          scheduleTokenRefresh(newToken);
        })
        .catch(err => {
          console.error("Error en refresco inmediato:", err);
          logout();
        });
    }
  };

  // ✅ Cargar desde cookies al recargar la página
  useEffect(() => {
    const token = Cookies.get('access_token');
    if (token) {
      setAccessToken(token);
      const decoded = jwtDecode(token);
      setUser(decoded);
      scheduleTokenRefresh(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, accessToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

