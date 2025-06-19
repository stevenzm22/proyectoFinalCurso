
import Cookies from 'js-cookie';

const token = Cookies.get("access_token");


async function GetNotificaciones() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/notificaciones/', {
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

async function PostNotificaciones(fecha,id_user) {
    try {
        const userData = {fecha,id_user};

        const response = await fetch('http://127.0.0.1:8000/api/notificaciones/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Error posting user');
        }

        return await response.json();
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

async function UpdateNotificaciones(nombre,descripcion,precio,cantidad,categorias,id) {
    try {
        const userData = {nombre,descripcion,precio,cantidad,categorias,id };

        const response = await fetch(`http://127.0.0.1:8000/api/notificaciones/${id}`, {
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

async function DeleteProductos(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/notificaciones/${id}`, {
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


export default {GetNotificaciones,PostNotificaciones,UpdateNotificaciones,DeleteProductos};