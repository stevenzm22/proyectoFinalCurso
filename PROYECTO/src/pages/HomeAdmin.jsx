import React from 'react'
import Homeclientes from '../componentes/HOME/Homeclientes'
import Sidebar from '../componentes/SIDEBAR/Sidebar'
import Footer from '../componentes/FOOTER/Footer'
import NavAmind from '../componentes/NAV/NavAmind'

function HomeAdmin() {
  return (
    <div>
       <NavAmind/>
        <Sidebar/>
        <br />
         <Homeclientes/>
         <Footer/>
    </div>
  )
}

export default HomeAdmin