import React from 'react'
import "../CantonesCrud/cantonesStyle.css"

function CantonesCrud() {
  return (
    <div id='contenedorCantones'>
        <h1  id='titulo'>Formurlario de Cantones</h1>
        <label  className='labelCantones' htmlFor="">Nombre</label>
        <input  className='inputCantones' type="text" />
        <button id='buttunCantones'>enviar</button>

    </div>
  )
}

export default CantonesCrud