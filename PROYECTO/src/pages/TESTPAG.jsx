import React from 'react'

import Test from '../../src/componentes/Testeo'
import Register from '../componentes/REGISTER/Register'
import SugerenciasCrud from '../componentes/sugerencias/SugerenciasCrud'
import PatrocinadoresCrud from '../componentes/Patrocinadores/PatrocinadoresCrud'
import CategoriasCrud from '../componentes/CrudCategorias/CategoriasCrud'
import EmpleadosCrud from '../componentes/empleados/EmpleadosCrud'

function TESTPAG() {

  return (

    <div>
      <PatrocinadoresCrud/>
      <CategoriasCrud/>
      <EmpleadosCrud/>
     
     {/*  <Test/> */}
    </div>
  )
}

export default TESTPAG