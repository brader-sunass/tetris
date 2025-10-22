import React from 'react';
import { StyledGameInfo } from './styles/StyledGameInfo';

interface Props {
  text: string;
  value: number;
}

const GameInfo: React.FC<Props> = ({ text, value }) => (
  <StyledGameInfo>{`${text}: ${value}`}</StyledGameInfo>
);

export default GameInfo;
