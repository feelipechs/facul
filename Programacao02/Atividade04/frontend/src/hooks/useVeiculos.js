// import { useState, useEffect } from 'react';
// import { getVeiculos, addVeiculo, deleteVeiculo, updateVeiculo } from '../services/VeiculoService';

// const useVeiculos = () => {
//   const [ veiculos, setVeiculos ] = useState([]);
//   const [ editingVeiculo, setEditingVeiculo ] = useState(null);

//   useEffect(() => {
//     fetchVeiculos();
//   }, []);

//   const fetchVeiculos = async () => {
//     const data = await getVeiculos();
//     setVeiculos(data);
//   };

//   const handleAddVeiculo = async (veiculo) => {
//     await addVeiculo(veiculo);
//     fetchVeiculos();
//   };

//   const handleDeleteVeiculo = async (id) => {
//     await deleteVeiculo(id);
//     fetchVeiculos();
//   };

//   // Função para editar uma manutenção
//   const handleUpdateVeiculo = (id, updatedVeiculo) => {
//     setVeiculos((prevVeiculos) =>
//       prevVeiculos.map((veiculo) =>
//         veiculo.id === id ? { ...veiculo, ...updatedVeiculo } : veiculo
//       )
//     );
//   };

//   // Função para editar os dados de uma manutenção
//   const handleEditVeiculo = (id) => {
//     const veiculo = veiculos.find((v) => v.id === id);
//     console.log('Veículo para editar:', veiculo); 
//     setEditingVeiculo(veiculo); // Preenche o estado com os dados da manutenção para edição
//   };

//   return {
//     veiculos,
//     editingVeiculo,
//     handleAddVeiculo,
//     handleDeleteVeiculo,
//     handleUpdateVeiculo,
//     handleEditVeiculo,
//   };
// };

// export default useVeiculos;


import { useState, useEffect } from 'react';
import { getVeiculos, addVeiculo, deleteVeiculo, updateVeiculo } from '../services/VeiculoService'; // Supondo que updateVeiculo seja a função para atualização

const useVeiculos = () => {
  const [veiculos, setVeiculos] = useState([]);
  const [editingVeiculo, setEditingVeiculo] = useState(null);

  useEffect(() => {
    fetchVeiculos();
  }, []);

  const fetchVeiculos = async () => {
    const data = await getVeiculos();
    setVeiculos(data);
  };

  const handleAddVeiculo = async (veiculo) => {
    await addVeiculo(veiculo);
    fetchVeiculos(); // Atualiza a lista após adicionar
  };

  const handleDeleteVeiculo = async (id) => {
    await deleteVeiculo(id);
    fetchVeiculos(); // Atualiza a lista após excluir
  };

  const handleUpdateVeiculo = async (id, updatedVeiculo) => {
    try {
      console.log('Atualizando veículo com ID:', id, 'Dados:', updatedVeiculo);
  
      const response = await updateVeiculo(id, updatedVeiculo);
  
      if (response) {
        setVeiculos((prevVeiculos) =>
          prevVeiculos.map((veiculo) =>
            veiculo.id === id ? { ...veiculo, ...updatedVeiculo } : veiculo
          )
        );
        console.log('Veículo atualizado com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao atualizar veículo:', error);
    }
  };
  

  const handleEditVeiculo = (id) => {
    const veiculo = veiculos.find((v) => v.id === id);
    setEditingVeiculo(veiculo);
  };

  return {
    veiculos,
    editingVeiculo,
    handleAddVeiculo,
    handleDeleteVeiculo,
    handleUpdateVeiculo,
    handleEditVeiculo,
  };
};

export default useVeiculos;
