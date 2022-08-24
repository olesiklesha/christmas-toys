import React from 'react';
import { Quantity } from '../Filter-by-sort/styles';
import { useAppSelector } from '../../hooks';

const QuantityCounter = () => {
  const { selected } = useAppSelector((state) => state.selectedToysSlice);

  return <Quantity>{selected.length}</Quantity>;
};

export default QuantityCounter;
