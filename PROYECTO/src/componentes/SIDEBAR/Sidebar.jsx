import React, { useEffect, useState } from 'react';
import "../SIDEBAR/SidebarStyle.css"
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';



function Sidebar() {
     const [isActive, setIsActive] = useState(false);
     const navigate = useNavigate()
    
      const toggleSidebar = () => {
          setIsActive(!isActive);
      }

      function btnCerrarSeccion() {
        Cookies.remove('access_token');  
        Cookies.remove('refresh_token'); 
        Cookies.remove('user_role'); 
        Cookies.remove('user_id'); 
        navigate("/")
        
      }

  return (
    <div>
    <button onClick={toggleSidebar}  className="menu-toggle" aria-label="Abrir menú">&#9776;</button>

    <nav  className={`sidebar ${isActive ? 'active' : ''}`}>
      <ul>
        <br />
        <li><a href="/Admin">Inicio</a></li>
        <li><a href="/FormPatrocinadores"> Form Patrocinadores</a></li>
        <li><a href="/Formcategorias">Form categorias</a></li>
        <li><a href="/formComentarios">Form comentarios</a></li>
        <li><a href="/Formcantones">Form cantones</a></li>
        <li><a href="/CrudEvento">Form eventos</a></li>
        <li><a href="FormSugerencias">Form sugerencias</a></li>
        <li><a href="/FormEmpleados">Form empleados</a></li>
        <li><a href="/usuarios">Form usuarios</a></li>
       <li><button  id='btnSidebar'onClick={btnCerrarSeccion}>Cerrar Seccion</button></li>

        
      </ul>
    </nav>

    </div>
  )
}

export default Sidebar