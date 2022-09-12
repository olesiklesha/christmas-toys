import React from 'react';
import { Block, BlockTitle } from '../Filters-section/styles';
import { CopiesInput, YearsInput } from '../index';
import 'react-input-range/lib/css/index.css';
import './styles.scss';

const FilterByRange = () => {
  return (
    <Block>
      <BlockTitle>filters by range</BlockTitle>
      <span>Number of copies</span>
      <CopiesInput />
      <span>Year of purchase</span>
      <YearsInput />
    </Block>
  );
};

export default FilterByRange;
