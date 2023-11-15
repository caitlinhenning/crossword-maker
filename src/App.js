// In src/App.js:
import React, { useState } from 'react';
import Grid from './Grid';

function App() {
  const [mode, setMode] = useState('fill'); // 'fill' or 'type'
  const [grid] = useState(Array(9).fill(Array(9).fill(''))); // 9x9 grid filled with empty strings

  return (
    <>
      <div className='d-flex flex-row justify-content-center align-items-center vh-100'>
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 p-3">
          <h1>Crossword Maker</h1>
          <div className='p-2'>
            <button onClick={() => setMode('fill')} className={`btn m-2 ${mode === 'fill' ? 'btn-primary' : 'btn-light'}`}>Fill Square</button>
            <button onClick={() => setMode('type')} className={`btn m-2 ${mode === 'type' ? 'btn-primary' : 'btn-light'}`}>Type</button>
            <button onClick={() => setMode('number')} className={`btn m-2 ${mode === 'number' ? 'btn-primary' : 'btn-light'}`}>Number</button>
          </div>
          <Grid mode={mode} grid={grid}/>
        </div>
          <div className="text-boxes-stack col-md-4 p-3" style={{height: '450px', overflowY: 'auto', marginTop: '100px'}}>
            <h2>ACROSS</h2>
            {Array(15).fill().map((_, i) => (
              <input key={i} type="text" className="form-control" placeholder={`Clue ${i + 1}`} />
            ))}
            <br />
            <h2>DOWN</h2>
            {Array(12).fill().map((_, i) => (
              <input key={i} type="text" className="form-control" placeholder={`Clue ${i + 1}`} />
            ))}
          </div>
      </div>
    </>
  );
}

export default App;