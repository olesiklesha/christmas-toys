import React from 'react';
import { Block, BlockTitle, Field } from '../FiltersSection/styles';
import { COLORS, SHAPES, SIZES } from '../../constants';
import {
  ColorsCBWrapper,
  ColorsCheckbox,
  FavouritesCheckbox,
  ShapesCBWrapper,
  ShapesCheckbox,
  SizesCBWrapper,
  SizesCheckbox,
} from './styles';

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
          <ColorsCBWrapper key={el + 1}>
            <ColorsCheckbox type="checkbox" name="colors" value={el} id={el} />
            <label htmlFor={el} />
          </ColorsCBWrapper>
        ))}
      </Field>
      <Field>
        Sizes:{' '}
        {SIZES.map((el) => (
          <SizesCBWrapper key={el}>
            <SizesCheckbox type="checkbox" name="sizes" value={el} id={el} />
            <label htmlFor={el} />
          </SizesCBWrapper>
        ))}
      </Field>
      <Field>
        Only favourite:{' '}
        {
          <>
            <FavouritesCheckbox type="checkbox" name="favourite" id="favourite" />
            <label htmlFor="favourite" />
          </>
        }
      </Field>
    </Block>
  );
};

export default FilterByValuer;
