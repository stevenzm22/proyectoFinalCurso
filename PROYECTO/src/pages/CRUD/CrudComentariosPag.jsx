import React from 'react'
import ComentariosCrud from '../../componentes/CrudComentarios/ComentariosCrud'
import Navclientes from '../../componentes/NAV/Navclientes'
import Footer from '../../componentes/FOOTER/Footer'

function CrudComentariosPag() {
  return (
    <div>
        <Navclientes/>
        <ComentariosCrud/>
        <Footer/>
    </div>
  )
}

export default CrudComentariosPag