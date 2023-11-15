import React, { useState } from 'react';
import Square from './Square';



function Grid({ mode, grid }) {
  const [letters, setLetters] = useState(Array(grid.length).fill(Array(grid[0].length).fill('')));

  const setLetter = (row, col, letter) => {
    const newLetters = letters.map((r, i) => r.map((c, j) => i === row && j === col ? letter : c));
    setLetters(newLetters);
  };

  const [selectedSquare, setSelectedSquare] = useState([0, 0]);


  const handleKeyPress = (event) => {
    let [row, col] = selectedSquare;
    if (mode === 'type') {
      if (event.key === 'Backspace' || event.key === 'Delete') {
        setLetter(row, col, '');
        if (col - 1 >= 0) {
          col = col - 1;
        } else if (row - 1 >= 0) {
          row = row - 1;
          col = grid[row].length - 1;
        } else {
          row = grid.length - 1;
          col = grid[row].length - 1; // wrap around to the end of the grid
        }
      } else if (event.key.match(/^[A-Za-z]$/)) {
        const newLetter = event.key.toUpperCase();
        setLetter(row, col, newLetter);
        if (col + 1 < grid[row].length) {
          col = col + 1;
        } else if (row + 1 < grid.length) {
          row = row + 1;
          col = 0;
        } else {
          row = 0;
          col = 0; // wrap around to the start of the grid
        }
      }
      setSelectedSquare([row, col]);
    }
  };

  return (
    <div className="d-flex flex-column" style={{border: '1px solid black'}}>
      {grid.map((row, i) => (
        <div key={i} className="d-flex">
          {row.map((col, j) => 
              <Square
              key={j}
              mode={mode}
              isSelected={i === selectedSquare[0] && j === selectedSquare[1]}
              setSelectedSquare={() => setSelectedSquare([i, j])}
              row={i}
              col={j}
              letter={letters[i][j]}
              handleKeyPress={handleKeyPress}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Grid;