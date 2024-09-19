// pages/agiotas/create.js
import { useState } from 'react';
import { createAgiota } from '../../utils/agiota/api';
import { useRouter } from 'next/router';

const CreateAgiota = () => {
  const [nome, setNome] = useState('');
  const [taxaMedia, setTaxaMedia] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAgiota({ nome, taxaMedia: parseFloat(taxaMedia) });
      router.push('/agiotas');
    } catch (error) {
      console.error('Erro ao criar agiota:', error);
    }
  };

  return (
    <div>
      <h1>Criar Agiota</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          Taxa Média:
          <input type="number" step="0.01" value={taxaMedia} onChange={(e) => setTaxaMedia(e.target.value)} />
        </label>
        <button type="submit">Criar Agiota</button>
      </form>
    </div>
  );
};

export default CreateAgiota;
