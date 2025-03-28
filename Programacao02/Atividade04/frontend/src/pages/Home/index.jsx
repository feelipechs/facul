import Navbar from "../../components/Navbar";
import { Link, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useEffect } from "react";

const Home = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const isAuthenticated = localStorage.getItem("auth");
  //   if (!isAuthenticated) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  return (
    <>
      <Navbar />
      <Container className="text-center">
        <h1>Bem-vindo à Gestão de Veículos</h1>
        <p>Gerencie seus veículos de forma eficiente e prática!</p>

        {/* <Link to="/veiculos">
          <Button variant="primary" size="lg" className="mt-3">
            Acessar
          </Button>
        </Link> */}
        <div className="d-flex justify-content-center gap-3 mt-3">
          <Link to="/veiculos" style={{ width: "250px" }}>
            <Button variant="primary" size="sm" className="mt-3 w-100">
              Cadastrar Veículo
            </Button>
          </Link>

          <Link to="/manutencoes" style={{ width: "250px" }}>
            <Button variant="danger" size="sm" className="mt-3 w-100">
              Solicitar Manutenção
            </Button>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default Home;
