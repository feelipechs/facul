import Navbar from "../../components/Navbar";
import { Link, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate]);

  // const handleLogout = () => {
  //   localStorage.removeItem("auth");
  //   navigate("/");
  // };

  return (
    <>
      <Navbar />
      <Container className="text-center">
        <h1>Bem-vindo à Gestão de Veículos</h1>
        <p>Gerencie seus veículos de forma eficiente e prática!</p>

        <div className="d-flex justify-content-center gap-3 mt-3">
          <Link to="/veiculos" style={{ width: "250px" }}>
            <Button variant="primary" size="sm" className="mt-3 w-100">
              Cadastrar Veículo
            </Button>
          </Link>

          <Link to="/manutencao" style={{ width: "250px" }}>
            <Button variant="danger" size="sm" className="mt-3 w-100">
              Solicitar Manutenção
            </Button>
          </Link>
        </div>

        {/* <Button variant="secondary" size="lg" className="mt-4" onClick={handleLogout}>
          Sair
        </Button> */}
      </Container>
    </>
  );
};

export default Home;
