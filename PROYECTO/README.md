# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




 /*  const encontrado = usuarios.filter(Usuario => Usuario.username === Nombre && Usuario.last_name === Apellido &&  Usuario.password===Contrasena)
            
            console.log(usuarios[4])
            
            
            if (encontrado.length === 0) {
               Swal.fire({
                       title: "usuario no encontrado",
                       icon: "error",
                       draggable: true
                     });
             }else{
              
              navigate("/test")
              
             }  */

en la funcion de eliminar

 const token = await postProductos.PostApiToken(Nombre, Contrasena);
        console.log(token);
        
        if (token) {
           /*  localStorage.setItem("token", token); */
           // localStorage.setItem("refresh_token", result.refresh);

          /* Cookies.set("mi-token", token, {
          expires: 1,          // 1 día
          secure: false,         // solo HTTPS
          sameSite: "Strict",  // protección CSRF
          path: "/",
          }); */
/*  localStorage.setItem("token", token); */
           // localStorage.setItem("refresh_token", result.refresh);

          /* Cookies.set("mi-token", token, {
          expires: 1,          // 1 día
          secure: false,         // solo HTTPS
          sameSite: "Strict",  // protección CSRF
          path: "/",
          }); */

zuñiga12345



descodificar e ltoken

import jwt_decode from 'jwt-decode';
const payload = jwt_decode(token);



