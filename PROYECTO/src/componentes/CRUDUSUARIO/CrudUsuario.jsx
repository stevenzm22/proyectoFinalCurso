import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import llamdosUsuarios from "../../services/Usuarios"
import Swal from "sweetalert2";
import "../../componentes/CRUDUSUARIO/CrudUserStyle.css"
import llamadosRol from "../../services/UserGroups"
import llamadosRolUsuarios from "../../services/roles"

function CrudUsuario() {

 const navigate = useNavigate()

 const [usuarios,setusuarios]=useState([])
 const [roles,setroles] = useState([])
 const [rolesUsuarios,setRolesUsuarios] = useState([])

  useEffect(() => {

      async  function mostarUsuario() {
          const datos= await llamdosUsuarios.GetUser()
          const rol = await  llamadosRol.GetUserGroups()
          const rolesUsuarios =  await llamadosRolUsuarios.GetRoles()

        
  
          setusuarios(datos)
          setroles(rol)
          setRolesUsuarios(rolesUsuarios)
      }
  
      mostarUsuario()
    }, []); 



 async function Editar(id) {
  console.log(id);
  
   console.log(roles);
  const opcionesHTML = rolesUsuarios.map(rol => `<option value="${rol.id}">${rol.name}</option>`).join('');


  const { value: formValues } = await Swal.fire({
    title: "Editar Rol",
    html: `
      <select id="swal-select" class="swal2-input">
        ${opcionesHTML}
      </select>
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [document.getElementById("swal-select").value];
    }
  });
  console.log("Actualizando usuario:", id, "con grupo:", formValues[0]);
  if (formValues) {
    const prueba = roles.find(rol => rol.user === id)
    console.log(prueba.id);
    
    await llamadosRol.UpdateUserGroups(prueba.id, formValues[0]);
    
    console.log(prueba.id);
    
    Swal.fire("Rol actualizado correctamente");
    location.reload();
  }


  }  

   /////// Funcion Eliminar /////////////////////

  async function Eliminar(id) {
    const result = await Swal.fire({
          title: "¿Seguro que desea eliminar?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, eliminar!"
      });
    
      if (result.isConfirmed) {
        const datosEliminados= await llamdosUsuarios.DeleteUser(id); 
      
          await Swal.fire({
              title: "¡Eliminado!",
              text: "Eliminado correctamente.",
              icon: "success"
              
          });
          location.reload();
          
      }
    
    }
  return (
    <div id='divUsuario'>

  <h1 id='usuarioTiulo'>Usuarios</h1>
  <br />
    <table id='tabla'>

        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cédula</th>
                <th>Rol</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
        </thead>
        <tbody>
         {usuarios.map((Usuario, index) => (
            <tr key={index}>
                
                <td><strong>{Usuario.username}</strong></td>
                <td><strong>{Usuario.last_name}</strong></td>
                <td><strong>{Usuario.last_name}</strong></td>
                <td><strong>{Usuario.rol}</strong></td>
                <td><button onClick={e=>Editar(Usuario.id)}>Editar</button></td>
                <td><button onClick={e=>Eliminar(Usuario.id)}>Eliminar</button></td>
                
            </tr>
        ))} 
        </tbody>
        </table>

    </div>
  )
}

export default CrudUsuario