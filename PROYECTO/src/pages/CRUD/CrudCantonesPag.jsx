import React from 'react'
import CantonesCrud from '../../componentes/CantonesCrud/CantonesCrud'
import Navclientes from '../../componentes/NAV/Navclientes'
import Footer from '../../componentes/FOOTER/Footer'
import NavAmind from '../../componentes/NAV/NavAmind'
import Sidebar from '../../componentes/SIDEBAR/Sidebar'

function CrudCantonesPag() {
  return (
    <div>
        <NavAmind/>
        <Sidebar/>
        <CantonesCrud/>
        <Footer/>
    </div>
  )
}

export default CrudCantonesPag