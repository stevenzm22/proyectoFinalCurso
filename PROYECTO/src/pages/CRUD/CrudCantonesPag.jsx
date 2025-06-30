import React from 'react'
import CantonesCrud from '../../componentes/CantonesCrud/CantonesCrud'
import Navclientes from '../../componentes/NAV/Navclientes'
import Footer from '../../componentes/FOOTER/Footer'

function CrudCantonesPag() {
  return (
    <div>
      <Navclientes/>
        <CantonesCrud/>
        <Footer/>
    </div>
  )
}

export default CrudCantonesPag