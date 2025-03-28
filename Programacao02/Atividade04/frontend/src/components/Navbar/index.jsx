import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary">
      <Container>
        <BootstrapNavbar.Brand href="#home">
          Atividade 04
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Sobre</Nav.Link>
            <NavDropdown title="Opções" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Entrar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cadastrar
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Configurações
              </NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
