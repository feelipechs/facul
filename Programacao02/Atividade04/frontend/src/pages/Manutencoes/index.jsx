import React from 'react';
import ManutencaoForm from '../../components/ManutencaoForm';
import ManutencaoList from '../../components/ManutencaoList';
import useManutencoes from '../../hooks/useManutencoes';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Manutencoes = () => {
  const { manutencoes, handleAddManutencao, handleDeleteManutencao, handleUpdateManutencao, handleEditManutencao, editingManutencao } = useManutencoes();

  const handleFormSubmit = (manutencaoData) => {
    if (editingManutencao) {
      handleUpdateManutencao(editingManutencao.id, manutencaoData);
    } else {
      handleAddManutencao(manutencaoData);
    }
  };

  return (
    <Container>
      <Link to="/" className="text-decoration-none">
        <i className="bi bi-arrow-left"></i> Voltar
      </Link>
      <ManutencaoForm 
        onSubmit={handleFormSubmit} 
        manutencao={editingManutencao}
      />
      <ManutencaoList 
        manutencoes={manutencoes} 
        onDelete={handleDeleteManutencao} 
        onEdit={handleEditManutencao}
      />
    </Container>
  );
};

export default Manutencoes;
