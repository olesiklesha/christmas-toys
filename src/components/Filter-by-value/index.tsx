import React from 'react';
import { Block, BlockTitle, Field } from '../FiltersSection/styles';
import { COLORS, SHAPES, SIZES } from '../../constants';

const FilterByValuer = () => {
  return (
    <Block>
      <BlockTitle>filters by value</BlockTitle>
      <Field>
        Shapes:{' '}
        {SHAPES.map((el) => (
          <label key={el}>
            <input type="checkbox" name="shapes" value={el} />
          </label>
        ))}
      </Field>
      <Field>
        Colors:{' '}
        {COLORS.map((el) => (
          <label key={el}>
            <input type="checkbox" name="colors" value={el} />
          </label>
        ))}
      </Field>
      <Field>
        Sizes:{' '}
        {SIZES.map((el) => (
          <label key={el}>
            <input type="checkbox" name="sizes" value={el} />
          </label>
        ))}
      </Field>
      <Field>
        Only favourite:{' '}
        {
          <label>
            <input type="checkbox" name="favourite" />
          </label>
        }
      </Field>
    </Block>
  );
};

export default FilterByValuer;
