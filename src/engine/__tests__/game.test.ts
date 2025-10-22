import { createInitialState, dropPlayer } from '../game';
import { BOARD_HEIGHT } from '../board';
import { GameState } from '../types';

describe('game logic', () => {
  it('should handle line clearing and scoring correctly', () => {
    let state: GameState = createInitialState();

    // Create a board with one row that is almost full
    const newBoard = state.board;
    newBoard[BOARD_HEIGHT - 1] = ['J', 'J', 'J', 'J', 'J', 'J', 'J', 'J', 'J', 0];
    state.board = newBoard;

    // Create a player with a piece that will complete the line
    state.player = {
      pos: { x: 9, y: BOARD_HEIGHT - 1 }, // Position a 1x1 'I' piece directly in the gap
      tetromino: [['I']],
      collided: false,
    };

    // Drop the piece to lock it, which should trigger a line clear
    const nextState = dropPlayer(state);

    // A single line clear is 40 points at level 1
    expect(nextState.score).toBe(40);
    expect(nextState.rows).toBe(1);
    expect(nextState.level).toBe(1);
    // The board should have a new empty row at the top
    expect(nextState.board[0].every(cell => cell === 0)).toBe(true);
  });

  it('should detect game over condition', () => {
    let state: GameState = createInitialState();
    // Place a piece at the top of the board
    state.board[1][5] = 'T';
    // Set player at a position where its next drop will collide with the piece at board[1][5]
    state.player.pos = { x: 4, y: -1 };

    // Drop the player, which should cause a collision at y=0
    state = dropPlayer(state);

    // The game should now be over
    expect(state.gameOver).toBe(true);
  });
});
