import React from 'react'
import ComentariosCrud from '../../componentes/CrudComentarios/ComentariosCrud'
import Navclientes from '../../componentes/NAV/Navclientes'
import Footer from '../../componentes/FOOTER/Footer'
import NavAmind from '../../componentes/NAV/NavAmind'
import Sidebar from '../../componentes/SIDEBAR/Sidebar'

function CrudComentariosPag() {
  return (
    <div>
       <NavAmind/>
       <Sidebar/>
        <ComentariosCrud/>
        <Footer/>
    </div>
  )
}

export default CrudComentariosPag