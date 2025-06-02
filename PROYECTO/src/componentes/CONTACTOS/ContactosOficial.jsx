import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import "../CONTACTOS/ContactosStyle.css"

function ContactosOficial() {
  return (
    <div id='contenedor-contactos'>

       <div id='contenedortituloss'>
        <h1 id='h1-contactos'>Contactenos</h1>
        <h2 id='h2-contactos'>Estamos para ayudarte</h2>
        <p id='p-contactos'>Si tienes alguna pregunta, sugerencia o simplemente quieres saludarnos, no dudes en ponerte
           en contacto con nosotros.</p>
       </div>

       <div id='contenedor-contactos2'>
          <div id='email'>
            <MdAttachEmail />
            <span>Email:</span>
            <p>contacto@gmail.com</p>
            
          </div>
          <div id='phone'>
            <ImPhone />
            <span>Telefono:</span>
            <p>+506 62345678</p>
          </div>
         
       </div>

    </div>
  )
}

export default ContactosOficial