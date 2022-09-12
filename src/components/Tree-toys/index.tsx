import React from 'react';
import { Container, ToyContainer } from './styles';
import { BlockTitle } from '../Filters-section/styles';
import { useAppSelector } from '../../hooks';
import toys from '../../data/toys-data.json';
import { IToy } from '../../models';

const toysData = toys as IToy[];

const TreeToys = () => {
  const { selected } = useAppSelector((state) => state.selectedToysSlice);
  const data = toysData.filter((el) => {
    if (selected.length > 0 && selected.includes(el.num)) {
      return el;
    } else {
      if (el.favorite) return el;
    }
  });

  return (
    <Container>
      <BlockTitle>Toys</BlockTitle>
      <ToyContainer>
        {data.map((el) => (
          <span key={el.name}>{el.name}</span>
        ))}
      </ToyContainer>
    </Container>
  );
};

export default TreeToys;
