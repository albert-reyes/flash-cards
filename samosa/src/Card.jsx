import React, { useState } from 'react';

function Card({ initialText, alternateText }) {
    const [text, setText] = useState(initialText);
  
    const handleClick = () => {
      setText(text === initialText ? alternateText : initialText);
    };
  
    return (
      <div className="card" onClick={handleClick}>
        <p>{text}</p>
      </div>
    );
  }
  
  export default Card;