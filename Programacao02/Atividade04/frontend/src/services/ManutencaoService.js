const API_URL = "http://localhost:3000/manutencoes";

export const getManutencao = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addManutencao = async (manutencao) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(manutencao),
  });
  return response.json();
};

export const deleteManutencao = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

export const updateManutencao = async (id, updatedManutencao) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedManutencao),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Erro ao atualizar manutenção");
  }
};