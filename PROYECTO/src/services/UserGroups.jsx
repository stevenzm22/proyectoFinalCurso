async function GetUserGroups() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/user_roles/', {
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

async function PostUserGroups(user, group=2) {
    try {
        const userData = {
            user, 
            group
        };

        console.log(userData);
        

        const response = await fetch('http://127.0.0.1:8000/api/user_roles/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Error posting user');
        }

        const respuesta = await response.json();
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

async function UpdateUserGroups(id, group) {
    try {
        const userData = {
            group
        };

        console.log(userData, id);
        

        const response = await fetch(`http://127.0.0.1:8000/api/user_roles/${id}/`, {
            method: 'PATCH',
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

async function DeleteUserGroups(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/user_roles/${id}`, {
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


export default {GetUserGroups,PostUserGroups,UpdateUserGroups,DeleteUserGroups};