import React, { FC, useCallback } from 'react';
import { IToy } from '../../models';
import { Container, Picture, Text, TextContainer, Title } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectedToysSlice } from '../../store/reducers/selected-toys-slice';
import { MAX_QUANTITY } from '../../constants';

const Card: FC<IToy> = ({ name, num, count, favorite, shape, size, year, color }) => {
  const { selected } = useAppSelector((state) => state.selectedToysSlice);
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    if (!selected.includes(num) && selected.length === MAX_QUANTITY) {
      alert('adsf');
    } else {
      dispatch(selectedToysSlice.actions.toggleSelectedToys(num));
    }
  }, [dispatch, selected, num]);

  return (
    <Container isSelected={selected.includes(num)} onClick={handleClick}>
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
