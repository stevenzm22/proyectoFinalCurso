import React from 'react'
import CategoriasCrud from '../../componentes/CrudCategorias/CategoriasCrud'
import Navclientes from '../../componentes/NAV/Navclientes'
import Footer from '../../componentes/FOOTER/Footer'
import NavAmind from '../../componentes/NAV/NavAmind'
import Sidebar from '../../componentes/SIDEBAR/Sidebar'

function CrudCategorias() {
  return (
    <div>
        <NavAmind/>
        <Sidebar/>
        <CategoriasCrud/>
        <Footer/>
    </div>
  )
}

export default CrudCategorias