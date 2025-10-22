import { useReducer, useCallback, useEffect, useState } from 'react';
import { GameState } from '../engine/types';
import {
  createInitialState,
  movePlayer,
  rotatePlayer,
  dropPlayer,
} from '../engine/game';

type Action =
  | { type: 'MOVE'; payload: -1 | 1 }
  | { type: 'ROTATE'; payload: boolean }
  | { type: 'DROP'; payload?: { accelerated: boolean } }
  | { type: 'RESET' };

function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'MOVE':
      return movePlayer(state, action.payload);
    case 'ROTATE':
      return rotatePlayer(state, action.payload);
    case 'DROP':
      // Soft drop is just a normal drop, but the loop is faster
      return dropPlayer(state);
    case 'RESET':
      return createInitialState();
    default:
      return state;
  }
}

export const useGameEngine = () => {
  const [gameState, dispatch] = useReducer(gameReducer, createInitialState());
  const [softDrop, setSoftDrop] = useState(false);

  const move = useCallback((dir: -1 | 1) => {
    dispatch({ type: 'MOVE', payload: dir });
  }, []);

  const rotate = useCallback((clockwise: boolean = true) => {
    dispatch({ type: 'ROTATE', payload: clockwise });
  }, []);

  const drop = useCallback(() => {
    dispatch({ type: 'DROP' });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  // Game loop
  useEffect(() => {
    if (gameState.gameOver) return;

    const dropInterval = softDrop ? 50 : 1000 / gameState.level;
    const interval = setInterval(() => {
      drop();
    }, dropInterval);

    return () => clearInterval(interval);
  }, [gameState.gameOver, gameState.level, drop, softDrop]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      if (gameState.gameOver) return;

      switch (e.key) {
        case 'ArrowLeft':
          move(-1);
          break;
        case 'ArrowRight':
          move(1);
          break;
        case 'ArrowDown':
          setSoftDrop(true);
          break;
        case 'ArrowUp':
          rotate(true); // Clockwise
          break;
        case 'z':
          rotate(false); // Anti-clockwise
          break;
      }
    };

    
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        setSoftDrop(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
        return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState.gameOver, move, drop, rotate]);

  return { gameState, reset };
};
