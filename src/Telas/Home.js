import { useState } from 'react';
import PetCard from '../Componentes/PetCard';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const pets = [
    { nome: 'Rex', sexo: 'M', imagem: 'https://plus.unsplash.com/premium_photo-1664371206019-a82ba8d7c2e2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { nome: 'Mia', sexo: 'F', imagem: 'https://images.unsplash.com/photo-1501820488136-72669149e0d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { nome: 'Bobby', sexo: 'M', imagem: 'https://images.unsplash.com/photo-1526526431900-88eb525f1e4a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ];

  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  }

  return (
    <div className="Home">
      <div className="header">
        <button className="hamburger" onClick={ToggleMode}>
          &#9776;
        </button>
        <b className="titulo">AondePet</b>
        <img
          src="https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagem redonda"
          className="round-image"
        />
      </div>

      <nav className={`menu ${active ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/conta">Sua Conta</Link></li>
          <li><Link to="/informacoes-pet">Informações do Pet</Link></li>
        </ul>
      </nav>

      <div className="search-container">
        <input type="text" className="search-input" placeholder="Buscar..." />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="buttons-container">
        <button className="filter-button">Cachorros</button>
        <button className="filter-button">Gatos</button>
        <button className="filter-button">Outros</button>
      </div>

      <div className="title">
        <h2>Pets</h2>
      </div>

      <div className="cards-container">
        {pets.map((pet, index) => (
          <PetCard key={index} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default Home;