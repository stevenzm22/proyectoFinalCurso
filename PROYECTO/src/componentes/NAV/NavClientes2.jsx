import React from 'react'
import bandera from "../NAV/flag.jpg"
import { Link, useNavigate } from 'react-router-dom';


function NavClientes2() {
  return (
    <div  id='contenedorr'>
        <nav >

            <ul id='navar'>
                <li className='li'><img id='img' src={bandera} alt="" /></li>
                <li className='li'><Link to="/">Conecta CR</Link> </li>
                <li className='li'><Link to="/Contactenos">Conctacto</Link></li>
                <li className='li'><Link to="/Evento">Eventos</Link></li>
                <li className='li'><Link to="/sobreNosotros">Acerca de</Link></li>
                <li className='li'><Link to="/Login">Login</Link></li>

            </ul>
          
        </nav>
    </div>
  )
}

export default NavClientes2