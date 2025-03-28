// /* eslint-disable react/prop-types */
// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import axios from "axios";

// const VeiculoForm = ({ onSubmit }) => {
//   const [veiculo, setVeiculo] = useState({
//     modelo: "",
//     marca: "",
//     ano: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVeiculo({ ...veiculo, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/veiculos",
//         veiculo
//       );

//       console.log("Veículo cadastrado com sucesso:", response.data);
//       setVeiculo({ modelo: "", marca: "", ano: "" });
//     } catch (error) {
//       console.error("Erro na requisição:", error);
//     }
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col md={6}>
//           <h2 className="text-center mt-4">Cadastro de Veículo</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group
//               className="mb-3"
//               controlId="formVeiculoName"
//             >
//               <Form.Label>Modelo</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="..."
//                 name="modelo"
//                 value={veiculo.modelo}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group
//               className="mb-3"
//               controlId="formVeiculoType"
//             >
//               <Form.Label>Fabricante</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="..."
//                 name="marca"
//                 value={veiculo.marca}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group
//               className="mb-3"
//               controlId="formVeiculoYear"
//             >
//               <Form.Label>Ano do Veículo</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="..."
//                 name="ano"
//                 value={veiculo.ano}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Cadastrar
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default VeiculoForm;


/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const VeiculoForm = ({ onSubmit, veiculo }) => {
  const [formData, setFormData] = useState({
    modelo: '',
    marca: '',
    ano: ''
  });

  useEffect(() => {
    if (veiculo) {
      setFormData({
        modelo: veiculo.modelo,
        marca: veiculo.marca,
        ano: veiculo.ano
      });
    }
  }, [veiculo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ modelo: '', marca: '', ano: '' }); // Limpar o formulário após envio
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mt-4">{veiculo ? 'Editar Veículo' : 'Cadastro de Veículo'}</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formVeiculoName">
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Modelo"
                name="modelo"
                value={formData.modelo}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formVeiculoType">
              <Form.Label>Fabricante</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fabricante"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formVeiculoYear">
              <Form.Label>Ano do Veículo</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ano"
                name="ano"
                value={formData.ano}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {veiculo ? 'Atualizar' : 'Cadastrar'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default VeiculoForm;
