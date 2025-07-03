import React from 'react'
import MostarEventoAdmin from '../componentes/MostrarEventoAdmin/MostarEventoAdmin'
import Navclientes from '../componentes/NAV/Navclientes'
import Footer from '../componentes/FOOTER/Footer'
import Sidebar from '../componentes/SIDEBAR/Sidebar'

function MostrarEventoADPag() {
  return (
    <div>
        <Navclientes/>
        <Sidebar/>
        <MostarEventoAdmin/>
        <Footer/>
    </div>
  )
}

export default MostrarEventoADPag