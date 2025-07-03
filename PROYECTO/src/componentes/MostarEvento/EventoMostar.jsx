import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import llamadosEventos from "../../services/eventos"
/* import llamadosCanton from "../../services/cantones"*/
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
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

  const navigate= useNavigate()

  function enviar(id) {
    localStorage.setItem("evento_id", id);

     navigate("/saberEvento") 
  }

  return (
    <div className="gridCards">
      {tablaProductos.map((evento, index) => (
        <div className="cardEvento" key={index}>
          <img src={evento.imagen} alt={evento.tituloEvento} className="imagenEvento" />

          <div className="contenidoEvento">
            <h2>{evento.tituloEvento}</h2>
            <p className="descripcion">{evento.descripcion}</p>

            <div className="infoEvento">
              <p><FaCalendarAlt /> {evento.fechaEvento}</p>
              <p><FaMapMarkerAlt /> {evento.ubicacion}</p>
              
            </div>

            <div className="categoria">
              <span>{evento.nombre_categorias}</span>
            </div>

            <button onClick={e => enviar(evento.id)} className="botonSaberMas">Saber más</button>
            
          </div>
        </div>
      ))}
    </div>
  )
}
export default EventoMostar              