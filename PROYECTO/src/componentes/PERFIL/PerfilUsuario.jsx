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
 const [Nombre,setNombre] = useState("")
 const [Apellido,setApellido] = useState("")
 const [Email,setEmail] = useState("")

  useEffect(() => {
    async function fetchData() {
      

    if (token) {
      const datillos = await llamados.GetUserid(id)
      setUsuario(datillos)
    }
    }
    fetchData()
    
  }, []);

  function inputNombre(evento) {
  setNombre(evento.target.value)
  }

  function inputApellido(evento) {
    setApellido(evento.target.value)
  }

  function inputEmail(evento) {
    setEmail(evento.target.value)
  }

  function btneditarPerfil() {
  
  setNombre(usuario.username || "");
  setApellido(usuario.last_name || "");
  setEmail(usuario.email || "");
 
  }

  async function btnguardarPerfil() {
     try {
    await llamados.UpdateUser(Nombre, Apellido, Email,id);
    alert("Perfil actualizado correctamente.");
  } catch (error) {
    console.error("Error al actualizar perfil:", error);
    alert("Hubo un error al actualizar el perfil.");
  }
    
  }

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
               <h3>{usuario.last_name}</h3>
            
          <div className="info">
              
            <p>✉️{usuario.email}</p>
            <p>📅 Miembro desde {usuario.date_joined}</p>
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="profile-right">
          <div className="header">
            <h3>Información Personal</h3>
            <button onClick={btneditarPerfil} className="edit-button">Editar Perfil</button>
          </div>

          <div className="section">
            <h4>Datos Básicos</h4>
            <div className="input-group">
              <input type="text" value={Nombre} onChange={inputNombre} placeholder="Nombre" />
              <input type="text" value={Apellido} onChange={inputApellido} placeholder="Apelido" />
            </div>
          </div>

          <div className="section">
            <h4>Contacto</h4>
            <input type="email" value={Email} onChange={inputEmail} placeholder="email" />
            
          </div>
          <br />
          <button onClick={btnguardarPerfil} className="edit-button">Guardar Cambios</button>

        </div>

      </div>
    </div>
  )
}

export default PerfilUsuario
