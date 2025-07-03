
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import bandera from "../NAV/flag.jpg"
import "../NAV/NavclientesStyle.css"
import { VscAccount } from "react-icons/vsc";
import Llamados from "../../services/Usuarios" 
import Cookies from 'js-cookie';

function NavClientes2() {

   const navigate= useNavigate()
    const isLoggedIn = Cookies.get("access_token")
   
  function Userlogueado() {
    if (isLoggedIn) {
      navigate('/perfil');
    } else {
      navigate('/login');
    }

  }

function navegar() {
  navigate("/CrudEvento")
}

  return (
    <div  id='contenedorr'>
        <nav >

            <ul id='navar'>
                <li className='li'><img id='img' src={bandera} alt="" /></li>
                <li className='li'><Link to="/">Conecta CR</Link> </li>
                <li className='li'><Link to="/Contactenos">Conctacto</Link></li>
                <li className='li'><Link to="/eventospubli">Eventos</Link></li>
                <li className='li'><Link to="/sobreNosotros">Acerca de</Link></li>
                <li className='li'><button onClick={navegar} id='buttunPatrocinador'>crear evento</button></li>
                <li className='li'><button onClick={Userlogueado} id='btnIcon'> {isLoggedIn ? (<VscAccount className="icon" />) : (<span className="login-text">Login</span>)}</button></li>
            </ul>
          
        </nav>
    </div>
  )
}

export default NavClientes2