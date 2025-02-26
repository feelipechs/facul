import Navbar from "../../components/Navbar";
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Navbar />
      <Container className="text-center">
        <h1>Bem-vindo à Gestão de Veículos</h1>
        <p>Gerencie seus veículos de forma eficiente e prática!</p>

        {/* Botão para acessar a página de veículos */}
        <div className="d-flex justify-content-center gap-3 mt-3">
          <Link to="/veiculos" style={{ width: "250px" }}>
            <Button variant="primary" size="lg" className="mt-3 w-100">
              Cadastrar Veículo
            </Button>
          </Link>

          <Link to="/manutencao" style={{ width: "250px" }}>
            <Button variant="danger" size="lg" className="mt-3 w-100">
              Solicitar Manutenção
            </Button>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default Home;
