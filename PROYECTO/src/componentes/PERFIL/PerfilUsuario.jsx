import React, { useEffect, useState } from 'react'
import "../PERFIL/PerrfilStyle.css"
import Cookies from 'js-cookie';
import llamados from "../../services/Usuarios"
import { FaUserCircle } from "react-icons/fa";

/* const devolertoken = Cookies.get("access_token")
console.log(devolertoken); */

function PerfilUsuario() {

  const id = Cookies.get("user_id")
  const token = Cookies.get("access_token");


 const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    async function fetchData() {
      

    if (token) {
      const datillos = await llamados.GetUserid(id)
      console.log(datillos);
      
      setUsuario(datillos)
    }
    }
    fetchData()
  }, []);

console.log(usuario);

  return (
    <div className="profile-container">
      <div className="profile-card">
        
        {/* Lado Izquierdo */}
        <div className="profile-left">
          <div className="profile-image-container">
            <div className="profile-image" />
            <button className="edit-photo-button">📷</button>
          </div> 

          {/*aqui ira un mapeo */}
              <h2>{usuario.username}</h2>
              <p>{usuario.email}</p>
       
          <div className="info">
              
           
            <p>📍 Madrid, España</p>
            <p>📅 Miembro desde Enero 2023</p>
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="profile-right">
          <div className="header">
            <h3>Información Personal</h3>
            <button className="edit-button">Editar Perfil</button>
          </div>

          <div className="section">
            <h4>Datos Básicos</h4>
            <div className="input-group">
              <input type="text" placeholder="Nombre" disabled />
              <input type="text" placeholder="Apelido" disabled />
            </div>
          </div>

          <div className="section">
            <h4>Contacto</h4>
            <input type="email" placeholder="email" disabled />
            <input type="tel" placeholder="Numero de telefono" disabled />
            <input type="text" placeholder="Ubicacion" disabled />
          </div>

          {/* <div className="section">
            <h4>Acerca de ti</h4>
            <textarea rows="3" disabled>
              Desarrolladora Frontend apasionada por crear experiencias de usuario excepcionales.
            </textarea>
          </div> */}
        </div>

      </div>
    </div>
  )
}

export default PerfilUsuario
