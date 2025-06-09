import React from 'react'
import "../empleados/empleadosStyle.css"

function EmpleadosCrud() {
  return (
    <div id='contenedorEmpleado'>
        <h1 id='titulo'>Formulario de empleados</h1>
        <label  className='labelEmpleado' htmlFor="">Nombre</label>
        <input  className='inputEmpleado' type="text" />
        <label  className='labelEmpleado' htmlFor="">Apellido</label>
        <input  className='inputEmpleado' type="text" />
        <label  className='labelEmpleado' htmlFor="">Email</label>
        <input  className='inputEmpleado' type="text" />
        <button id='buttunEmpleado'>enviar</button>
    </div>
  )
}

export default EmpleadosCrud


