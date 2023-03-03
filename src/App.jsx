import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import imagen1 from'./assets/img1.jpg'
import imagen2 from'./assets/img2.jpg'
import imagen3 from'./assets/img3.jpg'
import imagen4 from'./assets/img4.jpg'

const frases = [
  {
    texto: "La vida es un viaje, no un destino.",
    autor: "Ralph Waldo Emerson",
    imagen: imagen1,
  },
  {
    texto: "No busques errores, busca soluciones.",
    autor: "Henry Ford",
    imagen: imagen2,
  },
  {
    texto: "No es lo que te pasa, sino cómo reaccionas a ello lo que importa.",
    autor: "Epicteto",
    imagen: imagen3,
  },
];

const Frase = () => {
  const [fraseAleatoria, setFraseAleatoria] = useState(frases[0]);

  const cambiarFraseAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    setFraseAleatoria(frases[indiceAleatorio]);
  };

  return (
    <div className="frase-container">
    <img src={fraseAleatoria.imagen} alt="Imagen" />
    <div className="frase-text-container">
      <h3>{fraseAleatoria.texto}</h3>
      <p>{fraseAleatoria.autor}</p>
      <button onClick={cambiarFraseAleatoria}>Cambiar frase</button>
    </div>
  </div>
  );
};

export default Frase;