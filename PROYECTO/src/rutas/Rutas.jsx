import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TESTPAG from '../pages/TESTPAG';
import LOGIN from '../pages/LOGIN';
import REGISTER from '../pages/REGISTER';
import HOMECLIENTE from '../pages/HOMECLIENTE';
import EVENTO from '../pages/EVENTO';
import CRUDEVENTO from '../componentes/HOME/CRUDEVENTO';
import SobreNosotros from '../pages/SobreNosotros';
import ContactosPag from '../pages/ContactosPag';

import RutasPrivadas from '../rutas/Privada'
import HomeAdmin from '../pages/HomeAdmin';
import CrudEventoPag from '../pages/CrudEventoPag';
import PerfilPag from '../pages/PerfilPag';

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
                    <Route path="CrudEvento" element={<CrudEventoPag/>}/>
                    <Route path="sobreNosotros" element={<SobreNosotros/>}/>
                    <Route path="Contactenos" element={<ContactosPag/>}/>
                    <Route path="admin" element={<HomeAdmin/>}/>
                    <Route path="Perfil" element={<PerfilPag/>}/>
                                   
        </Routes>
      </Router>
    </div>
  );
}
export default Rutas