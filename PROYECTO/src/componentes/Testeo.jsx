import React, { useEffect, useState } from 'react';
import PostProductos from '../services/Usuarios';
import "../componentes/Test.css"

function Test() {
  const [isActive, setIsActive] = useState(false);


  const toggleSidebar = () => {
      setIsActive(!isActive);
    };

  return (
    <div>
     
      <button onClick={toggleSidebar}  className="menu-toggle" aria-label="Abrir menú">&#9776;</button>

    <nav  className={`sidebar ${isActive ? 'active' : ''}`}>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Patrocinadores</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Acerca de</a></li>
      </ul>
    </nav>
  </div>
  );
}

export default Test;