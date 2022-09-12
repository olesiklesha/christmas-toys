import React, { FC } from 'react';
import { IToy } from '../../models';
import { Container, Counter, ToyImage } from './styles';

const ToyCard: FC<IToy> = ({ count, num }) => {
  return (
    <Container>
      <ToyImage i={num} />
      <Counter>{count}</Counter>
    </Container>
  );
};

export default ToyCard;
