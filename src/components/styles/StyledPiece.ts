import styled from 'styled-components';
import { CellValue } from '../../engine/types';
import { TETROMINOS } from '../../engine/tetromino';

interface Props {
  type: CellValue;
}

export const StyledPiece = styled.div<Props>`
  width: auto;
  background: rgba(${({ type }) => (type === 0 ? '0,0,0' : TETROMINOS[type].color)}, 0.8);
  border: ${({ type }) => (type === 0 ? '0px solid' : '4px solid')};
  border-bottom-color: rgba(${({ type }) => (type === 0 ? '0,0,0' : TETROMINOS[type].color)}, 0.1);
  border-right-color: rgba(${({ type }) => (type === 0 ? '0,0,0' : TETROMINOS[type].color)}, 1);
  border-top-color: rgba(${({ type }) => (type === 0 ? '0,0,0' : TETROMINOS[type].color)}, 1);
  border-left-color: rgba(${({ type }) => (type === 0 ? '0,0,0' : TETROMINOS[type].color)}, 0.3);
`;
