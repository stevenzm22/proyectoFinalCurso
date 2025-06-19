import React from 'react'
import Navclientes from '../componentes/NAV/Navclientes'
import NavAmind from '../componentes/NAV/NavAmind'
import Homeclientes from '../componentes/HOME/Homeclientes'
import Footer from '../componentes/FOOTER/Footer'
import NavClientes2 from '../componentes/NAV/NavClientes2'

function HOMECLIENTE() {
  return (
    <div>
        <NavClientes2/>
        <Homeclientes/>
        <Footer/>
      
    </div>
  )
}

export default HOMECLIENTE