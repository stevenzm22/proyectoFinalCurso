import React, { useState } from 'react'
import "../Patrocinadores/PatrocinadoresStyle.css"
import Swal from "sweetalert2";
import llamadosPatrocinador from "../../services/patrocinadores"


function PatrocinadoresCrud() {
  const [patrocinadores,setpatrocinadores] = useState()
  const [tipoPatrocinador,settipoPatrocinador] = useState()
  const [fechaPatrocinadores,setfechaPatrocinadores] = useState()

  function inputPatrocinadores(evento) {
    setpatrocinadores(evento.target.value)
  }
  function inputPatrocinador(evento) {
    settipoPatrocinador(evento.target.value)
  }
  function inputfechaPatrocinador(evento) {
    setfechaPatrocinadores(evento.target.value)
  }

  function enviar() {
     if (!patrocinadores.trim() || !tipoPatrocinador.trim() || !fechaPatrocinadores.trim()) {
          Swal.fire({
            title: "ingrese los datos",
            icon: "error",
            draggable: true
          });
    
        } else { /* post a la tabla de auth_user */
          llamadosPatrocinador.PostPatrocinadores(patrocinadores,tipoPatrocinador,fechaPatrocinadores)
          Swal.fire({
          title: "registro exitoso",
          icon: "success",
          draggable: true
        });
      }
    
  }



  return (
    <div id='contenedorPatrocinador'>
        <h1 id='titulo'>Formulario de Patrocinadores</h1>
        <label className='labelPatrocinadores' htmlFor="">Patrocinador</label>
        <input value={patrocinadores} onChange={inputPatrocinadores} className='inputPatrocinadores' type="text" />
        <label  className='labelPatrocinadores'  htmlFor="">Tipo de Patrocinador</label>
        <input value={tipoPatrocinador} onChange={inputPatrocinador} className='inputPatrocinadores' type="text" />
        <label  className='labelPatrocinadores'  htmlFor="">Contrato de Duracion</label>
        <input value={fechaPatrocinadores} onChange={inputfechaPatrocinador} placeholder='dias?'  className='inputPatrocinadores' type="number" />
        <button onClick={enviar} id='buttunPatrocinador'>Enviar</button>
    </div>
  )
}

export default PatrocinadoresCrud