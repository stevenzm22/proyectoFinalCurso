import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../FOOTER/FooterStyle.css"


function Footer() {
  return (
    <div id="footerContainer">
  <div id="footerTop">
    <h2>Conecta CR</h2>
    <p>Conectando comunidades a través de eventos</p>
  </div>

  <div id="footerLinks">
    <Link className="link" to="/">Preguntas Frecuentes</Link>
    <Link className="link" to="/sobreNosotros">Acerca de</Link>
    <Link className="link" to="/Contactenos">Contacto</Link>
  </div>

  <div id="footerBottom">
    <p>2025 Conecta CR. Todos los derechos reservados.</p>
  </div>
</div>
  )
}

export default Footer