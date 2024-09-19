// pages/clientes/[id].js
import { useEffect, useState } from 'react';
import { fetchClienteById } from '../../utils/cliente/api';

const ClientePage = ({ clienteData }) => {
  const [cliente, setCliente] = useState(clienteData || null);

  useEffect(() => {
    if (!clienteData) {
      // Fetch data if not provided
      const fetchCliente = async () => {
        try {
          const data = await fetchClienteById(clienteData.id);
          setCliente(data);
        } catch (error) {
          console.error('Erro ao buscar cliente:', error);
        }
      };
      fetchCliente();
    }
  }, [clienteData]);

  if (!cliente) return <p>Loading...</p>;

  return (
    <div>
      <h1>Cliente</h1>
      <p>ID: {cliente.id}</p>
      <p>Nome: {cliente.nome}</p>
      <p>Email: {cliente.email}</p>
    </div>
  );
};

// This function gets called at build time for each page
export async function getServerSideProps(context) {
  const { id } = context.params;
  try {
    const clienteData = await fetchClienteById(id);
    return { props: { clienteData } };
  } catch (error) {
    return { notFound: true };
  }
}

export default ClientePage;
