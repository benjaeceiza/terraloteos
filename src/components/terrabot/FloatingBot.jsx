import { useState } from 'react';
import './FloatingBot.css'; 
import terraBotIcon from '../../assets/logos/terra-bot-copia.png'; // Asegurate de tener esta imagen en tu proyecto

const FloatingBot = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-bot-container">
      {isOpen && (
        <div className="bot-message-bubble">
          {/* Botón de la cruz para cerrar */}
          <button className="close-message-btn" onClick={() => setIsOpen(false)}>
            &times;
          </button>
          
          <p>
            ¡Hola! Soy <strong>Terry</strong> 🦊. Si querés una atención personalizada, comunicate conmigo por WhatsApp.
          </p>
          <a 
            href="https://wa.me/5492657604317"
            target="_blank" 
            rel="noopener noreferrer" 
            className="wts-link"
          >
            Ir a WhatsApp
          </a>
        </div>
      )}
      
      <button className="bot-button" onClick={toggleMessage}>
        <img 
          src={terraBotIcon} 
          alt="Terrabot" 
          className="bot-icon" 
        />
      </button>
    </div>
  );
};

export default FloatingBot;