import React from 'react'
import CrudUsuario from '../componentes/CRUDUSUARIO/CrudUsuario'
import Navclientes from '../componentes/NAV/Navclientes'
import Footer from '../componentes/FOOTER/Footer'
import Sidebar from '../componentes/SIDEBAR/Sidebar'
import NavAmind from '../componentes/NAV/NavAmind'

function MostarUsuarios() {
  return (
    <div>
        <NavAmind/>
        <Sidebar/>
        <CrudUsuario/>
        <Footer/>
    </div>
  )
}

export default MostarUsuarios