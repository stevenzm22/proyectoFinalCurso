import React, { useEffect, useState } from 'react';
import PostProductos from '../../services/Usuarios';
import Swal from "sweetalert2";
import "../REGISTER/RegisterStyle.css"
import { Link } from 'react-router-dom';

function Register() {
  // las constantes de los inputs
  const [Username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

//las funciones para recoger la informacion
  function inputUsername(evento) {
    setUsername(evento.target.value)
  }
  function inputNombre(evento) {
    setFirstName(evento.target.value)
  }
 function inputApellido(evento) {
  setLastName(evento.target.value)
 }
function inputEmail(evento) {
  setEmail(evento.target.value)
}
function inputContrasena(evento) {
  setPassword(evento.target.value)
}
//hago una condicional con la libreria sweet alert 
function registrar() {
    if (!Username.trim() || !first_name.trim() ||  !last_name.trim() || !password.trim() || !email.trim() ) {
        Swal.fire({
          title: "ingrese los datos",
          icon: "error",
          draggable: true
        });
  
      } else { /* post a la tabla de auth_user */
        PostProductos.PostUser(password,Username,first_name,last_name,email)
  
        Swal.fire({
          title: "registro exitoso",
          icon: "success",
          draggable: true
        });
      }
  
}

  return (
    <div id="contenedorExterno">
    <div id='contenedorRegister'>
       
        <div id='contenedorRegisterTitulo'>
            <h1>Registro</h1>
        </div>

        <div id='contenedorForRegister'>

            <label htmlFor="">Username</label>
            <input value={Username} onChange={inputUsername} type="text" />
            <label htmlFor="">Nombre</label>
            <input value={first_name} onChange={inputNombre} type="text" />
            <label htmlFor="">apellido</label>
            <input value={last_name} onChange={inputApellido} type="text" />
            <label htmlFor="">Email</label>
            <input value={email} onChange={inputEmail} type="text" />
            <label htmlFor="">Contraseña</label>
            <input value={password} onChange={inputContrasena} type="text" />
            <button onClick={registrar} id='botonRgistro'>agregar</button>

        </div>

        <div id='contenedorP'>  {/* un enlace del propio react-router-dom */}
            <p>Ya estas registrado?<Link to="/Login">Iniciar Sesion</Link></p>
        </div>

    </div>
    </div>
  )
}

export default Register
