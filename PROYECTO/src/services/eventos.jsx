
import Cookies from 'js-cookie';

const token = Cookies.get("access_token");

async function GetEventos() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/eventos/', {
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

async function PostEventos(tituloEvento,fechaEvento,hora,duracion,ubicacion,descripcion,organizador,email,cantones_id,categorias_id,patrocinadores_id,imagen) {
    try {
        const formData = new FormData();
        formData.append('tituloEvento', tituloEvento);
        formData.append('fechaEvento', fechaEvento);
        formData.append('hora', hora);
        formData.append('duracion', duracion);
        formData.append('ubicacion', ubicacion);
        formData.append('descripcion', descripcion);
        formData.append('organizador', organizador);
        formData.append('email', email);
        formData.append('cantones',parseInt( cantones_id));
        formData.append('categorias',parseInt (categorias_id));
        formData.append('patrocinadores',parseInt (patrocinadores_id));
        formData.append('imagen',imagen); 

        const response = await fetch('http://127.0.0.1:8000/api/eventos/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body:formData
        });

        if (!response.ok) {
            const errorData = await response.json();  // 👈 MOSTRAR el error exacto del backend
            console.error('Error del backend:', errorData);
            throw new Error('Error posting user');
        }

        const resp = await response.json();
        console.log(resp);
        return resp;
        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

async function UpdateEventos(nombre,descripcion,precio,cantidad,categorias,id) {
    try {
        const userData = {nombre,descripcion,precio,cantidad,categorias,id };

        const response = await fetch(`http://127.0.0.1:8000/api/eventos/${id}`, {
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

async function DeleteEventos(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/eventos/${id}`, {
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


export default {GetEventos,PostEventos,UpdateEventos,DeleteEventos};