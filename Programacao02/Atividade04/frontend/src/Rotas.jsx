import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Veiculos from "./pages/Veiculos";
import Manutencoes from "./pages/Manutencoes";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/veiculos" element={<Veiculos />} />
        <Route path="/manutencoes" element={<Manutencoes />} />
      </Routes>
    </Router>
  )
}

export default Rotas;
