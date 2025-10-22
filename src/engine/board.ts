import { Board, CellValue } from './types';

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

export const createBoard = (): Board =>
  Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0) as CellValue[]);

export const clearRows = (board: Board): { newBoard: Board; clearedRows: number } => {
  let clearedRows = 0;
  const newBoard = board.reduce((acc, row) => {
    if (row.every(cell => cell !== 0)) {
      clearedRows += 1;
      // Add a new empty row at the top
      acc.unshift(Array(BOARD_WIDTH).fill(0) as CellValue[]);
      return acc;
    }
    acc.push(row);
    return acc;
  }, [] as Board);

  return { newBoard, clearedRows };
};
