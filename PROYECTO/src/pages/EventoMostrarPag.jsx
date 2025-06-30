import React from 'react'
import EventoMostar from '../componentes/MostarEvento/EventoMostar'
import Footer from '../componentes/FOOTER/Footer'
import Navclientes from '../componentes/NAV/Navclientes'

function EventoMostrarPag() {
  return (
    <div>
        <Navclientes/>
        <EventoMostar/>
        <Footer/>
    </div>
  )
}

export default EventoMostrarPag