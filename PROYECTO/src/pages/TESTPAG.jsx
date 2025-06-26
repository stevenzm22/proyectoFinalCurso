import React from 'react'

import Test from '../../src/componentes/Testeo'
import Register from '../componentes/REGISTER/Register'
import SugerenciasCrud from '../componentes/sugerencias/SugerenciasCrud'
import PatrocinadoresCrud from '../componentes/Patrocinadores/PatrocinadoresCrud'
import CategoriasCrud from '../componentes/CrudCategorias/CategoriasCrud'
import EmpleadosCrud from '../componentes/empleados/EmpleadosCrud'
import CantonesCrud from '../componentes/CantonesCrud/CantonesCrud'
import Sidebar from '../componentes/SIDEBAR/Sidebar'
import Navclientes from '../componentes/NAV/Navclientes'
import NavClientes2 from '../componentes/NAV/NavClientes2'
import NavAmind from '../componentes/NAV/NavAmind'

function TESTPAG() {

  return (

    <div>
      <NavAmind/>
      
      <PatrocinadoresCrud/>
      <CategoriasCrud/>
      <EmpleadosCrud/>
     <CantonesCrud/>
     <SugerenciasCrud/>
      <Test/>  
       {/* <Sidebar/> */}
    </div>
  )
}

export default TESTPAG