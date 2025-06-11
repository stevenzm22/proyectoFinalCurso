import React from 'react'
import "../PERFIL/PerrfilStyle.css"
import Cookies from 'js-cookie';


function PerfilUsuario() {


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
          <h2>Maria José González Pérez</h2>
          <div className="info">
            <p>📧 maria.gonzalez@email.com</p>
            <p>📞 +34 612 345 678</p>
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
