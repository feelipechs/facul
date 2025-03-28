import React from 'react';
import VeiculoForm from '../../components/VeiculoForm';
import VeiculoList from '../../components/VeiculoList';
import useVeiculos from '../../hooks/useVeiculos';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Veiculos = () => {
  const { veiculos, handleAddVeiculo, handleDeleteVeiculo, handleUpdateVeiculo, handleEditVeiculo, editingVeiculo } = useVeiculos();

  const handleFormSubmit = (veiculoData) => {
    if (editingVeiculo) {
      handleUpdateVeiculo(editingVeiculo.id, veiculoData);
    } else {
      handleAddVeiculo(veiculoData);
    }
  };

  return (
    <Container>
      <Link to="/" className="text-decoration-none">
        <i className="bi bi-arrow-left"></i> Voltar
      </Link>
      <VeiculoForm 
        onSubmit={handleFormSubmit} 
        veiculo={editingVeiculo}
      />
      <VeiculoList 
        veiculos={veiculos} 
        onDelete={handleDeleteVeiculo} 
        onEdit={handleEditVeiculo}
      />
    </Container>
  );
};

export default Veiculos;
