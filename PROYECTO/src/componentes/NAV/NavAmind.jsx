import React from 'react'
import bandera from "../NAV/flag.jpg"
import { Link, useNavigate } from 'react-router-dom';
import "../NAV/NavAdmin.css"

function NavAmind() {

  const navigate = useNavigate()
  function enviar() {
    useNavigate("/eventos")
  }
  return (
    
      <div  id='contenedorr'>
        <nav >

            <ul id='navar'>
                <li className='li'><img id='img' src={bandera} alt="" /></li>
                <li className='li'> <p>Conecta CR</p></li>
                <li className='li'><Link to="/">Conctacto</Link></li>
                <li className='li'><Link to="/">Eventos</Link></li>
                <li className='li'><Link to="/">Acerca de</Link></li>
                 <li className='li'><Link to="/">Login</Link></li>
                 <li className='li'><button onChange={enviar} id='btnAdmin'>Creacion de Evento</button></li>
            </ul>
          

        </nav>
    </div>
        
  )
}

export default NavAmind



