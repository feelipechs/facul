import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Veiculos from "./pages/CadastroVeiculos";
import CadastroManutencao from "./pages/CadastroManutencao";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/veiculos" element={<Veiculos />} />
        <Route path="/manutencao" element={<CadastroManutencao />} />
      </Routes>
    </Router>
  )
}

export default Rotas;
