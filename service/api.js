const API_URL = 'https://6a2b3e5ab687a7d5cbc501a9.mockapi.io/materiais';

export async function getMateriais() {
  //Usando o fetch para integrar com a API
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Falha ao buscar materiais');
  }

  return response.json();
}

// POST - cadastra um novo material
export async function criarMaterial(material) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(material),
  });

  if (!response.ok) {
    throw new Error('Falha ao cadastrar material');
  }

  return response.json();
}