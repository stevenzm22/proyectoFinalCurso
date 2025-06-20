import React, { useEffect, useState } from 'react'
import llamadosEventos from "../../services/eventos"
import llamadosCanton from "../../services/cantones"
import "../MostarEvento/EventoMostarStyle.css"

function EventoMostar() {
    const [tablaProductos,settablaProductos] = useState([])
    const [tablaCanton,settablaCanton] = useState([])

 useEffect(() => {
    async  function recuperarDatos() {
        const datos= await llamadosEventos.GetEventos()
       settablaProductos(datos)
       
    }
    recuperarDatos()
  }, []);

  

  
  return (
    <div>
      {tablaProductos.map((evento, index) => (
        <div key={index}>
            <div>
                <img src={evento.imagen} alt="" className='imagenesM' /> {/* imagen */}
            </div>
            <h2>{evento.tituloEvento}</h2>{/* titulo */}
            <p>{evento.descripcion}</p> {/* descripcion */}
            <h3>{evento.fechaEvento}</h3> {/* fecha */}
            <p>{evento.ubicacion}</p> {/* ubicacion */}
            <p>{evento.nombre_canton}</p> {/* ubicacion */}
        </div>
            ))}
       
       
    </div>
  )
}

export default EventoMostar