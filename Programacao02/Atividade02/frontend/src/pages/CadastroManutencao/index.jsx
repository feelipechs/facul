import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CadastroManutencao = () => {
  const [veiculo, setVeiculo] = useState("");
  const [dataManutencao, setDataManutencao] = useState("");
  const [tipoServico, setTipoServico] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <div className="mt-5 d-flex justify-content-center align-items-center flex-column">
      <h2>Cadastro de Manutenção</h2>
      <Form style={{ width: "400px" }}>
        <Form.Group className="mb-3" controlId="formVeiculo">
          <Form.Label>Veículo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o nome do veículo ou placa"
            value={veiculo}
            onChange={(e) => setVeiculo(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDataManutencao">
          <Form.Label>Data da Manutenção</Form.Label>
          <Form.Control
            type="date"
            value={dataManutencao}
            onChange={(e) => setDataManutencao(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTipoServico">
          <Form.Label>Tipo de Serviço</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: Troca de óleo"
            value={tipoServico}
            onChange={(e) => setTipoServico(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Descreva o serviço realizado"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar Manutenção
        </Button>
      </Form>
    </div>
  );
};

export default CadastroManutencao;
