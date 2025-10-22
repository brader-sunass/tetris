import { createBoard, BOARD_WIDTH, BOARD_HEIGHT } from '../board';

describe('createBoard', () => {
  it('should create a board with correct dimensions', () => {
    const board = createBoard();
    expect(board.length).toBe(BOARD_HEIGHT);
    board.forEach(row => {
      expect(row.length).toBe(BOARD_WIDTH);
    });
  });

  it('should initialize the board with all cells set to 0', () => {
    const board = createBoard();
    board.forEach(row => {
      row.forEach(cell => {
        expect(cell).toBe(0);
      });
    });
  });
});
