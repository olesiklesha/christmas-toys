import React from 'react';
import { Block, BlockTitle, Field } from '../FiltersSection/styles';
import { SHAPES } from '../../constants';

const FilterByValuer = () => {
  return (
    <Block>
      <BlockTitle>filters by value</BlockTitle>
      <Field>
        Shapes:{' '}
        {SHAPES.map((el) => (
          <span key={el}>{el}</span>
        ))}
      </Field>
      <Field>Colors:</Field>
      <Field>Sizes</Field>
      <Field>Only favourite</Field>
    </Block>
  );
};

export default FilterByValuer;
