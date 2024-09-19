// pages/agiotas/[id].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchAgiotaById } from '../../utils/agiota/api';
import Link from 'next/link';

const AgiotaDetails = () => {
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

  if (!agiota) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Detalhes do Agiota</h1>
      <p><strong>ID:</strong> {agiota.id}</p>
      <p><strong>Nome:</strong> {agiota.nome}</p>
      <p><strong>Taxa Média:</strong> {agiota.taxaMedia}</p>
      
      {/* Link para a página de edição */}
      <Link href={`/agiotas/edit/${agiota.id}`}>
        Editar Agiota
      </Link>

      {/* Link para a página de exclusão */}
      <Link href={`/agiotas/delete/${agiota.id}`}>
        Excluir Agiota
      </Link>

      {/* Link para a lista de agiotas */}
      <Link href="/agiotas">
        Voltar para a lista de agiotas
      </Link>
    </div>
  );
};

export default AgiotaDetails;