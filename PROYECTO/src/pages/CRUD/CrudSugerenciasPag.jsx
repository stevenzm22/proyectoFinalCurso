import React from 'react'
import SugerenciasCrud from '../../componentes/sugerencias/SugerenciasCrud'
import Navclientes from '../../componentes/NAV/Navclientes'
import Footer from '../../componentes/FOOTER/Footer'

function CrudSugerenciasPag() {
  return (
    <div>
        <Navclientes/>
        <SugerenciasCrud/>
        <Footer/>

    </div>
  )
}

export default CrudSugerenciasPag