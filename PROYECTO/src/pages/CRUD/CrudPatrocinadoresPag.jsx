import React from 'react'
import PatrocinadoresCrud from '../../componentes/Patrocinadores/PatrocinadoresCrud'
import Navclientes from '../../componentes/NAV/Navclientes'
import Footer from '../../componentes/FOOTER/Footer'
import NavAmind from '../../componentes/NAV/NavAmind'
import Sidebar from '../../componentes/SIDEBAR/Sidebar'

function CrudPatrocinadoresPag() {
  return (
    <div>
        <NavAmind/>
        <Sidebar/>
        <PatrocinadoresCrud/>
        <Footer/>
    </div>
  )
}

export default CrudPatrocinadoresPag