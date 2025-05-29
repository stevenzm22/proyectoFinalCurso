import React from 'react'
import bandera from "../NAV/flag.jpg"
import "../NAV/NavarEvento.css"

function NavarEvento() {
  return (
    <div>
        <ul id='navar'>
        <li><img  id='img' src={bandera} alt="" /></li>
        <li className='li'>inicio</li>
        <input id='InputBuscar' type="text" placeholder='Buscar' />
        <button className='btnNav'>Buscar</button>
        <button className='btnNav' >Salir</button>
        </ul>



    </div>
  )
}

export default NavarEvento