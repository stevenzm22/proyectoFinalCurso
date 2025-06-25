import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TESTPAG from '../pages/TESTPAG';
import LOGIN from '../pages/LOGIN';
import REGISTER from '../pages/REGISTER';
import HOMECLIENTE from '../pages/HOMECLIENTE';
import EVENTO from '../pages/EVENTO';
import SobreNosotros from '../pages/SobreNosotros';
import ContactosPag from '../pages/ContactosPag';

import RutasPrivadas from '../rutas/Privada'

import HomeAdmin from '../pages/HomeAdmin';
import CrudEventoPag from '../pages/CrudEventoPag';
import PerfilPag from '../pages/PerfilPag';
import CrudSugerenciasPag from '../pages/CRUD/CrudSugerenciasPag';
import CrudCantonesPag from '../pages/CRUD/CrudCantonesPag';
import CrudCategorias from '../pages/CRUD/CrudCategorias';
import CrudComentariosPag from '../pages/CRUD/CrudComentariosPag';
import CrudEmpleados from '../pages/CRUD/CrudEmpleados';
import CrudPatrocinadoresPag from '../pages/CRUD/CrudPatrocinadoresPag';
import CrudUsuariosPag from '../pages/CRUD/CrudUsuariosPag';
import EventoMostrarPag from '../pages/EventoMostrarPag';
import SaberMasEvento from '../pages/SaberMasEvento';
import MostarUsuarios from '../pages/MostarUsuarios';

function Rutas() {

  return (
    <div>
      <Router>
        <Routes>
      
                     <Route path="test" element={<TESTPAG/>}/> 
                    <Route path="Register" element={<REGISTER/>}/>
                    <Route path="Login" element={<LOGIN/>}/>
                    <Route path="/" element={<HOMECLIENTE/>}/>
                    <Route path="Evento" element={<EVENTO/>}/>
                    <Route path="sobreNosotros" element={<SobreNosotros/>}/>
                    <Route path="Contactenos" element={<ContactosPag/>}/>
                    <Route path="admin" element={<HomeAdmin/>}/>
                    <Route path="Perfil" element={<PerfilPag/>}/>
                    <Route path="eventospubli" element={<EventoMostrarPag/>}/>
                    <Route path="saberEvento" element={<SaberMasEvento/>}/>
                    <Route path="usuarios" element={<MostarUsuarios/>}/>


                  {/*///////////////// RutasCRUDS/////////////////////// */}
                  

                    <Route path="CrudEvento" element={<CrudEventoPag/>}/>
                    <Route path="FormSugerencias" element={<CrudSugerenciasPag/>}/>
                    <Route path="Formcantones" element={<CrudCantonesPag/>}/>
                    <Route path="Formcategorias" element={<CrudCategorias/>}/>
                    <Route path="formComentarios" element={<CrudComentariosPag/>}/>
                    <Route path="FormEmpleados" element={<CrudEmpleados/>}/>
                    <Route path="FormPatrocinadores" element={<CrudPatrocinadoresPag/>}/>
                    <Route path="FormUsuario" element={<CrudUsuariosPag/>}/>




                                   
        </Routes>
      </Router>
    </div>
  );
}
export default Rutas