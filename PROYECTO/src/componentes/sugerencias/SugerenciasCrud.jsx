import React from 'react' 
import "../sugerencias/SugerenciasStyle.css"

function SugerenciasCrud() {
  return (
    <div>
        <h1>Formulario de Sugerencias</h1>
        <label htmlFor="">Mensaje</label>
        <textarea name="" id=""></textarea>
        <label htmlFor="">Fecha</label>
        <input type="text" />
        <button>enviar</button>
    </div>
  )
}

export default SugerenciasCrud