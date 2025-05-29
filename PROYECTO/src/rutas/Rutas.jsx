import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TESTPAG from '../pages/TESTPAG';
import Login from '../componentes/LOGIN/Login';
import Register from '../componentes/REGISTER/Register';
import HOMECLIENTE from '../pages/HOMECLIENTE';







function Rutas() {

  return (
    <div>
      <Router>
        <Routes>
      
                        

                    <Route path="test" element={<TESTPAG/>}/>
                    <Route path="Register" element={<Register/>}/>
                    <Route path="Login" element={<Login/>}/>
                    <Route path="Homeclientes" element={<HOMECLIENTE/>}/>
                   

                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Rutas