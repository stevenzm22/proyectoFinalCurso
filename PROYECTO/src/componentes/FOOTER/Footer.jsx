import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../FOOTER/FooterStyle.css"


function Footer() {
  return (
    <div>

    <div id='contendorFooter'>

        <div id='contenedorFooter1'>
        <h2>Conecta CR</h2>
        <p>Conectando comunidades a través de eventos</p>
        </div>

    <div id='contendorFooter2' >
        
        <Link className='link' to="/">Preguntas Frecuentes</Link>
        <Link className='link' to="/">Acerca de</Link>
        <Link className='link' to="/">Contacto</Link>

    </div>

    <div id='contenedorFooter3'>
        <p id='pFooter'> 2025 Conecta CR. Todos los derechos reservados.</p>
    </div>
    
    </div>
        
    </div>
  )
}

export default Footer