/* eslint-disable react/prop-types */
import React from "react";
import { Table, Button, Container } from "react-bootstrap";

const VeiculoList = ({ veiculos, onDelete, onEdit }) => {
  return (
    <Container>
      <h2 className="text-center mt-4">Lista de Veículos</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Modelo</th>
            <th>Fabricante</th>
            <th>Ano</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((veiculo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{veiculo.modelo}</td>
              <td>{veiculo.marca}</td>
              <td>{veiculo.ano}</td>
              <td>
                {/* <Button
                  variant="danger"
                  onClick={() => onDelete(veiculo.id)}
                >
                  Excluir
                </Button> */}
                <Button
                  variant="warning"
                  size="sm"
                  // onClick={() => onEdit(manutencao.id)}
                  onClick={() => {
                    console.log('Editando veículo com ID:', veiculo.id);
                    onEdit(veiculo.id);
                  }}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(veiculo.id)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default VeiculoList;
