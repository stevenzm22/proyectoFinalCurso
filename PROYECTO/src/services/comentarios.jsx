async function GetComentarios() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/comentarios/', {
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

async function PostComentarios(nombre,texto,fecha) {
    try {
        const userData = {nombre,texto,fecha};

        const response = await fetch('http://127.0.0.1:8000/api/comentarios/', {
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

async function UpdateComentarios(nombre,descripcion,precio,cantidad,categorias,id) {
    try {
        const userData = {nombre,descripcion,precio,cantidad,categorias,id };

        const response = await fetch(`http://127.0.0.1:8000/api/comentarios/${id}`, {
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

async function DeleteComentarios(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/comentarios/${id}`, {
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


export default { GetComentarios, PostComentarios, UpdateComentarios,DeleteComentarios}