import React from 'react' 
import "../sugerencias/SugerenciasStyle.css"

function SugerenciasCrud() {
  return (
    <div id='ContenedorSugerencias'>
        <h1 id='titulo'>Formulario de Sugerencias</h1>
        <label  className='labelSugerencias' htmlFor="">Mensaje</label>
        <textarea className='inputSugerencias' name="" id=""></textarea>
        <label  className='labelSugerencis' htmlFor="">Fecha</label>
        <input  className='inputSugerencias' type="text" />
        <button id='buttunSugerencias'>enviar</button>
    </div>
  )
}

export default SugerenciasCrud