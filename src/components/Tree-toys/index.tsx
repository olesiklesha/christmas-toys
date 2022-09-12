import React from 'react';
import { Container, ToyContainer } from './styles';
import { BlockTitle } from '../Filters-section/styles';
import { useAppSelector } from '../../hooks';
import toys from '../../data/toys-data.json';
import { IToy } from '../../models';
import { ToyCard } from '..';

const toysData = toys as IToy[];

const TreeToys = () => {
  const { selected } = useAppSelector((state) => state.selectedToysSlice);
  const data = toysData.filter((el) => {
    if (selected.length === 0 && el.favorite) return el;
    if (selected.includes(el.num)) {
      return el;
    }
  });

  return (
    <Container>
      <BlockTitle>Toys</BlockTitle>
      <ToyContainer>
        {data.map((el) => (
          <ToyCard key={el.name} {...el} />
        ))}
      </ToyContainer>
    </Container>
  );
};

export default TreeToys;
