
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import bandera from "../NAV/flag.jpg"
import "../NAV/NavclientesStyle.css"

function Navclientes() {
  return (
    <div  id='contenedorr'>
        <nav >

            <ul id='navar'>
                <li className='li'><img id='img' src={bandera} alt="" /></li>
                <li className='li'> <p>Conecta CR</p></li>
                <li className='li'><Link to="/">Conctacto</Link></li>
                <li className='li'><Link to="/Evento">Eventos</Link></li>
                <li className='li'><Link to="/">Acerca de</Link></li>
                <li className='li'><Link to="/">Login</Link></li>

            </ul>
          
        </nav>
    </div>
  )
}

export default Navclientes