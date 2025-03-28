// /* eslint-disable react/prop-types */
// import React, { useState, useEffect } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import axios from "axios";

// const ManutencaoForm = ({ onSubmit }) => {
//   // const [manutencao, setManutencao] = useState({
//   const [manutencao, setManutencao] = useState({
//     veiculo: "",
//     tipo: "",
//     data: "",
//   });
  
//   // Efeito para atualizar os dados quando a manutenção for editada
//   useEffect(() => {
//     if (manutencao) {
//       setManutencao({
//         veiculo: manutencao.veiculo,
//         tipo: manutencao.tipo,
//         data: manutencao.data ? new Date(manutencao.data).toISOString().slice(0, 10) : "",
//       });
//     }
//   }, [manutencao]); // Vai ser chamado toda vez que 'manutencao' mudar

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setManutencao({ ...manutencao, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/manutencoes",
//         manutencao
//       );

//       console.log("Manutenção cadastrada com sucesso:", response.data);
//       setManutencao({ veiculo: "", tipo: "", data: "" });
//     } catch (error) {
//       console.error("Erro na requisição:", error);
//     }
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col md={6}>
//           <h2 className="text-center mt-4">Cadastro de Manutenção</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group
//               className="mb-3"
//               controlId="formManutencaoName"
//             >
//               <Form.Label>Veículo</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="..."
//                 name="veiculo"
//                 value={manutencao.veiculo}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group
//               className="mb-3"
//               controlId="formManutencaoType"
//             >
//               <Form.Label>Tipo de Serviço</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="..."
//                 name="tipo"
//                 value={manutencao.tipo}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group
//               className="mb-3"
//               controlId="formVeiculoYear"
//             >
//               <Form.Label>Data da Manutenção</Form.Label>
//               <Form.Control
//                 type="date"
//                 placeholder="..."
//                 name="data"
//                 value={manutencao.data}
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

// export default ManutencaoForm;

/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const ManutencaoForm = ({ onSubmit, manutencao }) => {
  const [formData, setFormData] = useState({
    veiculo: "",
    tipo: "",
    data: "",
  });

  useEffect(() => {
    if (manutencao) {
      setFormData({
        veiculo: manutencao.veiculo,
        tipo: manutencao.tipo,
        data: manutencao.data ? new Date(manutencao.data).toISOString().slice(0, 10) : "",
      });
    }
  }, [manutencao]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (manutencao) {
        const response = await axios.put(
          `http://localhost:3000/manutencoes/${manutencao.id}`,
          formData
        );
        console.log("Manutenção atualizada com sucesso:", response.data);
      } else {
        const response = await axios.post(
          "http://localhost:3000/manutencoes",
          formData
        );
        console.log("Manutenção cadastrada com sucesso:", response.data);
      }

      setFormData({ veiculo: "", tipo: "", data: "" });
      onSubmit();
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mt-4">{manutencao ? "Editar Manutenção" : "Cadastro de Manutenção"}</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formManutencaoName">
              <Form.Label>Veículo</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                name="veiculo"
                value={formData.veiculo}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formManutencaoType">
              <Form.Label>Tipo de Serviço</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formVeiculoYear">
              <Form.Label>Data da Manutenção</Form.Label>
              <Form.Control
                type="date"
                name="data"
                value={formData.data}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {manutencao ? "Atualizar" : "Cadastrar"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ManutencaoForm;
