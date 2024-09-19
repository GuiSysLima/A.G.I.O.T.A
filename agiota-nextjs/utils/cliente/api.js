// utils/api.js
const API_URL = 'http://localhost:8080/api/clientes';

export const fetchClienteById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar cliente');
  }
  return response.json();
};

export async function createCliente(cliente) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cliente),
  });
  if (!response.ok) {
    throw new Error('Failed to create cliente');
  }
  return response.json();
}

export const updateCliente = async (id, cliente) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cliente),
  });
  if (!response.ok) {
    throw new Error('Erro ao atualizar cliente');
  }
  return response.json();
};

export async function deleteCliente(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete cliente');
  }
}
