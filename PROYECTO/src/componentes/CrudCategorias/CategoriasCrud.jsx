import React from 'react'
import "../CrudCategorias/categoriasStyle.css"

function CategoriasCrud() {
  return (
    <div id='contenedorCategorias'>
        <h1 id='titulo'>Formulario de categorías de Evento</h1>
        <label className='labelCategorias' htmlFor="">Nombre</label>
        <input className='inputCategorias' type="text" />
        <button id='buttunCategorias'>enviar</button>
    </div>
  )
}

export default CategoriasCrud