import { hasCollision } from '../collisions';
import { createBoard, BOARD_WIDTH, BOARD_HEIGHT } from '../board';
import { Player } from '../types';
import { TETROMINOS } from '../tetromino';

describe('hasCollision', () => {
  it('should return false when there is no collision', () => {
    const board = createBoard();
    const player: Player = {
      pos: { x: 4, y: 0 },
      tetromino: TETROMINOS.T.shape,
      collided: false,
    };
    expect(hasCollision(player, board)).toBe(false);
  });

  it('should detect collision with the bottom wall', () => {
    const board = createBoard();
    const player: Player = {
      pos: { x: 4, y: BOARD_HEIGHT - 2 }, // T piece is 3 rows high
      tetromino: TETROMINOS.T.shape,
      collided: false,
    };
    expect(hasCollision(player, board)).toBe(true);
  });

  it('should detect collision with the left wall', () => {
    const board = createBoard();
    const player: Player = {
      pos: { x: -1, y: 0 },
      tetromino: TETROMINOS.T.shape,
      collided: false,
    };
    expect(hasCollision(player, board)).toBe(true);
  });

  it('should detect collision with the right wall', () => {
    const board = createBoard();
    const player: Player = {
      pos: { x: BOARD_WIDTH - 2, y: 0 }, // T piece is 3 cols wide
      tetromino: TETROMINOS.T.shape,
      collided: false,
    };
    expect(hasCollision(player, board)).toBe(true);
  });

  it('should detect collision with another piece', () => {
    const board = createBoard();
    board[5][5] = 'J'; // Place a piece on the board
    const player: Player = {
      pos: { x: 4, y: 3 },
      tetromino: TETROMINOS.T.shape,
      collided: false,
    };
    // The T piece shape is [[0,T,0], [T,T,T], [0,0,0]]
    // At pos {x:4, y:3}, the bottom middle T will be at board[5][5]
    expect(hasCollision(player, board)).toBe(true);
  });
});
