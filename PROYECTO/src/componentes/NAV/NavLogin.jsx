import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import bandera from "../NAV/flag.jpg"

function NavLogin() {
  
  return (
    
         <div  id='contenedorr'>
        <nav >

            <ul id='navar'>
                <li className='li'><img id='img' src={bandera} alt="" /></li>
                <li className='li'> <p>Conecta CR</p></li>
                <li className='li'><Link to="/Contactenos">Contacto</Link></li>
                <li className='li'><Link to="/Evento">Eventos</Link></li>
                <li className='li'><Link to="/sobreNosotros">Acerca de</Link></li>
                <li className='li'><Link to="/Register">Register</Link></li>

            </ul>
          
        </nav>
    </div>
    
  )
}

export default NavLogin