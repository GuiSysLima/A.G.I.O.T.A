// pages/clientes/[id]/edit.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchClienteById, updateCliente } from '../../../utils/cliente/api';

const EditCliente = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cliente, setCliente] = useState({ nome: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const loadCliente = async () => {
        try {
          const data = await fetchClienteById(id);
          setCliente(data);
        } catch (err) {
          setError('Failed to load client');
        } finally {
          setLoading(false);
        }
      };

      loadCliente();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCliente(id, cliente);
      router.push(`/clientes/${id}`);
    } catch (err) {
      setError('Failed to update client');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Edit Client</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Name:</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={cliente.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={cliente.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditCliente;
