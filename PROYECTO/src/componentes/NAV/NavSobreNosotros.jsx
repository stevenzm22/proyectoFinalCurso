import React from 'react'
import bandera from "../NAV/flag.jpg"
import { Link, useNavigate } from 'react-router-dom';

function NavSobreNosotros() {
  const navigate = useNavigate()
  function salir() {
    navigate("/")
    
  }
  return (
    <div  id='contenedorr'>
        <nav >

            <ul id='navar'>
                <li className='li'><img id='img' src={bandera} alt="" /></li>
                <li className='li'> <p>Conecta CR</p></li>
                <li className='li'><Link to="/Evento">Eventos</Link></li>
                <li className='li'><Link to="/Contactenos">Contacto</Link></li>
                <li className='li'><Link to="/Login">Login</Link></li>
                <button onClick={salir} className='btnNavt'>Salir</button>

            </ul>
          
        </nav>
    </div>
  )
}

export default NavSobreNosotros