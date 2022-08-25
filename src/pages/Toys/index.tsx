import React from 'react';
import { BlurContainer, MainContainer } from '../../common-styled-components';
import { CardsContainer, Wrapper } from './styles';
import { Card, FiltersSection } from '../../components';
import { useAppSelector } from '../../hooks';
import { sortToys } from '../../utils';

const Toys = () => {
  const params = useAppSelector((state) => state.filtersSlice);
  const data = sortToys(params);

  return (
    <MainContainer>
      <BlurContainer>
        <Wrapper>
          <FiltersSection />
          <CardsContainer>
            {data.map((el) => (
              <Card {...el} key={el.num} />
            ))}
          </CardsContainer>
        </Wrapper>
      </BlurContainer>
    </MainContainer>
  );
};

export default Toys;
