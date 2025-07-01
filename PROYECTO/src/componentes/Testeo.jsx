import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../componentes/Test.css"

export const Testeo = () => {
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
        },
        (error) => {
        console.log('FAILED...', error.text);
        },
      );
  };
  return (
      <div id='padre'>
          <div id='ContainerFormContact'>
              <form id='Formcontact' ref={form} onSubmit={sendEmail}>
                  <div id="hijo">
                      <label id='LabelContact'>Name</label><br />
                      <input id='InputContactName' type="text" name="user_name" placeholder='Ingrese su nombre'/>
                      <label id='LabelContact'>Email</label><br />
                      <input id='InputContactEmail' type="email" name="user_email" placeholder='Ingrese su correo electronico'/>
                  </div>
                  <label id='LabelContact'>Message</label><br />
                  <textarea name="mensaje" placeholder='Mensaje'/>
                  <input type="submit" value="Send" id='BtnSubmit' />
              </form>
              <div className="wrap">
                <button className="button">Submit</button>
            </div>
          </div>
      </div>
  );
};
export default Testeo