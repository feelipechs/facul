/* eslint-disable react/prop-types */
import React from "react";
import { Table, Button, Container } from "react-bootstrap";

const ManutencaoList = ({ manutencoes, onDelete, onEdit }) => {
  return (
    <Container>
      <h2 className="text-center mt-4">Lista de Manutenções</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Veículo</th>
            <th>Tipo de Serviço</th>
            <th>Data de Manutenção</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {manutencoes.map((manutencao, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{manutencao.veiculo}</td>
              <td>{manutencao.tipo}</td>
              <td>{manutencao.data}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  // onClick={() => onEdit(manutencao.id)}
                  onClick={() => {
                    console.log('Editando manutenção com ID:', manutencao.id);
                    onEdit(manutencao.id);
                  }}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(manutencao.id)}
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

export default ManutencaoList;
