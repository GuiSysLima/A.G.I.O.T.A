// pages/agiotas/[id].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchAgiotaById, updateAgiota } from '../../../utils/agiota/api';

const EditAgiota = () => {
  const [nome, setNome] = useState('');
  const [taxaMedia, setTaxaMedia] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const loadAgiota = async () => {
        try {
          const data = await fetchAgiotaById(id);
          setNome(data.nome);
          setTaxaMedia(data.taxaMedia);
        } catch (error) {
          console.error('Erro ao carregar agiota:', error);
        }
      };
      loadAgiota();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAgiota(id, { nome, taxaMedia: parseFloat(taxaMedia) });
      router.push('/agiotas');
    } catch (error) {
      console.error('Erro ao atualizar agiota:', error);
    }
  };

  return (
    <div>
      <h1>Editar Agiota</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          Taxa Média:
          <input type="number" step="0.01" value={taxaMedia} onChange={(e) => setTaxaMedia(e.target.value)} />
        </label>
        <button type="submit">Atualizar Agiota</button>
      </form>
    </div>
  );
};

export default EditAgiota;
