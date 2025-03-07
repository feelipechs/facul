import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary">
      <Container>
        <BootstrapNavbar.Brand href="#home">
          Atividade 01
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Sobre</Nav.Link>
            <NavDropdown title="Opções" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">
                Entrar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cadastrar
              </NavDropdown.Item> */}
              <NavDropdown.Item href="#action/3.2">
                Perfil
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Configurações
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="secondary" size="sm" className="ms-auto" onClick={handleLogout}>
            Sair
          </Button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
