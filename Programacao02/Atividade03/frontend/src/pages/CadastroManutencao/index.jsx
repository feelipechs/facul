import React, { useState, useEffect } from "react";
import { Form, Button, Table, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CadastroManutencao = () => {
  const [veiculo, setVeiculo] = useState("");
  const [dataManutencao, setDataManutencao] = useState("");
  const [tipoServico, setTipoServico] = useState("");
  const [manutencoes, setManutencoes] = useState([]);
  const [errors, setErrors] = useState({});
  const [editingManutencao, setEditingManutencao] = useState(null);

  useEffect(() => {
    const storedManutencoes = JSON.parse(localStorage.getItem("manutencoes")) || [];
    setManutencoes(storedManutencoes);
  }, []);

  const validate = () => {
    let validationErrors = {};
    if (!veiculo) validationErrors.veiculo = "O veículo é obrigatório";
    if (!dataManutencao) validationErrors.dataManutencao = "A data é obrigatória";
    if (!tipoServico) validationErrors.tipoServico = "O tipo de serviço é obrigatório";
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (editingManutencao) {
      const updatedManutencoes = manutencoes.map((m) =>
        m.id === editingManutencao.id
          ? { ...editingManutencao, veiculo, dataManutencao, tipoServico }
          : m
      );
      setManutencoes(updatedManutencoes);
      localStorage.setItem("manutencoes", JSON.stringify(updatedManutencoes));
      setEditingManutencao(null);
    } else {
      const newManutencao = {
        id: Date.now(),
        veiculo,
        dataManutencao,
        tipoServico,
      };
      const newManutencoes = [...manutencoes, newManutencao];
      setManutencoes(newManutencoes);
      localStorage.setItem("manutencoes", JSON.stringify(newManutencoes));
    }

    setVeiculo("");
    setDataManutencao("");
    setTipoServico("");
  };

  const handleEdit = (manutencaoToEdit) => {
    setVeiculo(manutencaoToEdit.veiculo);
    setDataManutencao(manutencaoToEdit.dataManutencao);
    setTipoServico(manutencaoToEdit.tipoServico);
    setEditingManutencao(manutencaoToEdit);
  };

  const handleDelete = (id) => {
    const filteredManutencoes = manutencoes.filter((m) => m.id !== id);
    setManutencoes(filteredManutencoes);
    localStorage.setItem("manutencoes", JSON.stringify(filteredManutencoes));
  };

  return (
    <Container className="mt-5">
      <Link to="/" className="text-decoration-none">
        <i className="bi bi-arrow-left"></i> Voltar
      </Link>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>{editingManutencao ? "Editar Manutenção" : "Cadastro de Manutenção"}</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formVeiculo">
              <Form.Label>Veículo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome do veículo ou placa"
                value={veiculo}
                onChange={(e) => setVeiculo(e.target.value)}
              />
              {errors.veiculo && <div className="text-danger">{errors.veiculo}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDataManutencao">
              <Form.Label>Data da Manutenção</Form.Label>
              <Form.Control
                type="date"
                value={dataManutencao}
                onChange={(e) => setDataManutencao(e.target.value)}
              />
              {errors.dataManutencao && <div className="text-danger">{errors.dataManutencao}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTipoServico">
              <Form.Label>Tipo de Serviço</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Troca de óleo"
                value={tipoServico}
                onChange={(e) => setTipoServico(e.target.value)}
              />
              {errors.tipoServico && <div className="text-danger">{errors.tipoServico}</div>}
            </Form.Group>

            <Button variant="primary" type="submit">
              {editingManutencao ? "Salvar alterações" : "Cadastrar Manutenção"}
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>
          <h3>Lista de Manutenções</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Veículo</th>
                <th>Data</th>
                <th>Tipo de Serviço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {manutencoes.map((manutencao, index) => (
                <tr key={manutencao.id}>
                  <td>{index + 1}</td>
                  <td>{manutencao.veiculo}</td>
                  <td>{manutencao.dataManutencao}</td>
                  <td>{manutencao.tipoServico}</td>
                  <td>
                    <Button variant="warning" size="sm" onClick={() => handleEdit(manutencao)}>
                      Editar
                    </Button>{" "}
                    <Button variant="danger" size="sm" onClick={() => handleDelete(manutencao.id)}>
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default CadastroManutencao;
