import React from 'react'

import Test from '../../src/componentes/Testeo'
import Register from '../componentes/REGISTER/Register'
import SugerenciasCrud from '../componentes/sugerencias/SugerenciasCrud'
import PatrocinadoresCrud from '../componentes/Patrocinadores/PatrocinadoresCrud'
import CategoriasCrud from '../componentes/CrudCategorias/CategoriasCrud'
import EmpleadosCrud from '../componentes/empleados/EmpleadosCrud'
import CantonesCrud from '../componentes/CantonesCrud/CantonesCrud'

function TESTPAG() {

  return (

    <div>
      <PatrocinadoresCrud/>
      <CategoriasCrud/>
      <EmpleadosCrud/>
     <CantonesCrud/>
     <SugerenciasCrud/>
       <Test/> 
    </div>
  )
}

export default TESTPAG