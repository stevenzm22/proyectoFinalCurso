import React from 'react'
import PatrocinadoresCrud from '../../componentes/Patrocinadores/PatrocinadoresCrud'
import Navclientes from '../../componentes/NAV/Navclientes'
import Footer from '../../componentes/FOOTER/Footer'

function CrudPatrocinadoresPag() {
  return (
    <div>
      <Navclientes/>
        <PatrocinadoresCrud/>
        <Footer/>
    </div>
  )
}

export default CrudPatrocinadoresPag