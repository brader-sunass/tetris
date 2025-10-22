import styled from 'styled-components';
import { BOARD_WIDTH, BOARD_HEIGHT } from '../../engine/board';

export const StyledBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(${BOARD_HEIGHT}, calc(25vw / ${BOARD_WIDTH}));
  grid-template-columns: repeat(${BOARD_WIDTH}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
`;
