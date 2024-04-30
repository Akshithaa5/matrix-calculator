import React, { useState } from 'react';
import './MatrixInputForm.css'; 

const MatrixInputForm = ({ setMatrixA, setMatrixB, clearOutput, calculate }) => {
  const [rowsA, setRowsA] = useState('');
  const [colsA, setColsA] = useState('');
  const [rowsB, setRowsB] = useState('');
  const [colsB, setColsB] = useState('');
  const [inputMatrixA, setInputMatrixA] = useState('');
  const [inputMatrixB, setInputMatrixB] = useState('');

  const handleMatrixAChange = (e) => {
    setInputMatrixA(e.target.value);
    setMatrixA(parseMatrix(e.target.value));
  };

  const handleMatrixBChange = (e) => {
    setInputMatrixB(e.target.value);
    setMatrixB(parseMatrix(e.target.value));
  };

  const parseMatrix = (input) => {
    return input.trim().split('\n').map(row => row.trim().split(/\s+/).map(Number));
  };

  const clearFields = () => {
    setRowsA('');
    setColsA('');
    setRowsB('');
    setColsB('');
    setInputMatrixA('');
    setInputMatrixB('');
    setMatrixA([]);
    setMatrixB([]);
    clearOutput(); // Call the clearOutput function passed from the parent component
  };

  return (
    <div className="matrix-input-form">
      <h3>Select the matrix size:</h3>
      <div className="matrix-input-row">
        <label htmlFor="rowsA">A:</label>
        <input
          id="rowsA"
          type="number"
          value={rowsA}
          onChange={(e) => setRowsA(e.target.value)}
          placeholder="Rows"
        />
        X
        <input
          type="number"
          value={colsA}
          onChange={(e) => setColsA(e.target.value)}
          placeholder="Cols"
        />
      </div>
      <div className="matrix-input-row">
        <label htmlFor="rowsB">B:</label>
        <input
          id="rowsB"
          type="number"
          value={rowsB}
          onChange={(e) => setRowsB(e.target.value)}
          placeholder="Rows"
        />
        X
        <input
          type="number"
          value={colsB}
          onChange={(e) => setColsB(e.target.value)}
          placeholder="Cols"
        />
      </div>
      <div className="matrix-input-row">
        <h3>The first matrix:</h3>
        <textarea
          value={inputMatrixA}
          onChange={handleMatrixAChange}
          placeholder={`Enter matrix A...`}
          rows={parseInt(rowsA)}
          cols={parseInt(colsA) * 2 + 1}
        />
      </div>
      <div className="matrix-input-row">
        <h3>The second matrix:</h3>
        <textarea
          value={inputMatrixB}
          onChange={handleMatrixBChange}
          placeholder={`Enter matrix B...`}
          rows={parseInt(rowsB)}
          cols={parseInt(colsB) * 2 + 1}
        />
      </div>
      {/* Button container */}
      <div className="button-container">
        <button className="clear-button" onClick={clearFields}>Clear</button>
      </div>
    </div>
  );
};

export default MatrixInputForm;
