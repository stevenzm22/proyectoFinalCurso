import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TESTPAG from '../pages/TESTPAG';







function Rutas() {

  return (
    <div>
      <Router>
        <Routes>
      
                        

                    <Route path="test" element={<TESTPAG/>}/>
                   

                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Rutas