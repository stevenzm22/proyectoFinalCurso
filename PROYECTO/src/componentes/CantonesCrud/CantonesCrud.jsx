import React, { useState } from 'react'
import "../CantonesCrud/cantonesStyle.css"
import llamados from "../../services/cantones"
import Swal from "sweetalert2";


function CantonesCrud() {
  const [Cantones,setCantones] = useState("")

  function inputCantones(evento) {
    setCantones(evento.target.value)
  }

  function btncantones() {
   if (!Cantones.trim()) {
        Swal.fire({
          title: "Error!! Datos vacios",
          icon: "error",
          draggable: true
        });
  
      } else {
        llamados.PostCantones(Cantones)
  
        Swal.fire({
          title: "registro exitoso",
          icon: "success",
          draggable: true
        });
      }
    }

  return (
    <div id='contenedorCantones'>
        <h1  id='titulo'>Formurlario de Cantones</h1>
        <label  className='labelCantones' htmlFor="">Nombre</label>
        <input value={Cantones} onChange={inputCantones}  className='inputCantones' type="text" />
        <button onClick={btncantones} id='buttunCantones'>enviar</button>

    </div>
  )
}

export default CantonesCrud