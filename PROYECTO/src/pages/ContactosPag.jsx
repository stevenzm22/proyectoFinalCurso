import React from 'react'
import ContactosOficial from '../componentes/CONTACTOS/ContactosOficial'
import Navclientes from '../componentes/NAV/Navclientes'
import Footer from '../componentes/FOOTER/Footer'
import Sidebar from '../componentes/SIDEBAR/Sidebar'


function ContactosPag() {
  return (
    <div>
      <Navclientes/>
      <ContactosOficial/>
      <Footer/>

    </div>
  )
}

export default ContactosPag