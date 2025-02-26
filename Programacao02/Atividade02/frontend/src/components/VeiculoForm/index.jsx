/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const VeiculoForm = ({ onSubmit }) => {
  const [veiculo, setVeiculo] = useState({
    modelo: "",
    marca: "",
    ano: "",
  });

  const [errors, setErrors] = useState({
    modelo: "",
    marca: "",
    ano: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVeiculo({ ...veiculo, [name]: value });
  };

  const validate = () => {
    let validationErrors = {};
    
    if (!veiculo.modelo) validationErrors.modelo = "O modelo é obrigatório";
    if (!veiculo.marca) validationErrors.marca = "A marca é obrigatória";
    if (!veiculo.ano) validationErrors.ano = "O ano do veículo é obrigatório";
    else if (isNaN(veiculo.ano) || veiculo.ano < 1886 || veiculo.ano > new Date().getFullYear()) {
      validationErrors.ano = "Ano inválido";
    }

    setErrors(validationErrors);
    
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      alert("Formulário validado com sucesso!");
      setVeiculo({ modelo: "", marca: "", ano: "" });
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mt-4">Cadastro de Veículo</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="formVeiculoName"
            >
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                name="modelo"
                value={veiculo.modelo}
                onChange={handleChange}
              />
              {errors.modelo && <div className="text-danger">{errors.modelo}</div>}
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formVeiculoType"
            >
              <Form.Label>Fabricante</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                name="marca"
                value={veiculo.marca}
                onChange={handleChange}
              />
              {errors.marca && <div className="text-danger">{errors.marca}</div>}
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formVeiculoYear"
            >
              <Form.Label>Ano do Veículo</Form.Label>
              <Form.Control
                type="number"
                placeholder="..."
                name="ano"
                value={veiculo.ano}
                onChange={handleChange}
              />
              {errors.ano && <div className="text-danger">{errors.ano}</div>}
            </Form.Group>

            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default VeiculoForm;
