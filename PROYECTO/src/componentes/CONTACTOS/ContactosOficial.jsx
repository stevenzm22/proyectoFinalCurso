import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdAttachEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import "../CONTACTOS/ContactosStyle.css"
import Swal from "sweetalert2";

function ContactosOficial() {
   const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm('service_46ldfpo', 'template_jdmqn6d', form.current, {
        publicKey: '6r4alrcta6vJwFfsd',
    })
    .then(
        () => {
        console.log('SUCCESS!');
        Swal.fire({
            title: "Mensaje  enviado",
            icon: "success",
          });
        },
        (error) => {
        console.log('FAILED...', error.text);
        },
      );
  };
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
      <div id='ContainerFormContact'>
        <h1 id='h1-contactos'>Déjanos tu mensaje</h1>
              <form id='Formcontact' ref={form} onSubmit={sendEmail}>
                  <div id="hijo">
                      <label id='LabelContact'>Nombre</label><br />
                      <input id='InputContactName' type="text" name="user_name" placeholder='Ingrese su nombre'/>
                      <label id='LabelContact'>Email</label><br />
                      <input id='InputContactEmail' type="email" name="user_email" placeholder='Ingrese su correo electronico'/>
                  </div>
                  <label id='LabelContact'>Mensaje</label><br />
                  <textarea name="mensaje" placeholder='Mensaje'/>
                  <input type="submit" value="Send" id='BtnSubmit' />
              </form>
          </div>

    </div>

    
  )
}

export default ContactosOficial