import React from 'react';
import { Block, BlockTitle, Field } from '../FiltersSection/styles';
import { COLORS, SHAPES, SIZES } from '../../constants';
import { ShapesCBWrapper, ShapesCheckbox, SizesCBWrapper, SizesCheckbox } from './styles';

const FilterByValuer = () => {
  return (
    <Block>
      <BlockTitle>filters by value</BlockTitle>
      <Field>
        Shapes:{' '}
        {SHAPES.map((el, i) => (
          <ShapesCBWrapper key={el + i}>
            <ShapesCheckbox type="checkbox" name="shapes" value={el} id={el} />
            <label htmlFor={el} />
          </ShapesCBWrapper>
        ))}
      </Field>
      <Field>
        Colors:{' '}
        {COLORS.map((el) => (
          <label key={el}>
            <input type="checkbox" name="sizes" value={el} />
          </label>
        ))}
      </Field>
      <Field>
        Sizes:{' '}
        {SIZES.map((el) => (
          <SizesCBWrapper key={el}>
            <SizesCheckbox type="checkbox" name="colors" value={el} />
            <label htmlFor={el} />
          </SizesCBWrapper>
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
