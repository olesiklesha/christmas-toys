import React, { FC } from 'react';
import { IToy } from '../../models';
import { Container, Picture, Text, TextContainer, Title } from './styles';

const Card: FC<IToy> = ({ name, num, count, favorite, shape, size, year, color }) => {
  return (
    <Container isSelected={false}>
      <Title>{name}</Title>
      <Picture num={String(+num + 1)} />
      <TextContainer>
        <Text>Quantity: {count}</Text>
        <Text>Year of purchase: {year}</Text>
        <Text>Shape: {shape}</Text>
        <Text>Color: {color}</Text>
        <Text>Size: {size}</Text>
        <Text>Favorite: {favorite ? 'Yes' : 'No'}</Text>
      </TextContainer>
    </Container>
  );
};

export default Card;
