
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import bandera from "../NAV/flag.jpg"
import "../NAV/NavclientesStyle.css"
import { VscAccount } from "react-icons/vsc";
import Llamados from "../../services/Usuarios" 

function Navclientes() {

  const [usuarios,setusuarios]=useState([])

   const navigate= useNavigate()
   
    useEffect(() => {
   
        async  function recuperarDatos() {
            const datos= await Llamados.GetUser()
            console.log(datos);
    
            setusuarios(datos)
        }
        recuperarDatos()
    
      }, []); 



  function Userlogueado(id) {

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
                <li className='li'><button onAuxClick={Userlogueado} id='btnIcon'> <VscAccount className="icon" /> </button></li>
                <li className='li'><Link to="/Login">Login</Link></li>

            </ul>
          
        </nav>
    </div>
  )
}

export default Navclientes