import React, { useEffect, useState } from 'react';
import PostProductos from '../services/Usuarios';
import "../componentes/Test.css"

function Test() {
   
    function btnCerrarSeccion() {
          Cookies.remove('access_token');  
          Cookies.remove('refresh_token'); 
          Cookies.remove('user_role'); 
          Cookies.remove('user_id'); 
          navigate("/")
          
        }
  return (
    <div>
      <div>
        <aside className="custom-sidebar">
          <ul className="sidebar-menu">
            <h1 className="sidebar-title">PANEL</h1>
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
        </aside>
      </div>
      <div>
        
      </div>
    </div>
  );
}
export default Test;