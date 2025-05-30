import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TESTPAG from '../pages/TESTPAG';
import Login from '../componentes/LOGIN/Login';
import Register from '../componentes/REGISTER/Register';
import HOMECLIENTE from '../pages/HOMECLIENTE';
import EVENTO from '../pages/EVENTO';
import CRUDEVENTO from '../componentes/HOME/CRUDEVENTO';
import SobreNosotros from '../pages/SobreNosotros';
import ContactosPag from '../pages/ContactosPag';



function Rutas() {

  return (
    <div>
      <Router>
        <Routes>
      
                        

                    <Route path="test" element={<TESTPAG/>}/>
                    <Route path="Register" element={<Register/>}/>
                    <Route path="Login" element={<Login/>}/>
                    <Route path="/" element={<HOMECLIENTE/>}/>
                    <Route path="Evento" element={<EVENTO/>}/>
                    <Route path="CrudEvento" element={<CRUDEVENTO/>}/>
                    <Route path="sobreNosotros" element={<SobreNosotros/>}/>
                     <Route path="Contactenos" element={<ContactosPag/>}/>
                               
        </Routes>
      </Router>
    </div>
  );
}

export default Rutas