import { Player } from './types';

// Function to rotate a tetromino matrix
export const rotate = (matrix: Player['tetromino'], clockwise: boolean = true): Player['tetromino'] => {
  // Transpose rows and columns
  const transposedMatrix = matrix.map((_, index) => matrix.map(col => col[index]));
  // Reverse each row to get the rotated matrix
  if (clockwise) {
    return transposedMatrix.map(row => [...row].reverse());
  }
  // Para rotación antihoraria, transponemos y revertimos las columnas (o revertimos las filas transpuestas)
  return transposedMatrix.reverse();
};
