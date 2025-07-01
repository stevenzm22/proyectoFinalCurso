
import Cookies from 'js-cookie';

const token = Cookies.get("access_token");


async function GetInscripciones() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/inscripciones/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
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

function getFormattedDateTime() {
   const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`; // ✅ Solo la fecha
}

async function PostInscripciones(evento,usuario) {
    try {
        const userData = {
            fecha_inscripcion: `${getFormattedDateTime()}`,
            evento,
            usuario
        };

        const response = await fetch('http://127.0.0.1:8000/api/inscripciones/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
             const errorDetails = await response.json(); // ⬅️ esto te da la causa exacta
            console.error("Detalles del error del backend:", errorDetails);
            throw new Error(JSON.stringify(errorDetails)); 
        }

        return await response.json();
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

async function UpdateInscripciones(nombre,descripcion,precio,cantidad,categorias,id) {
    try {
        const userData = {nombre,descripcion,precio,cantidad,categorias,id };

        const response = await fetch(`http://127.0.0.1:8000/api/inscripciones/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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

async function DeleteInscripciones(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/inscripciones/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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


export default { GetInscripciones,PostInscripciones,UpdateInscripciones,DeleteInscripciones};