import React, { useEffect, useState } from 'react'
import "../CantonesCrud/cantonesStyle.css"
import llamados from "../../services/cantones"
import Swal from "sweetalert2";


function CantonesCrud() {
  const [Cantones,setCantones] = useState("")
  const [editar,seteditar] = useState("")
  const [datoseditables,setdatoseditables] = useState([])

  function inputeditar(evento) {
    seteditar(evento.target.value)
  }

  function inputCantones(evento) {
    setCantones(evento.target.value)
  }

  useEffect(() => {
      async  function recuperarDatos() {
          const datos= await llamados.GetCantones()
         setdatoseditables(datos)

      }
      recuperarDatos()
    }, []);

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

    function btneditar(id) {
    llamados.UpdateCantones(editar,id)
    alert("funciona")
  }

  return (
    <div id='contenedorCantones'>
        <h1  id='titulo'>Formurlario de Cantones</h1>
        <label  className='labelCantones' htmlFor="">Nombre</label>
        <input value={Cantones} onChange={inputCantones}  className='inputCantones' type="text" />
        <button onClick={btncantones} id='buttunCantones'>enviar</button>
        <br />
        
        {/* {datoseditables.map((cantones, index) => (
              <div className="cardEvento" key={index}>
                
                <div className="contenidoEvento">
                  <h2>{cantones.nombre}</h2>
                  
                  <div className="infoEvento">
                   
                  </div>
                  <label htmlFor="">editar</label>
                  <input value={editar} onChange={inputeditar} type="text" />
                  <button onClick={e => btneditar(cantones.id)} className="botonSaberMas">editar</button>
                </div>
              </div>
            ))} */}

    </div>
  )
}

export default CantonesCrud