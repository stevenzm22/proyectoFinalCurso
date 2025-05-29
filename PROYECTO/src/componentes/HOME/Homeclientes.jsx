import React from 'react'
import "../HOME/HomeStyleClientes.css"

function Homeclientes() {
  return (
    <div>

        <div id='contenedorTitulosHome'>
            <h1>Descubre eventos de tu ciudad</h1>
            <h3>Conecta con tu comunidad a través de eventos informativos, deportivos y culturales.</h3>
        </div>

        <div id="contenedorContenedores">
        <div class="contenedorImagen" id="imagen1"></div>
        <div class="contenedorImagen" id="imagen2"></div>
        <div id="contenedorTexto">
            <h3>¿Por qué crear un evento?</h3>
            <p>Organizar eventos es una excelente manera de conectar con la comunidad...</p>
        
        </div>
        <div class="contenedorImagen" id="imagen3"></div>
        <div class="contenedorImagen" id="imagen4"></div>

        </div>
        
<br />
    <div id="contenedorTexto2">

        <div class="punto-seccion">
            <h2> <strong>Conecta con tu comunidad</strong></h2> <br />
           <p> Crea espacios para que las personas se conozcan y compartan intereses comunes.</p>
        </div>

        <div class="punto-seccion">
            <h2><strong>Comparte información valiosa</strong> </h2><br/>
         <p>   Difunde conocimientos y concientiza sobre temas importantes para la ciudadanía.</p>
        </div>

        <div class="punto-seccion">
            <h2><strong>Promueve el deporte y la salud</strong> </h2><br/>
         <p>   Fomenta la actividad física y el bienestar a través de eventos deportivos.</p>
        </div>

        <div class="punto-seccion">
            <h2><strong>Impulsa la cultura local</strong></h2><br/>
         <p>   Da visibilidad a artistas y más.</p>
        </div>
    </div>
        
        
    </div>
  )
}

export default Homeclientes