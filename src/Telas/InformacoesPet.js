import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InformacoesPet.css';
import Carrossel from '../Componentes/Carrossel';
import FichaPet from '../Componentes/FichaPet';

function InformacoesPet() {
    const navigate = useNavigate();
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
      setMode(!active);
    }

    const imagens = [
      'https://images.unsplash.com/photo-1526526431900-88eb525f1e4a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1501820488136-72669149e0d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1664371206019-a82ba8d7c2e2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // Adicione mais URLs de imagem conforme necessário
    ];

    const petExemplo = {
      codigo: '00000001',
      animal: 'Gato',
      raca: 'Persa',
      sexo: 'M',
      porte: 'Medio',
      peso: '5Kg',
      idade: '3 anos',
      localidade: 'São Paulo - São Paulo',
    };

    return (
      <div className="informacoes-pet">
        <div className="header">
  
          <button className="back-button" onClick={() => navigate("/")}>
            <i className="fas fa-chevron-left"></i> {/* Ícone de meia seta */}
          </button>
  
          <button className="hamburger1" onClick={ToggleMode}>
            &#9776;
          </button>
        </div>
  
        <nav className={`menu1 ${active ? "open" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/conta">Sua Conta</Link></li>
            <li><Link to="/informacoes-pet">Informações do Pet</Link></li>
          </ul>
        </nav>

        <div className="title1">
          <h1>Bobby</h1>
          <h2>Status: Perdido</h2>
        </div>

        <div className="carrossel-section">
          <Carrossel imagens={imagens} />
        </div>

        <FichaPet pet={petExemplo} />

        <div className="descricao-pet-container">
          <div className="descricao-titulo">
            Descrição
          </div>
          <div className="descricao-texto">
            Bobby é um gato carinhoso e brincalhão. Ele adora brincar com brinquedos e receber carinho. Seu temperamento é amigável e ele se dá bem com outros animais e pessoas. É um companheiro ideal para momentos de relaxamento e diversão.
          </div>
        </div>

        <div className="contato-pet-container">
          <div className="contato-titulo">
            Contato
          </div>
          <div className="contato-texto">
            <p><strong>Email:</strong> exemplo@petmail.com</p>
            <p><strong>Telefone:</strong> (11) 1234-5678</p>
          </div>
        </div>

      </div>
    );
  }
  
  export default InformacoesPet;