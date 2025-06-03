import React from 'react'
import bandera from "../NAV/flag.jpg"
import "../NAV/NavarEvento.css"
import { useNavigate } from 'react-router-dom'

function NavarEvento() {
  const navigate = useNavigate()
  
  function salir() {
    navigate("/")
    
  }
  return (
    <div>
        <ul id='navart'>
        <li><img  id='imgt' src={bandera} alt="" /></li>
        <li className='lit'>inicio</li>
        <input id='InputBuscart' type="text" placeholder='Buscar' />
        <button className='btnNavt'>Buscar</button>
        <button onClick={salir} className='btnNavt' >Salir</button>
        </ul>



    </div>
  )
}

export default NavarEvento