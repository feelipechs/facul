import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const CadastroVeiculos = () => {
  const [veiculo, setVeiculo] = useState({ modelo: "", marca: "", ano: "" });
  const [veiculos, setVeiculos] = useState([]);
  const [errors, setErrors] = useState({});
  const [editingVeiculo, setEditingVeiculo] = useState(null);

  useEffect(() => {
    const storedVeiculos = JSON.parse(localStorage.getItem("veiculos")) || [];
    setVeiculos(storedVeiculos);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVeiculo({ ...veiculo, [name]: value });
  };

  const validate = () => {
    let validationErrors = {};
    if (!veiculo.modelo) validationErrors.modelo = "O modelo é obrigatório";
    if (!veiculo.marca) validationErrors.marca = "A marca é obrigatória";
    if (!veiculo.ano || isNaN(veiculo.ano) || veiculo.ano < 1886 || veiculo.ano > new Date().getFullYear()) {
      validationErrors.ano = "Ano inválido";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    if (editingVeiculo) {
      const updatedVeiculos = veiculos.map(v => v.id === editingVeiculo.id ? { ...veiculo, id: v.id } : v);
      setVeiculos(updatedVeiculos);
      localStorage.setItem("veiculos", JSON.stringify(updatedVeiculos));
      setEditingVeiculo(null);
    } else {
      const newVeiculos = [...veiculos, { ...veiculo, id: Date.now() }];
      setVeiculos(newVeiculos);
      localStorage.setItem("veiculos", JSON.stringify(newVeiculos));
    }

    setVeiculo({ modelo: "", marca: "", ano: "" });
  };

  const handleDelete = (id) => {
    const filteredVeiculos = veiculos.filter((v) => v.id !== id);
    setVeiculos(filteredVeiculos);
    localStorage.setItem("veiculos", JSON.stringify(filteredVeiculos));
  };

  const handleEdit = (veiculoToEdit) => {
    setVeiculo({ modelo: veiculoToEdit.modelo, marca: veiculoToEdit.marca, ano: veiculoToEdit.ano });
    setEditingVeiculo(veiculoToEdit);
  };

  return (
    <Container className="mt-5">
      <Link to="/" className="text-decoration-none">
        <i className="bi bi-arrow-left"></i> Voltar
      </Link>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mt-4">{editingVeiculo ? "Editar Veículo" : "Cadastro de Veículo"}</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formVeiculoName">
              <Form.Label>Modelo</Form.Label>
              <Form.Control type="text" name="modelo" value={veiculo.modelo} onChange={handleChange} />
              {errors.modelo && <div className="text-danger">{errors.modelo}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formVeiculoType">
              <Form.Label>Fabricante</Form.Label>
              <Form.Control type="text" name="marca" value={veiculo.marca} onChange={handleChange} />
              {errors.marca && <div className="text-danger">{errors.marca}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formVeiculoYear">
              <Form.Label>Ano do Veículo</Form.Label>
              <Form.Control type="number" name="ano" value={veiculo.ano} onChange={handleChange} />
              {errors.ano && <div className="text-danger">{errors.ano}</div>}
            </Form.Group>

            <Button variant="primary" type="submit">{editingVeiculo ? "Salvar alterações" : "Cadastrar"}</Button>
          </Form>
        </Col>
      </Row>

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
            <tr key={veiculo.id}>
              <td>{index + 1}</td>
              <td>{veiculo.modelo}</td>
              <td>{veiculo.marca}</td>
              <td>{veiculo.ano}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(veiculo)}>
                  Editar
                </Button>{" "}
                <Button variant="danger" size="sm" onClick={() => handleDelete(veiculo.id)}>
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

export default CadastroVeiculos;
