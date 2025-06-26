import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import llamadosEventos from "../../services/eventos"
/* import llamadosCanton from "../../services/cantones"*/
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import "../MostrarEventoAdmin/EventosAdminStyle.css"

function MostarEventoAdmin() {
    const [tablaProductos,settablaProductos] = useState([])
   

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
  ///////// FUNCION EDITAR ////////////////////
 async function Editar(id) {
    const datosNuevos= await llamadosEventos.GetEventosId(id)
    console.log(datosNuevos);
    
    const { value: formValues } = await Swal.fire({
        title: "Editar Producto",
        html: `
            
          <input id="swal-input1" value="${datosNuevos.tituloEvento}" class="swal2-input">
          <input id="swal-input2"value="${datosNuevos.ubicacion}" class="swal2-input">
          <input id="swal-input3" value="${datosNuevos.descripcion}" class="swal2-input">
         
        `,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value
          ];
        }
      });
     
      if (formValues) {
       await llamadosEventos.UpdateEventos(formValues[0],formValues[1],formValues[2], id )
        location.reload()
      }
 }

 async function Eliminar(id) {
     const result = await Swal.fire({
          title: "¿Seguro que desea eliminar?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, eliminar!"
      });
    
      if (result.isConfirmed) {
        const datosEliminados= await llamadosEventos.DeleteEventos(id); 
       
          await Swal.fire({
              title: "¡Eliminado!",
              text: "Eliminado correctamente.",
              icon: "success"
              
          });
          location.reload();
      }
    
 }

  return (
    <div className="GridCards">
      {tablaProductos.map((evento, index) => (
        <div className="CardEvento" key={index}>
          <img src={evento.imagen} alt={evento.tituloEvento} className="ImagenEvento" />

          <div className="ContenidoEvento">
            <h2>{evento.tituloEvento}</h2>
            <p className="Descripcion">{evento.descripcion}</p>

            <div className="InfoEvento">
              <p><FaCalendarAlt /> {evento.fechaEvento}</p>
              <p><FaMapMarkerAlt /> {evento.ubicacion}</p>
              
            </div>

            <div className="Categoria">
              <span>{evento.nombre_categorias}</span>
            </div>

            <div className="BotonesEvento">
                <button onClick={e => enviar(evento.id)} className="BotonSaberMas">Saber más</button>
                <button onClick={e => Editar(evento.id)} className="BotonSaberMas">Editar</button>
                <button onClick={e => Eliminar(evento.id)} className="BotonSaberMas">Eliminar</button>
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}
export default MostarEventoAdmin 

