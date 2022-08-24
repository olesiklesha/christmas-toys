import React, { useCallback, useState } from 'react';
import { Container, Output } from '../Filter-by-range/styles';
import InputRange, { Range } from 'react-input-range';
import { MAX_COUNT, MIN_COUNT } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filtersSlice } from '../../store/reducers/filters-slice';

const CopiesInput = () => {
  const { copiesRange } = useAppSelector((state) => state.filtersSlice);
  const [copiesState, setCopiesState] = useState<Range>(copiesRange);
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (value: Range | number) => {
      setCopiesState(value as Range);
      dispatch(filtersSlice.actions.updateCopiesRange(value as Range));
    },
    [dispatch]
  );

  return (
    <Container>
      <Output>{copiesState.min}</Output>
      <InputRange
        maxValue={MAX_COUNT}
        minValue={MIN_COUNT}
        value={copiesState}
        onChange={handleChange.bind(this)}
      />
      <Output>{copiesState.max}</Output>
    </Container>
  );
};

export default CopiesInput;
