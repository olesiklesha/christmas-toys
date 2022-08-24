import React from 'react';
import { Block, BlockTitle, Field as FieldWrapper } from '../FiltersSection/styles';
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
import { Field, Form, Formik } from 'formik';
import { ContextCatcher } from '../index';

const FilterByValuer = () => {
  return (
    <Block>
      <Formik
        initialValues={{ shapes: [], colors: [], sizes: [], favourite: false }}
        onSubmit={() => {}}
      >
        {() => (
          <Form>
            <BlockTitle>filters by value</BlockTitle>
            <FieldWrapper>
              Shapes:{' '}
              {SHAPES.map((el, i) => (
                <ShapesCBWrapper key={el + i}>
                  <Field as={ShapesCheckbox} type="checkbox" name="shapes" value={el} id={el} />
                  <label htmlFor={el} />
                </ShapesCBWrapper>
              ))}
            </FieldWrapper>
            <FieldWrapper>
              Colors:{' '}
              {COLORS.map((el) => (
                <ColorsCBWrapper key={el + 1}>
                  <Field as={ColorsCheckbox} type="checkbox" name="colors" value={el} id={el} />
                  <label htmlFor={el} />
                </ColorsCBWrapper>
              ))}
            </FieldWrapper>
            <FieldWrapper>
              Sizes:{' '}
              {SIZES.map((el) => (
                <SizesCBWrapper key={el}>
                  <Field as={SizesCheckbox} type="checkbox" name="sizes" value={el} id={el} />
                  <label htmlFor={el} />
                </SizesCBWrapper>
              ))}
            </FieldWrapper>
            <FieldWrapper>
              Only favourite:{' '}
              {
                <>
                  <Field as={FavouritesCheckbox} type="checkbox" name="favourite" id="favourite" />
                  <label htmlFor="favourite" />
                </>
              }
            </FieldWrapper>
            <ContextCatcher />
          </Form>
        )}
      </Formik>
    </Block>
  );
};

export default FilterByValuer;
