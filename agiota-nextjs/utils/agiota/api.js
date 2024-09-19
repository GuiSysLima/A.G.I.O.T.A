// utils/api.js
const API_URL = 'http://localhost:8080/api/agiotas';

export const fetchAgiotas = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Erro ao buscar agiotas');
  }
  return response.json();
};

export const fetchAgiotaById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar agiota');
  }
  return response.json();
};

export const createAgiota = async (agiota) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(agiota),
  });
  if (!response.ok) {
    throw new Error('Erro ao criar agiota');
  }
  return response.json();
};

export const updateAgiota = async (id, agiota) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(agiota),
  });
  if (!response.ok) {
    throw new Error('Erro ao atualizar agiota');
  }
  return response.json();
};

export const deleteAgiota = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Erro ao deletar agiota');
  }
};
