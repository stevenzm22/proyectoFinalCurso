import React from 'react'
import MostarEventoAdmin from '../componentes/MostrarEventoAdmin/MostarEventoAdmin'
import Navclientes from '../componentes/NAV/Navclientes'
import Footer from '../componentes/FOOTER/Footer'

function MostrarEventoADPag() {
  return (
    <div>
        <Navclientes/>
        <MostarEventoAdmin/>
        <Footer/>
    </div>
  )
}

export default MostrarEventoADPag