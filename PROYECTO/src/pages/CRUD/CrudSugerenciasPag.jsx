import React from 'react'
import SugerenciasCrud from '../../componentes/sugerencias/SugerenciasCrud'
import Navclientes from '../../componentes/NAV/Navclientes'
import Footer from '../../componentes/FOOTER/Footer'
import NavAmind from '../../componentes/NAV/NavAmind'
import Sidebar from '../../componentes/SIDEBAR/Sidebar'

function CrudSugerenciasPag() {
  return (
    <div>
        <NavAmind/>
        <Sidebar/>
        <SugerenciasCrud/>
        <Footer/>

    </div>
  )
}

export default CrudSugerenciasPag