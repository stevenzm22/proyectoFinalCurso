import React from 'react'
import EmpleadosCrud from '../../componentes/empleados/EmpleadosCrud'
import Navclientes from '../../componentes/NAV/Navclientes'
import Footer from '../../componentes/FOOTER/Footer'
import NavAmind from '../../componentes/NAV/NavAmind'
import Sidebar from '../../componentes/SIDEBAR/Sidebar'

function CrudEmpleados() {
  return (
    <div>
        <NavAmind/>
        <Sidebar/>
        <EmpleadosCrud/>
        <Footer/>

    </div>
  )
}

export default CrudEmpleados