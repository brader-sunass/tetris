import React from 'react';
import Board from './components/Board';
import GameInfo from './components/GameInfo';
import { useGameEngine } from './hooks/useGameEngine';
import { StyledTetrisWrapper, StyledTetris } from './components/styles/StyledTetris';
import { createBoard } from './engine/board';
import { GameState } from './engine/types';

const App: React.FC = () => {
  const { gameState, reset } = useGameEngine();

  const getBoard = (state: GameState) => {
    const newBoard = createBoard();

    // 1. Draw the board with settled pieces
    state.board.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          newBoard[y][x] = value;
        }
      });
    });

    // 2. Draw the player's tetromino
    state.player.tetromino.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          const boardY = y + state.player.pos.y;
          const boardX = x + state.player.pos.x;
          if (boardY >= 0) {
            newBoard[boardY][boardX] = value;
          }
        }
      });
    });

    return newBoard;
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex={0}>
      <StyledTetris>
        <aside>
          {gameState.gameOver ? (
            <GameInfo text="Game Over" value={gameState.score} />
          ) : (
            <div>
              <GameInfo text="Score" value={gameState.score} />
              <GameInfo text="Rows" value={gameState.rows} />
              <GameInfo text="Level" value={gameState.level} />
            </div>
          )}
          <button onClick={reset}>Start Game</button>
        </aside>
        <Board board={getBoard(gameState)} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
