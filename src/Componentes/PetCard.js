import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para navegação
import './PetCard.css'; // Crie um arquivo CSS separado para estilos específicos

function PetCard({ pet }) {
    const [favorito, setFavorito] = useState(false);
    const navigate = useNavigate(); // Hook para navegação

    const handleCardClick = () => {
        // Navega para a página de InformacoesPet passando o ID do pet
        navigate(`/informacoes-pet`);
    };

    return (
      <div 
        className="pet-card" 
        onClick={handleCardClick}  // Adiciona onClick no card
        style={{ cursor: 'pointer' }} // Adiciona um cursor de "pointer" para indicar que é clicável
      >
        <img src={pet.imagem} alt={pet.nome} className="pet-image" />
        <div className="pet-info">
          <h2 className="pet-name">{pet.nome}</h2>
          <div className="pet-details">
            <span className="pet-sex">
              {pet.sexo === 'M' ? '♂' : '♀'}
            </span>
            <button 
              className={`favorite-button ${favorito ? 'selected' : ''}`} 
              onClick={(e) => {
                e.stopPropagation(); // Impede que o clique no botão de favorito acione o clique do card
                setFavorito(!favorito);
              }}
            >
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    );
}

export default PetCard;
