import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../LOGIN/LOGINSTYLE.css"
import postProductos from "../../services/Usuarios"
import Swal from "sweetalert2";

function Login() {

const [usuarios,setusuarios]=useState([])

   const navigate= useNavigate()
   
    useEffect(() => {
   
        async  function recuperarDatos() {
            const datos= await postProductos.GetUser()
            console.log(datos);
            
            setusuarios(datos)
        }
     
        recuperarDatos()
    
      }, []);

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

  //una condicional para comparar los datos ingresados con los de la base de datos
       function iniciar() {
             
              const encontrado = usuarios.filter(Usuario => Usuario.first_name===Nombre && Usuario.last_name &&  Usuario.password===Contrasena)
            
            if (encontrado.length === 0) {
               Swal.fire({
                       title: "usuario no encontrado",
                       icon: "error",
                       draggable: true
                     });
             }else{
              
              navigate("/test")
              
             } 
      
            }
  

  return (
    <div id='contendorLOGIN'>
      <div id='contendortodoLOGIN'>
        <div id='contendorLogin'>
          <h1>Inicio de Sesion</h1>
        </div>

        <div id='contenedorLogin'>
          <label htmlFor="">nombre</label>
          <input  value={Nombre} onChange={inputNombre} type="text" />
          <label htmlFor="">apellido</label>
          <input  value={Apellido} onChange={inputApellido} type="text" />
          <label htmlFor="">contraseña</label>
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