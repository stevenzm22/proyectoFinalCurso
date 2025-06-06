import React, { useEffect, useState } from 'react';
import "../CRUDEVENTO/FormEvento.css"
import llamadosCateegorias from '../../services/categorias ';

function FormEvento() {
  
  const [usuariosTareas, setUsuariosTareas] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    async function recuperarDatos() {
      const datos = await llamadosCateegorias.GetCategorias();
      setUsuariosTareas(datos);
    }
    recuperarDatos();
  }, []);

  const selectinput = (e) => {
    const selectedId = parseInt(e.target.value);
    setSelectedUser(selectedId);
    // No se llena ningún input
  };

  
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
            <input type="text" name="title" placeholder="Ingresa el título del evento" required/>
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
            </div>

            <div className="form-group">
              <label>Fecha del evento</label>
              <input type="date" name="date" required/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Hora</label>
              <input type="time"name="time"required/>
            </div>

            <div className="form-group">
              <label>Duración (horas)</label>
              <input type="number" name="duration" min="1" required/>
            </div>
          </div>

          <div className="form-group">
            <label>Ubicación</label>
            <input type="text" name="location"placeholder="Ingresa la ubicación" required/>
          </div>
        </section>

        <section className="form-section">
          <h3>Descripción</h3>
          <div className="form-group">
            <textarea name="description" placeholder="Describe tu evento..." rows="4" required/>
          </div>

          <div className="form-group">
            <label>Imagen del evento</label>
            <input type="file" name="image" accept="image/*"/>
          </div>

        </section>

        <section className="form-section">
          <h3>Organizador</h3>
          <div className="form-group">
            <input type="text" name="organizerName"placeholder="Tu nombre o de tu organización" required/>
          </div>

          <div className="form-group">
            <input type="email"name="organizerEmail"placeholder="Email de contacto"required/>
          </div>
        </section>

        <button type="submit" className="submit-button">Agregar evento</button>
      </div>
    </div>
    </div>

  )
}

export default FormEvento