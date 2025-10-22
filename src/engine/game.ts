import { createBoard, BOARD_WIDTH, clearRows } from './board';
import { randomTetromino } from './tetromino';
import { GameState, Player } from './types';
import { hasCollision } from './collisions';
import { rotate } from './rotation';

export function createInitialState(): GameState {
  const player: Player = {
    pos: { x: BOARD_WIDTH / 2 - 2, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  };

  return {
    board: createBoard(),
    player,
    score: 0,
    level: 1,
    rows: 0,
    gameOver: false,
  };
}

export function movePlayer(state: GameState, dir: -1 | 1): GameState {
  const { player, board } = state;
  const newPlayer = { ...player };
  newPlayer.pos = { ...player.pos, x: player.pos.x + dir };

  if (hasCollision(newPlayer, board)) {
    return state; // No change if collision
  }

  return { ...state, player: newPlayer };
}

export function rotatePlayer(state: GameState, clockwise: boolean = true): GameState {
  const { player, board } = state;
  const newPlayer = { ...player };
  newPlayer.tetromino = rotate(player.tetromino, clockwise);

  // Basic wall kick
  let offset = 1;
  while (hasCollision(newPlayer, board)) {
    newPlayer.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    if (offset > newPlayer.tetromino[0].length) {
      // Rotation failed, revert
      return state;
    }
  }

  return { ...state, player: newPlayer };
}

export function dropPlayer(state: GameState): GameState {
  const { player, board } = state;
  const newPlayer = { ...player };
  newPlayer.pos = { ...player.pos, y: player.pos.y + 1 };

  if (hasCollision(newPlayer, board)) {
    // 1. Check for game over condition *before* locking the piece
    if (player.pos.y < 1) {
      return { ...state, gameOver: true };
    }

    // 2. Lock the piece onto the board
    const newBoard = [...board];
    player.tetromino.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          newBoard[y + player.pos.y][x + player.pos.x] = value;
        }
      });
    });

    // 3. Clear rows and calculate score from the new board state
    const { newBoard: clearedBoard, clearedRows } = clearRows(newBoard);

    const scoreGained = [0, 40, 100, 300, 1200][clearedRows] * state.level;
    const newScore = state.score + scoreGained;
    const newRows = state.rows + clearedRows;
    const newLevel = Math.floor(newRows / 10) + 1;

    // 4. Get the next piece
    const nextPlayer: Player = {
      pos: { x: BOARD_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    };

    return {
      ...state,
      board: clearedBoard,
      player: nextPlayer,
      score: newScore,
      rows: newRows,
      level: newLevel,
    };
  }

  return { ...state, player: newPlayer };
}
