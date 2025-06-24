import React from 'react'
import "../CrudCategorias/categoriasStyle.css"
import { useState } from 'react'
import llamdosCategorias from "../../services/categorias "
import Swal from "sweetalert2";

function CategoriasCrud() {
  const [categorias,setcategorias] = useState()

  function inputCategorias(evento) {
    setcategorias(evento.target.value)
  }

  function enviar() {
     if (!categorias.trim()) {
            Swal.fire({
              title: "Error!! Datos vacios",
              icon: "error",
              draggable: true
            });
      
          } else {
            llamdosCategorias.PostCategorias(categorias)
      
            Swal.fire({
              title: "registro exitoso",
              icon: "success",
              draggable: true
            });
          }

    
  }
  return (
    <div id='contenedorCategorias'>
        <h1 id='titulo'>Formulario de categorías de Evento</h1>
        <label className='labelCategorias' htmlFor="">Nombre</label>
        <input value={categorias} onChange={inputCategorias} className='inputCategorias' type="text" />
        <button onClick={enviar} id='buttunCategorias'>enviar</button>
    </div>
  )
}

export default CategoriasCrud