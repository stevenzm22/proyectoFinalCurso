import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../LOGIN/LOGINSTYLE.css"
import postProductos from "../../services/Usuarios"
import Swal from "sweetalert2";
import Cookies from 'js-cookie';

function Login() {

const [usuarios,setusuarios]=useState([])

  const navigate= useNavigate()
   
    /* useEffect(() => {
   
        async  function recuperarDatos() {
            const datos= await postProductos.GetUser()
           // console.log(datos);
            
            setusuarios(datos)
        }
     
        recuperarDatos()
    
      }, []); */

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
        const token = await postProductos.PostApiToken(Nombre, Contrasena);
        console.log(token);
        
        if (token) {
           /*  localStorage.setItem("token", token); */
           // localStorage.setItem("refresh_token", result.refresh);

          Cookies.set("mi-token", token, {
          expires: 1,          // 1 día
          secure: false,         // solo HTTPS
          sameSite: "Strict",  // protección CSRF
          path: "/",
          });

            navigate("/sobreNosotros"); 
        } else {
          Swal.fire({
            icon: "error",
            title: "datos incorrectos",
            text: "llene los datos de nuevo",
            
              });
        }
        } catch (error) {
        
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