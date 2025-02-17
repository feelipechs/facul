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
        <Link to="/veiculos">
          <Button variant="primary" size="lg" className="mt-3">
            Acessar
          </Button>
        </Link>
      </Container>
    </>
  )
}

export default Home;
