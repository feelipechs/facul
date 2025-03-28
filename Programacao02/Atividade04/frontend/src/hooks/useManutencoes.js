import { useState, useEffect } from 'react';
import { getManutencao, addManutencao, deleteManutencao, updateManutencao } from '../services/ManutencaoService';

const useManutencoes = () => {
  const [ manutencoes, setManutencoes ] = useState([]);
  const [editingManutencao, setEditingManutencao] = useState(null);

  useEffect(() => {
    fetchManutencoes();
  }, []);

  const fetchManutencoes = async () => {
    const data = await getManutencao();
    setManutencoes(data);
  };

  const handleAddManutencao = async (veiculo) => {
    await addManutencao(veiculo);
    fetchManutencoes();
  };

  const handleDeleteManutencao = async (id) => {
    await deleteManutencao(id);
    fetchManutencoes();
  };

  const handleUpdateManutencao = (id, updatedManutencao) => {
    setManutencoes((prevManutencoes) =>
      prevManutencoes.map((manutencao) =>
        manutencao.id === id ? { ...manutencao, ...updatedManutencao } : manutencao
      )
    );
  };

  const handleEditManutencao = (id) => {
    const manutencao = manutencoes.find((m) => m.id === id);
    console.log('Manutenção para editar:', manutencao); 
    setEditingManutencao(manutencao);
  };

  return {
    manutencoes,
    editingManutencao,
    handleAddManutencao,
    handleDeleteManutencao,
    handleUpdateManutencao,
    handleEditManutencao,
  };
};

export default useManutencoes;
