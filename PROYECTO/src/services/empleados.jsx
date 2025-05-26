async function GetEmpleados() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/empleados/', {
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

async function PostEmpleados(nombre,apellido,email,id) {
    try {
        const userData = {nombre,apellido,email,id};

        const response = await fetch('http://127.0.0.1:8000/api/empleados/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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

async function UpdateEmpleados(nombre,apellido,email,id) {
    try {
        const userData = {nombre,apellido,email,id};

        const response = await fetch(`http://127.0.0.1:8000/api/empleados/${id}`, {
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

async function DeleteEmpleados(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/empleados/${id}`, {
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


export default {GetEmpleados,PostEmpleados,UpdateEmpleados,DeleteEmpleados};