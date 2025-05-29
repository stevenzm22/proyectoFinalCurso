import React from 'react'
import Navclientes from '../componentes/NAV/Navclientes'
import NavAmind from '../componentes/NAV/NavAmind'
import Homeclientes from '../componentes/HOME/Homeclientes'
import Footer from '../componentes/FOOTER/Footer'

function HOMECLIENTE() {
  return (
    <div>
        <Navclientes/>
        <Homeclientes/>
        <Footer/>
      
    </div>
  )
}

export default HOMECLIENTE