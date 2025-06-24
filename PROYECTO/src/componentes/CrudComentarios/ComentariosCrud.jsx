import React, { useState } from 'react'
import Swal from "sweetalert2";
import llamadosComentarios from "../../services/comentarios"
import "../CrudComentarios/ComentarioStyle.css"


function ComentariosCrud() {
  const [text,settext] = useState()
  const [textarea,settextarea] = useState()
  const [date,setdate] = useState()

  function inputText(evento) {
    settext(evento.target.value)
  }
  function inputtextarea(evento) {
    settextarea(evento.target.value)
  }
  function inputdate(evento) {
    setdate(evento.target.value)
  }
  function enviar() {
    if (!text.trim() || !textarea.trim() || !date.trim() ) {
          Swal.fire({
            title: "Error!! Datos vacios",
            icon: "error",
            draggable: true
          });
    
        } else {
          llamadosComentarios.PostComentarios(text,textarea,date)
    
          Swal.fire({
            title: "registro exitoso",
            icon: "success",
            draggable: true
          });
        }

  }

  return (
    <div id='contenedorComentarios'>
        <h1 id='titulo'> Formulario de Comentarios </h1>
        <label className='labelComentarios' htmlFor="">Nombre usuarios</label>
        <input className='inputComentarios' value={text} onChange={inputText} type="text" />
        <label className='labelComentarios' htmlFor="">Mensaje</label>
        <textarea className='inputComentarios' value={textarea} onChange={inputtextarea} name="" id=""></textarea>
        <label className='labelComentarios' htmlFor="">fecha</label>
        <input className='inputComentarios' value={date} onChange={inputdate} type="date" />
        <button id='buttunComentarios' onClick={enviar} >enviar</button>



    </div>
  )
}

export default ComentariosCrud