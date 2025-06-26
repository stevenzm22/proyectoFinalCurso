import React from 'react'
import Homeclientes from '../componentes/HOME/Homeclientes'
import Sidebar from '../componentes/SIDEBAR/Sidebar'
import Footer from '../componentes/FOOTER/Footer'

function HomeAdmin() {
  return (
    <div>
       
        <Sidebar/>
        <br />
         <Homeclientes/>
         <Footer/>
    </div>
  )
}

export default HomeAdmin