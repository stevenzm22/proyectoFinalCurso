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
        <li><a href="/EventosAdmin">eventos Creados</a></li>
        <li><a href="/FormPatrocinadores"> Crear Patrocinadores</a></li>
        <li><a href="/Formcategorias">Crear Categorias</a></li>
        <li><a href="/formComentarios">Crear Comentarios</a></li>
        <li><a href="/Formcantones">Crear Cantones</a></li>
        <li><a href="/CrudEvento">Crear Eventos</a></li>
        <li><a href="FormSugerencias">Crear Sugerencias</a></li>
        <li><a href="/FormEmpleados">Crear Empleados</a></li>
        <li><a href="/usuarios">Form Usuarios</a></li>
       <li><button  id='btnSidebar'onClick={btnCerrarSeccion}>Cerrar Seccion</button></li>

      </ul>
    </nav>

    </div>
  )
}

export default Sidebar