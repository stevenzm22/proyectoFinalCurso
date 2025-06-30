import React from 'react'
import CrudUsuario from '../componentes/CRUDUSUARIO/CrudUsuario'
import Navclientes from '../componentes/NAV/Navclientes'
import Footer from '../componentes/FOOTER/Footer'

function MostarUsuarios() {
  return (
    <div>
        <Navclientes/>
        <CrudUsuario/>
        <Footer/>
    </div>
  )
}

export default MostarUsuarios