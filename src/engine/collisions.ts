import { Board, Player } from './types';
import { BOARD_WIDTH, BOARD_HEIGHT } from './board';

export const hasCollision = (player: Player, board: Board): boolean => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      if (player.tetromino[y][x] !== 0) {
        const newY = y + player.pos.y;
        const newX = x + player.pos.x;

        // 1. Check if it's within the board height (y-axis)
        if (newY >= BOARD_HEIGHT) {
          return true;
        }

        // 2. Check if it's within the board width (x-axis)
        if (newX < 0 || newX >= BOARD_WIDTH) {
          return true;
        }

        // 3. Check if the cell on the board is not empty
        if (board[newY]?.[newX] !== 0) {
          return true;
        }
      }
    }
  }
  return false;
};
