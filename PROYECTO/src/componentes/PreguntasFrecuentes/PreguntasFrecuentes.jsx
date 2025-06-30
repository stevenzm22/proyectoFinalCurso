import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../PreguntasFrecuentes/PreguntaFrecuenteStyle.css";

const preguntasFrecuentes = [
  {
    pregunta: "¿Qué tipos de eventos cubre esta plataforma?",
    respuesta: "Nuestra plataforma incluye eventos políticos, informativos, deportivos, culturales y más, para mantenerte siempre actualizado.",
  },
  {
    pregunta: "¿Cómo puedo inscribirme en un evento?",
    respuesta: "Puedes registrarte directamente desde la sección del evento específico. Solo necesitas iniciar sesión y hacer clic en 'Inscribirme'.",
  },
  {
    pregunta: "¿Los eventos son gratuitos?",
    respuesta: "Por el momento los eventos serán gratuitos al público.",
  },
  {
    pregunta: "¿Qué hago si no puedo ver los detalles de un evento?",
    respuesta: "Revisa tu conexión a internet o intenta refrescar la página. Si el problema persiste, contáctanos.",
  },
];

function PreguntasFrecuentes() {
  const [activo, setActivo] = useState(null);

  const togglePregunta = (index) => {
    setActivo(activo === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <h2 className="faq-titulo">Preguntas Frecuentes sobre Eventos</h2>
        {preguntasFrecuentes.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-pregunta ${activo === index ? 'activa' : ''}`}
              onClick={() => togglePregunta(index)}
            >
              {item.pregunta}
            </div>
            {activo === index && (
              <div className="faq-respuesta">{item.respuesta}</div>
            )}
          </div>
        ))}
      </div>

      {/* Este enlace siempre visible */}
      <p className="faq-link-final">
        <Link to="/Contactenos">
          ¿Tienes preguntas? Estamos aquí para ayudarte.
        </Link>
      </p>
    </div>
  );
}

export default PreguntasFrecuentes;

