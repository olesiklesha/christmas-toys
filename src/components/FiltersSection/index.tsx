import React from 'react';
import { Wrapper } from './styles';
import { FilterByRange, FilterBySort, FilterByValue } from '../index';

const FiltersSection = () => {
  return (
    <Wrapper>
      <FilterByValue />
      <FilterByRange />
      <FilterBySort />
    </Wrapper>
  );
};

export default FiltersSection;
