import React from 'react'
import CategoriasCrud from '../../componentes/CrudCategorias/CategoriasCrud'
import Navclientes from '../../componentes/NAV/Navclientes'
import Footer from '../../componentes/FOOTER/Footer'

function CrudCategorias() {
  return (
    <div>
      <Navclientes/>
        <CategoriasCrud/>
        <Footer/>
    </div>
  )
}

export default CrudCategorias