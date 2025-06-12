
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import bandera from "../NAV/flag.jpg"
import "../NAV/NavclientesStyle.css"
import { VscAccount } from "react-icons/vsc";
import Llamados from "../../services/Usuarios" 
import Cookies from 'js-cookie';

function Navclientes() {

   const navigate= useNavigate()
   
  function Userlogueado() {
    navigate("/Perfil")
  

  }

  return (
    <div  id='contenedorr'>
        <nav >

            <ul id='navar'>
                <li className='li'><img id='img' src={bandera} alt="" /></li>
                <li className='li'> <p>Conecta CR</p></li>
                <li className='li'><Link to="/Contactenos">Conctacto</Link></li>
                <li className='li'><Link to="/Evento">Eventos</Link></li>
                <li className='li'><Link to="/sobreNosotros">Acerca de</Link></li>
                <li className='li'><button onClick={Userlogueado} id='btnIcon'> <VscAccount className="icon" /> </button></li>
                <li className='li'><Link to="/Login">Login</Link></li>

            </ul>
          
        </nav>
    </div>
  )
}

export default Navclientes