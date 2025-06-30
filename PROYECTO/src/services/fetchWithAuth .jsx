// src/utils/fetchWithAuth.js
import Cookies from 'js-cookie';
import { refreshAccessToken } from '../services/AuthServices';
import { useAuth } from '../services/AuthContext';

export async function fetchWithAuth(url, options = {}, logoutCallback = null) {
  let accessToken = Cookies.get('access_token');

  let response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    try {
      const newAccessToken = await refreshAccessToken();
      Cookies.set('access_token', newAccessToken, { secure: true });

      response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${newAccessToken}`,
        },
      });
    } catch (error) {
      if (logoutCallback) logoutCallback();
      throw error;
    }
  }

  return response;
}
