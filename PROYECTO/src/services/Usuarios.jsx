/* const token = localStorage.getItem("token"); */

import Cookies from 'js-cookie';

const token = Cookies.get("access_token");

////////// Get ///////////////////////
 
async function GetUser() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/usuarios/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

////////////////// GET ID //////////////////////////////

async function GetUserid(id) {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/usuarios/'+id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}


/////////////////// POST //////////////////////////////

function getFormattedDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // meses van de 0 a 11
  const day = String(now.getDate()).padStart(2, '0');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

  // Simular microsegundos agregando ceros al final
  const microseconds = milliseconds + "000";

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${microseconds}`;
}


async function PostUser(password,username,first_name,last_name,email) {
    try {

        const userData2 = {
                    password,
                    last_login: null,
                    is_superuser: false,
                    username,
                    first_name,
                    last_name,
                    email,
                    is_staff: false,
                    is_active: true,
                    date_joined: `${getFormattedDateTime()}`
        };

        console.log(userData2);
        
        const res = await fetch("http://127.0.0.1:8000/api/usuarios/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData2),
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error("Backend error:", errorData);  // <-- esto ayuda muchísimo
            throw new Error("Error posting user");
        }

        const result = await res.json();
        console.log("Usuario creado:", result);
        } catch (error) {
        console.error("Error:", error.message);
        }
}

///////////////////////////// UPDATE //////////////////////////////

async function UpdateUser(nombre,descripcion,precio,cantidad,categorias,id) {
    try {
        const userData = {nombre,descripcion,precio,cantidad,categorias,id };

        const response = await fetch(`http://127.0.0.1:8000/api/usuarios/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`Error updating user with id ${id}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

///////////////////// DELETE /////////////////////////////////////

async function DeleteUser(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/usuarios/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

/////////////////////// POST APITOKEN ///////////////////////

async function PostApiToken(username, password) {
    try {

        const userData2 = {
                username: username,
                password: password
        };

        console.log(userData2);
        
        const res = await fetch("http://127.0.0.1:8000/api/login/", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                 /* "Authorization": `Bearer ${token}`  */
            },
            body: JSON.stringify(userData2),
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error("Backend error:", errorData);  // <-- esto ayuda muchísimo
            throw new Error("Error posting user");
        }

        const result = await res.json();
        console.log(result);
        
         return result;
        console.log("respuestas:", result);
        } catch (error) {
        console.error("Error:", error.message);
        }
}

export default {GetUser,GetUserid,PostUser,UpdateUser,DeleteUser,PostApiToken};