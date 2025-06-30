import React from 'react'
import EmpleadosCrud from '../../componentes/empleados/EmpleadosCrud'
import Navclientes from '../../componentes/NAV/Navclientes'
import Footer from '../../componentes/FOOTER/Footer'

function CrudEmpleados() {
  return (
    <div>
        <Navclientes/>
        <EmpleadosCrud/>
        <Footer/>

    </div>
  )
}

export default CrudEmpleados