import React from 'react';
import { Board as BoardType } from '../engine/types';
import { StyledBoard } from './styles/StyledBoard';
import Piece from './Piece';

interface Props {
  board: BoardType;
}

const Board: React.FC<Props> = ({ board }) => (
  <StyledBoard>
    {board.map((row, y) => row.map((cell, x) => <Piece key={`${y}-${x}`} type={cell} />))}
  </StyledBoard>
);

export default Board;
