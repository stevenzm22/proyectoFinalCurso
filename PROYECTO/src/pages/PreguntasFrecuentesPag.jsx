import React from 'react'
import PreguntasFrecuentes from '../componentes/PreguntasFrecuentes/PreguntasFrecuentes'
import Navclientes from '../componentes/NAV/Navclientes'
import Footer from '../componentes/FOOTER/Footer'

function PreguntasFrecuentesPag() {
  return (
    <div>
      <Navclientes/>
       <PreguntasFrecuentes/> 
       <Footer/>
    </div>
  )
}

export default PreguntasFrecuentesPag