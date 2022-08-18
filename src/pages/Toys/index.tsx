import React from 'react';
import { BlurContainer, MainContainer } from '../../common-styled-components';
import { CardsContainer } from './styles';
import toys from '../../data/toys-data.json';
import { IToy } from '../../models';
import { Card } from '../../components';

const Toys = () => {
  // plug
  const data = toys as IToy[];

  return (
    <MainContainer>
      <BlurContainer>
        <CardsContainer>
          {data.map((el) => (
            <Card {...el} key={el.name} />
          ))}
        </CardsContainer>
      </BlurContainer>
    </MainContainer>
  );
};

export default Toys;
