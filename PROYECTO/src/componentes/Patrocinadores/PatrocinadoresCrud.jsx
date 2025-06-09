import React from 'react'
import "../Patrocinadores/PatrocinadoresStyle.css"

function PatrocinadoresCrud() {
  return (
    <div id='contenedorPatrocinador'>
        <h1 id='titulo'>Formulario de Patrocinadores</h1>
        <label className='labelPatrocinadores' htmlFor="">Patrocinador</label>
        <input className='inputPatrocinadores' type="text" />
        <label  className='labelPatrocinadores'  htmlFor="">Tipo de Patrocinador</label>
        <input  className='inputPatrocinadores' type="text" />
        <label  className='labelPatrocinadores'  htmlFor="">Contrato de Duracion</label>
        <input  className='inputPatrocinadores' type="date" />
        <button id='buttunPatrocinador'>Enviar</button>
    </div>
  )
}

export default PatrocinadoresCrud