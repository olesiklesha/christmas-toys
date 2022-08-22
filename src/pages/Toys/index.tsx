import React from 'react';
import { BlurContainer, MainContainer } from '../../common-styled-components';
import { CardsContainer, Wrapper } from './styles';
import toys from '../../data/toys-data.json';
import { IToy } from '../../models';
import { Card, Filter } from '../../components';

const Toys = () => {
  // plug
  const data = toys as IToy[];

  return (
    <MainContainer>
      <BlurContainer>
        <Wrapper>
          <Filter />
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
