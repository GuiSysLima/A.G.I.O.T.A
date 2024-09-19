// pages/clientes/create.js
import { useState } from 'react';
import { createCliente } from '../../utils/cliente/api';

const CreateCliente = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createCliente({ nome, email });
      alert('Cliente criado com sucesso!');
      setNome('');
      setEmail('');
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      alert('Erro ao criar cliente.');
    }
  };

  return (
    <div>
      <h1>Criar Cliente</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Criar Cliente</button>
      </form>
    </div>
  );
};

export default CreateCliente;
