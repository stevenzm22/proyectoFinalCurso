import React, { useEffect, useState } from 'react';
import PostProductos from '../services/Usuarios';

function Test() {
  const [Username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [usuariosTareas, setUsuariosTareas] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  // Recuperar usuarios al cargar
  useEffect(() => {
    async function recuperarDatos() {
      const datos = await PostProductos.GetUser();
      setUsuariosTareas(datos);
    }
    recuperarDatos();
  }, []);

  // Handlers para inputs
  const inputUsername = (e) => setUsername(e.target.value);
  const inputNombre = (e) => setFirstName(e.target.value);
  const inputApellido = (e) => setLastName(e.target.value);
  const inputEmail = (e) => setEmail(e.target.value);
  const inputContrasena = (e) => setPassword(e.target.value);

  const handleSelectChange = (e) => {
    setSelectedUser(e.target.value);
    console.log("Usuario seleccionado:", e.target.value);
  };

  const registrar = async () => {
    await PostProductos.PostProductos(Username, email, password, first_name, last_name);
    alert('Datos guardados');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <div>
        <label>Username:</label>
        <input value={Username} onChange={inputUsername} type="text" />

        <label>Nombre:</label>
        <input value={first_name} onChange={inputNombre} type="text" />

        <label>Apellido:</label>
        <input value={last_name} onChange={inputApellido} type="text" />

        <label>Email:</label>
        <input value={email} onChange={inputEmail} type="email" />

        <label>Contraseña:</label>
        <input value={password} onChange={inputContrasena} type="password" />

        <button onClick={registrar}>Enviar</button>
      </div>

      <div >
        <label>Selecciona un usuario:</label>
        <select value={selectedUser} onChange={handleSelectChange}>
          <option value="">-- Selecciona un usuario --</option>
          {usuariosTareas.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username} ({user.email})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Test;