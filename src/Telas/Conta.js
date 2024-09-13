import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Conta.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const Conta = () => {
  const navigate = useNavigate();

  return (
    <div className= "Conta">
        <div className="header">
            <button className="back-button" onClick={() => navigate("/")}>
                <i className="fas fa-chevron-left"></i> {/* Ícone de meia seta */}
            </button>
        
            <div className="title2">
                <h2>Sua Conta</h2>
            </div>

        </div>

        <div className="icon-container">
            <FontAwesomeIcon icon={faPaw} className="paw-icon" />
        </div>

        <div className="form-container">
            <form className="login-form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Digite seu email" />
            
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" placeholder="Digite sua senha" />
            
                <button type="submit" onClick={() => navigate("/")}>Entrar</button>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
  );
};

export default Conta;
