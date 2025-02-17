import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Veiculos from "./pages/Veiculos";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veiculos" element={<Veiculos />} />
      </Routes>
    </Router>
  )
}

export default Rotas;
