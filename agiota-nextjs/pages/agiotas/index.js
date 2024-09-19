// pages/agiotas/index.js
import { useEffect, useState } from 'react';
import { fetchAgiotas } from '../../utils/agiota/api';

const Agiotas = () => {
  const [agiotas, setAgiotas] = useState([]);

  useEffect(() => {
    const loadAgiotas = async () => {
      try {
        const data = await fetchAgiotas();
        setAgiotas(data);
      } catch (error) {
        console.error('Erro ao carregar agiotas:', error);
      }
    };
    loadAgiotas();
  }, []);

  return (
    <div>
      <h1>Agiotas</h1>
      <ul>
        {agiotas.map(agiota => (
          <li key={agiota.id}>
            {agiota.nome} - {agiota.taxaMedia}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Agiotas;
