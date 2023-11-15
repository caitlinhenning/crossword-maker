// In src/Square.js:
import React, { useState } from 'react';

function Square({ mode, isSelected, setSelectedSquare, row, col, letter, handleKeyPress }) {
  const [isClicked, setIsClicked] = useState(false);
  const [number, setNumber] = useState(null);

  const handleClick = () => {
    if (mode === 'fill') {
      setIsClicked(!isClicked);
    } else if (mode === 'number') {
      setNumber(prompt("Enter a number"));
    } else if (mode === 'type') {
      setSelectedSquare([row, col]);
    }
  };

  
  const handleKeyDown = (event) => {
    handleKeyPress(event);
  };

  return (
    <div 
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0} // to make the div focusable
      style={{
        position: 'relative',
        width: '50px', 
        height: '50px', 
        border: '1px solid black', 
        backgroundColor: isClicked ? 'black' : (isSelected && mode === 'type') ? 'lightblue' : 'white',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        outline: 'none',
        fontSize: '35px',
        fontWeight: '500'
      }}
    >
      {number && <div style={{position: 'absolute', top: '0', left: '0', fontSize: '15px'}}>{number}</div>}
      {letter}
    </div>
  );
}

export default Square;