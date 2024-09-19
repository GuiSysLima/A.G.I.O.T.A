// pages/agiotas/delete/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchAgiotaById, deleteAgiota } from '../../../utils/agiota/api';

const DeleteAgiota = () => {
  const [agiota, setAgiota] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const loadAgiota = async () => {
        try {
          const data = await fetchAgiotaById(id);
          setAgiota(data);
        } catch (error) {
          console.error('Erro ao carregar agiota:', error);
        }
      };
      loadAgiota();
    }
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteAgiota(id);
      router.push('/agiotas');
    } catch (error) {
      console.error('Erro ao excluir agiota:', error);
    }
  };

  const handleCancel = () => {
    router.push(`/agiotas/${id}`);
  };

  if (!agiota) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Confirmar Exclusão</h1>
      <p>Tem certeza de que deseja excluir o agiota com ID {agiota.id}?</p>
      <p><strong>Nome:</strong> {agiota.nome}</p>
      <p><strong>Taxa Média:</strong> {agiota.taxaMedia}</p>
      <button onClick={handleDelete}>Excluir</button>
      <button onClick={handleCancel}>Cancelar</button>
    </div>
  );
};

export default DeleteAgiota;
