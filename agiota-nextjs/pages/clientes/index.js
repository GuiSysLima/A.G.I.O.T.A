// pages/clientes/index.js
import { fetchClienteById } from '../../utils/cliente/api';
import { useEffect, useState } from 'react';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const loadClientes = async () => {
      try {
        const data = await fetchClienteById();
        setClientes(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadClientes();
  }, []);

  return (
    <div>
      <h1>Clientes</h1>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id}>{cliente.nome} - {cliente.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Clientes;
