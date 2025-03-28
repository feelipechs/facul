const API_URL = "http://localhost:3000/veiculos";

export const getVeiculos = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addVeiculo = async (veiculo) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(veiculo),
  });
  return response.json();
};

export const deleteVeiculo = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

export const updateVeiculo = async (id, updatedVeiculo) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedVeiculo),
  });

  if (response.ok) {
    return response.json();
  } else {
    const errorData = await response.json();
    console.error("Erro ao atualizar veículo:", errorData);
    throw new Error(`Erro ao atualizar veículo: ${errorData.message || response.statusText}`);
  }
};


// export const updateVeiculo = async (id, updatedVeiculo) => {
//   const response = await fetch(`${API_URL}/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedVeiculo),
//   });

//   if (response.ok) {
//     return response.json();
//   } else {
//     throw new Error("Erro ao atualizar veículo");
//   }
// };
