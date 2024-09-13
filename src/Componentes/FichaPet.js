import React from 'react';
import './FichaPet.css';

const FichaPet = ({ pet }) => {
  return (
    <div className="ficha-pet-container">
      <div className="codigo">
        Código: {pet.codigo}
      </div>
      <div className="ficha">
        <p><strong>Animal:</strong> {pet.animal}</p>
        <p><strong>Raça:</strong> {pet.raca}</p>
        <p><strong>Sexo:</strong> {pet.sexo === 'M' ? 'Masculino' : 'Feminino'}</p>
        <p><strong>Porte:</strong> {pet.porte}</p>
        <p><strong>Peso:</strong> {pet.peso}</p>
        <p><strong>Idade:</strong> {pet.idade}</p>
        <p><strong>Localidade:</strong> {pet.localidade}</p>
      </div>
    </div>
  );
};

export default FichaPet;
