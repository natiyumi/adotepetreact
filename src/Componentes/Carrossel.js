import React, { useState, useRef, useEffect } from 'react';
import './Carrossel.css';

const Carrossel = ({ imagens }) => {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const carrosselRef = useRef(null);

  useEffect(() => {
    const larguraItem = carrosselRef.current?.children[0]?.clientWidth || 0;
    if (carrosselRef.current) {
      carrosselRef.current.style.transform = `translateX(-${indiceAtual * larguraItem}px)`;
    }
  }, [indiceAtual, imagens.length]);

  const handleProximo = () => {
    setIndiceAtual((prevIndex) => (prevIndex + 1) % imagens.length);
  };

  const handleAnterior = () => {
    setIndiceAtual((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="carrossel-container">
      <div className="carrossel" ref={carrosselRef}>
        {imagens.map((imagem, index) => (
          <div className="carrossel-item" key={index}>
            <img src={imagem} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carrossel-prev" onClick={handleAnterior}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="carrossel-next" onClick={handleProximo}>
      <i className="fas fa-chevron-right"></i>   
      </button>
    </div>
  );
};

export default Carrossel;

