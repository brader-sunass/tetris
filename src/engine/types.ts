export type CellValue = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L' | 0;
export type Board = CellValue[][];

export interface Player {
  pos: { x: number; y: number };
  tetromino: readonly (readonly CellValue[])[];
  collided: boolean;
}

export interface GameState {
  board: Board;
  player: Player;
  score: number;
  level: number;
  rows: number;
  gameOver: boolean;
}
