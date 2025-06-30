import Cookies from 'js-cookie';

const BASE_URL = 'http://127.0.0.1:8000/api';

export async function refreshAccessToken() {
  const refreshToken = Cookies.get('refresh_token');

  if (!refreshToken) {
    throw new Error("No hay token de refresco");
  }

  try {
    const response = await fetch(`${BASE_URL}/token/refresh/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!response.ok) {
      throw new Error("No se pudo refrescar el token");
    }

    const data = await response.json();
    Cookies.set('access_token', data.access, { secure: true });
    return data.access;
  } catch (error) {
    console.error("Error al refrescar token:", error);
    throw error;
  }
}
export default refreshAccessToken
