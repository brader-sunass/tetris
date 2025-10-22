import React from 'react';
import { StyledPiece } from './styles/StyledPiece';
import { CellValue } from '../engine/types';

interface Props {
  type: CellValue;
}

const Piece: React.FC<Props> = ({ type }) => <StyledPiece type={type} />;

export default React.memo(Piece);
