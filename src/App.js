import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Atualize para Routes
import Home from './Telas/Home';
import InformacoesPet from './Telas/InformacoesPet';
import Conta from './Telas/Conta';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informacoes-pet" element={<InformacoesPet />} />
        <Route path="/conta" element={<Conta />} />
      </Routes>
    </Router>
  );
}

export default App;
