import React, { useEffect, useState } from 'react';
import "../SIDEBAR/SidebarStyle.css"


function Sidebar() {
     const [isActive, setIsActive] = useState(false);
    
    
      const toggleSidebar = () => {
          setIsActive(!isActive);
      }

  return (
    <div>
    <button onClick={toggleSidebar}  className="menu-toggle" aria-label="Abrir menú">&#9776;</button>

    <nav  className={`sidebar ${isActive ? 'active' : ''}`}>
      <ul>

        <li><a href="#">Inicio</a></li>
        <li><a href="#"> Form Patrocinadores</a></li>
        <li><a href="#">Form categorias</a></li>
        <li><a href="#">Form comentarios</a></li>
        <li><a href="#">Form cantones</a></li>
        <li><a href="#">Form eventos</a></li>
        <li><a href="#">Form sugerencias</a></li>
        <li><a href="#">Form empleados</a></li>
       <li><button id='btnSidebar'>Cerrar Seccion</button></li>

        
      </ul>
    </nav>

    </div>
  )
}

export default Sidebar