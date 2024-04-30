import React, { useState } from 'react';
import MatrixInputForm from './Components/MatrixInputForm';
import { multiplyMatrices } from './Components/matrixUtils';
import './App.css';


function App() {
  const [matrix1, setMatrix1] = useState([]);
  const [matrix2, setMatrix2] = useState([]);
  const [resultMatrix, setResultMatrix] = useState([]);
  const [showResult, setShowResult] = useState(false); // State to track whether to show the result

  const calculate = () => {
    try {
      const result = multiplyMatrices(matrix1, matrix2);
      setResultMatrix(result);
      setShowResult(true); // Set showResult to true after calculation
    } catch (error) {
      alert(error.message);
    }
  };

  const clearFields = () => {
    setMatrix1([]);
    setMatrix2([]);
    setResultMatrix([]);
    setShowResult(false); // Hide the result when clearing fields
  };

  return (
    <div className="App">
      <h1>Matrix Multiplication Calculator</h1>
      <MatrixInputForm
        setMatrixA={setMatrix1}
        setMatrixB={setMatrix2}
        clearOutput={clearFields}
      />
      <button onClick={calculate}>Calculate</button>
      {showResult && resultMatrix.length > 0 && ( // Conditionally render the result section
        <div className="result-container">
          <h2>Result Matrix:</h2>
          <div className="result-matrix">
            <p>C = A . B =</p>
            <div className="matrix-section">
              <p>First Matrix:</p>
              {matrix1.map((row, rowIndex) => (
                <div key={rowIndex}>{row.join(' ')}</div>
              ))}
            </div>
            <div className="matrix-section">
              <p>Second Matrix:</p>
              {matrix2.map((row, rowIndex) => (
                <div key={rowIndex}>{row.join(' ')}</div>
              ))}
            </div>
            <div className="matrix-section">
              <p>Result Matrix:</p>
              {resultMatrix.map((row, rowIndex) => (
                <div key={rowIndex}>{row.join(' ')}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
