import React, { useEffect, useState } from 'react';
import './TypingEffect.css';

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isTyping) {
        setDisplayText((prevText) => text.substring(0, prevText.length + 1));
      } else {
        setDisplayText((prevText) => text.substring(0, prevText.length - 1));
      }

      if (displayText === text) {
        setIsTyping(false);
      } else if (displayText === '') {
        setIsTyping(true);
      }
    }, 100); // Ajuste a velocidade da digitação aqui (em milissegundos)

    return () => {
      clearInterval(timer);
    };
  }, [displayText, isTyping, text]);

  return (
    <div className="typing-effect">
      {displayText}
      <span style={{color: 'white'}} className={`typing-cursor ${isTyping ? 'blink' : ''}`}>&nbsp;</span>
    </div>
  );
};

export default TypingEffect;