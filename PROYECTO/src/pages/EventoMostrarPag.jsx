import React from 'react'
import EventoMostar from '../componentes/MostarEvento/EventoMostar'
import Footer from '../componentes/FOOTER/Footer'
import Navclientes from '../componentes/NAV/Navclientes'
import NavClientes2 from '../componentes/NAV/NavClientes2'

function EventoMostrarPag() {
  return (
    <div>
        <NavClientes2/>
        <EventoMostar/>
        <Footer/>
    </div>
  )
}

export default EventoMostrarPag