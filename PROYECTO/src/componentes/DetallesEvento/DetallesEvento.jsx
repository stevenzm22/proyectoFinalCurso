import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import llamdosEventos from "../../services/eventos";
import "../DetallesEvento/DetallesEventoStyle.css";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser, FaEnvelope, FaClipboardList } from "react-icons/fa";
import Cookies from 'js-cookie';
import llamadosInscripciones from "../../services/inscripciones"
import Swal from "sweetalert2";

function DetallesEvento() {
  const id = localStorage.getItem("evento_id");
  const recuperarUsuarios = Cookies.get("user_id")
  console.log(recuperarUsuarios);
  

  const [eventos, setEventos] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function recuperarDatos() {
      const datos = await llamdosEventos.GetEventosId(id);
      setEventos(datos);
    }
    recuperarDatos();
  }, [id]);

 async function registrarse(id) {
     if (!id) {
    alert("❌ Error: No se encontró el ID del evento.");
  } else if (!recuperarUsuarios) {
    alert("❌ Error: No se encontró el usuario. Por favor inicia sesión.");
  } else {
    const resultados = await llamadosInscripciones.PostInscripciones(id,recuperarUsuarios);
    Swal.fire({
              title: "registro exitoso",
              icon: "success",
              draggable: true
            });
  }
 }
  return (
    <div id='contenedor-eve'>
    <div className="detalles-container">
      <div className="imagen-container">
        <img src={eventos.imagen} alt={eventos.tituloEvento} className="evento-imagen" />
      </div>

      <div className="info-container">
        <h1 className="evento-titulo">{eventos.tituloEvento}</h1>
        <h2 className="evento-organizador">
          <FaUser className="icono" /> Creado por: {eventos.organizador}
        </h2>

        <div className="evento-info">
          <p className="evento-descripcion">
            <FaClipboardList className="icono" /> Descripcion: {eventos.descripcion}
          </p>
          <p><FaCalendarAlt className="icono" /> {eventos.fechaEvento}</p>
          <p><FaClock className="icono" /> Hora: {eventos.hora} -- </p> <p> <FaClock className="icono"/> Duracion del evento: {eventos.duracion}</p>
        </div>

        <div className="evento-extra">
          <p><FaMapMarkerAlt className="icono" /> {eventos.nombre_canton}</p>
          <p><FaClipboardList className="icono" /> {eventos.nombre_categorias}</p>
          <p><FaEnvelope className="icono" /> {eventos.email}</p>
        </div>

        <div className="boton-contenedor">
          <button className="boton-registrarse" onClick={e => registrarse(id)}>Registrarse al evento</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default DetallesEvento;
