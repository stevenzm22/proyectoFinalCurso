import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../LOGIN/LOGINSTYLE.css"
import postProductos from "../../services/Usuarios"
import Swal from "sweetalert2";
import Cookies from 'js-cookie';

function Login() {

const [usuarios,setusuarios]=useState([])

  const navigate= useNavigate()
   
    

    const [Nombre,setNombre]=useState("")
    const [Apellido,setApellido]=useState("")
    const [Cedula,setCedula]=useState("")
    const [Contrasena,setContrasena]=useState("")

      function inputNombre(evento) {
        setNombre(evento.target.value)
      }
    
      function inputApellido(evento) {
        setApellido(evento.target.value)
      }
    
      function inputCedula(evento) {
        setCedula(evento.target.value)
      }
      function inputContrasena(evento) {
        setContrasena(evento.target.value)
      }

     async  function iniciar() {
         try {
       
          const tokenData = await postProductos.PostApiToken(Nombre, Contrasena);
    

    if (tokenData && tokenData.access && tokenData.refresh && tokenData.role) {
      // Guardar cada token en una cookie individual
      Cookies.set("access_token", tokenData.access, {
        expires: 7,
        secure: false, 
        sameSite: "Lax",
        path: "/",
      });

      Cookies.set("refresh_token", tokenData.refresh, {
        expires: 7, // Por lo general el refresh token dura más
       secure: false, 
        sameSite: "Lax",
        path: "/",
      });

      Cookies.set("user_role", tokenData.role, {
        expires: 7,
        secure: false, 
        sameSite: "Lax",
        path: "/",
      });

      Cookies.set("user_id", tokenData.user_id, {
        expires: 7,
       secure: false, 
        sameSite: "Lax",
        path: "/",
      });

      if (tokenData.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
      } else {
      Swal.fire({
        icon: "error",
        title: "Datos incorrectos",
        text: "Llena los datos de nuevo",
      });
    }
     } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Ocurrió un error al iniciar sesión",
    });
      
  }
      
    }
  
  return (

    <div id='contendorLOGIN'>
      <div id='contendortodoLOGIN'>
        <div id='contendorLogin'>
          <h1>Inicio de Sesion</h1>
        </div>

        <div id='contenedorLogin'>
          <label htmlFor="">Username</label>
          <input  value={Nombre} onChange={inputNombre} type="text" />
          <label htmlFor="">Apellido</label>
          <input  value={Apellido} onChange={inputApellido} type="text" />
          <label htmlFor="">Contraseña</label>
          <input  value={Contrasena} onChange={inputContrasena} type="text" />
          <button onClick={iniciar}>Iniciar sesion</button>
        </div>

        <div id='contendorP'>
          <p>Ya te registraste?<Link to="/Register">Registrarte</Link></p>
        </div>
      </div>



    </div>
  )
}

export default Login