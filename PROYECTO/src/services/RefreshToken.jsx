async function fetchWithAuth(url, options = {}) {
  let accessToken = Cookies.get('access_token');

  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    // Intenta refrescar token
    try {
      accessToken = await refreshAccessToken();
      const retryResponse = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return retryResponse;
    } catch (err) {
      console.log("No se pudo refrescar el token, probablemente deba cerrar sesión");
      // aquí podrías redirigir al login, por ejemplo
    }
  }

  return response;
}
