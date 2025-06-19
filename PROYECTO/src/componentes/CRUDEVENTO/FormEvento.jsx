import React, { useEffect, useState } from 'react';
import "../CRUDEVENTO/FormEvento.css"
import Swal from "sweetalert2";
import llamadosCateegorias from '../../services/categorias ';
import llamdosEvento from "../../services/eventos"
import llamadosCanton from "../../services/cantones"
import llamadosPatrocinio from "../../services/patrocinadores"

function FormEvento() {
  
  const [usuariosTareas, setUsuariosTareas] = useState([]);
  const [usuariosCanton, setUsuariosCanton] = useState([]);
  const [usuarioPatrocinio,setusuarioPatrocinio] = useState([])

  const [selectedUser, setSelectedUser] = useState(null);
  const [select2,setselect2] = useState(null)
  const [select3,setselect3] = useState(null)

  const [selectcanton,setselectcanton] = useState()

  const [imagen, setImagen] = useState(null);
  const [tituloEvento,settituloEvento] = useState("")
  const [fecha,setfecha] = useState('')
  const [hora,sethora] = useState('')
  const [duracion,setduracion] = useState('')
  const [ubicacion,setubicacion]=useState('')
  const [descripcion,setdescripcion] = useState('')
  const [organizacion,setorganizacion] = useState('')
  const [Email,setEmail] = useState('')

  //funcion de la imagen
function handleFileChange(e) {
  const file = e.target.files[0];
  if (file) {
    setImagen(file);
  }
}
// useEffect de categorias
  useEffect(() => {
    async function recuperarDatos() {
      const datos = await llamadosCateegorias.GetCategorias();
      setUsuariosTareas(datos);
    }
    recuperarDatos();
  }, []);
// useEffect de canton
  useEffect(() => {
    async function recuperarDatosCanton() {
      const datosCanton = await llamadosCanton.GetCantones();
      setUsuariosCanton(datosCanton);
    }
    recuperarDatosCanton();
  }, []);
// useEffect de patrocinadores
  useEffect(() => {
    async function recuperarDatosPatrocinadores() {
      const datosPatrocinadores = await llamadosPatrocinio.GetPatrocinadores();
      setusuarioPatrocinio(datosPatrocinadores);
    }
    recuperarDatosPatrocinadores();
  }, []);
  // funcion de categorias
  const selectinput = (e) => {
    const selectedId = parseInt(e.target.value);
    setSelectedUser(selectedId);
    // No se llena ningún input
  };
 // funcion de canton
  const selectinput2 = (e) => {
    const usuariosCanton = parseInt(e.target.value);
    setselect2(usuariosCanton);
    // No se llena ningún input
  };
// funcion de patrocinador
  const selectinput3 = (e) => {
    const usuarioPatrocinio = parseInt(e.target.value);
    setselect3(usuarioPatrocinio);
    // No se llena ningún input
  };

  function inputTituloEvento(evento) {
    settituloEvento(evento.target.value)
  }
  function inputfecha(evento) {
    setfecha(evento.target.value)
  }
  function inputHora(evento) {
    sethora(evento.target.value)
  }
  function InputDuracion(evento) {
    setduracion(evento.target.value)
  }
  function inputubicacion(evento) {
    setubicacion(evento.target.value)
  }
  function inputDescripcion(evento) {
    setdescripcion(evento.target.value)
  }
  function inputOrganizacion(evento) {
    setorganizacion(evento.target.value)
  }
  function inputEmail(evento) {
    setEmail(evento.target.value)
  }

  function agregarEvento() {
    if (!tituloEvento.trim() || !fecha.trim() || !hora.trim() || !duracion.trim() || !ubicacion.trim() || !descripcion.trim() || !organizacion.trim() || !Email.trim() ) {
        Swal.fire({
          title: "ingrese los datos",
          icon: "error",
          draggable: true
        });
  
      } else { /* post a la tabla de auth_user */
        llamdosEvento.PostEventos(tituloEvento,fecha,hora,duracion,ubicacion,descripcion,organizacion,Email)
  }

}
  return (
    
    <div id='contenedorFOR'>
      <br />
     <div className="event-form-container">
      <h1>Crear un nuevo evento</h1>
      <p>Completa el formulario con los detalles de tu evento para compartirlo con la comunidad.</p>
      
      <div>
        <section className="form-section">
          <h2>Título del evento</h2>
          <div className="form-group">
            <input value={tituloEvento} onChange={inputTituloEvento} type="text" name="title" placeholder="Ingresa el título del evento" required/>
          </div>
        </section>

        <section className="form-section">
          <div className="form-row">
            <div className="form-group">
             
            <label>Selecciona una categoria:</label>
            <select value={selectedUser} onChange={selectinput}>
              <option value="">-- Selecciona una categorias --</option>
              {usuariosTareas.map((categorias) => (
              <option key={categorias.id} value={categorias.id}>
                  {categorias.nombre} 
              </option>
              ))}
            </select>

            <label>Selecciona un canton:</label>
            <select value={selectcanton} onChange={selectinput2}>
              <option value="">-- Selecciona un canton --</option>
              {usuariosCanton.map((canton) => (
              <option key={canton.id} value={canton.id}>
                  {canton.nombre} 
              </option>
              ))}
            </select>
            
            <label>Selecciona un Patrocinador:</label>
            <select value={selectcanton} onChange={selectinput3}>
              <option value="">-- Selecciona un Patrocinador --</option>
              {usuarioPatrocinio.map((patrocinadores) => (
                <option key={patrocinadores.id} value={patrocinadores.id}>
                  {patrocinadores.nombre}
                </option>
              ))}
            </select>

            </div>

            <div className="form-group">
              <label>Fecha del evento</label>
              <input value={fecha} onChange={inputfecha} type="date" name="date" required/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Hora</label>
              <input value={hora} onChange={inputHora} type="time"name="time"required/>
            </div>

            <div className="form-group">
              <label>Duración (horas)</label>
              <input value={duracion} onChange={InputDuracion} type="number" name="duration" min="1" required/>
            </div>
          </div>

          <div className="form-group">
            <label>Ubicación</label>
            <input value={ubicacion} onChange={inputubicacion} type="text" name="location"placeholder="Ingresa la ubicación" required/>
          </div>
        </section>

        <section className="form-section">
          <h3>Descripción</h3>
          <div className="form-group">
            <textarea value={descripcion} onChange={inputDescripcion} name="description" placeholder="Describe tu evento..." rows="4" required/>
          </div>

          <div className="form-group">
            <label>Imagen del evento</label>
            <input onChange={handleFileChange} type="file" name="image" accept="image/*"/>
          </div>

        </section>

        <section className="form-section">
          <h3>Organizador</h3>
          <div className="form-group">
            <input value={organizacion} onChange={inputOrganizacion} type="text" name="organizerName"placeholder="Tu nombre o de tu organización" required/>
          </div>

          <div className="form-group">
            <input value={Email} onChange={inputEmail} type="email"name="organizerEmail"placeholder="Email de contacto"required/>
          </div>
        </section>

        <button onClick={agregarEvento} type="submit" className="submit-button">Agregar evento</button>
      </div>
    </div>
    </div>

  )
}

export default FormEvento