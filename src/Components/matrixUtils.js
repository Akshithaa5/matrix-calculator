// matrixUtils.js

export const multiplyMatrices = (matrix1, matrix2) => {
  // Check if either matrix is undefined or has invalid lengths
  if (!matrix1 || !matrix2 || matrix1.length === 0 || matrix2.length === 0 ||
      matrix1[0].length === 0 || matrix2[0].length === 0) {
      throw new Error('Invalid matrices. Please provide valid matrices.');
  }
  
  const rows1 = matrix1.length;
  const cols1 = matrix1[0].length;
  const rows2 = matrix2.length;
  const cols2 = matrix2[0].length;

  // Check if the number of columns in matrix1 matches the number of rows in matrix2
  if (cols1 !== rows2) {
      throw new Error('Cannot multiply matrices. Number of columns in matrix 1 must match number of rows in matrix 2.');
  }

  const result = [];

  for (let i = 0; i < rows1; i++) {
      result[i] = [];
      for (let j = 0; j < cols2; j++) {
          let sum = 0;
          for (let k = 0; k < cols1; k++) {
              sum += matrix1[i][k] * matrix2[k][j];
          }
          result[i][j] = sum;
      }
  }

  return result;
};
