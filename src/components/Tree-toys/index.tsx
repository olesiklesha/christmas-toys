import React from 'react';
import { Container, ToyContainer } from './styles';
import { BlockTitle } from '../Filters-section/styles';

const TreeToys = () => {
  return (
    <Container>
      <BlockTitle>Toys</BlockTitle>
      <ToyContainer>
        <span>a</span>
        <span>a</span>
        <span>a</span>
      </ToyContainer>
    </Container>
  );
};

export default TreeToys;
