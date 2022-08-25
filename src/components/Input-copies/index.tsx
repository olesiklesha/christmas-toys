import React, { useCallback, useEffect, useState } from 'react';
import { Container, Output } from '../Filter-by-range/styles';
import InputRange, { Range } from 'react-input-range';
import { FILTERS_INIT_STATE, MAX_COUNT, MIN_COUNT } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateCopiesRange } from '../../store/reducers/filters-slice';

const CopiesInput = () => {
  const state = useAppSelector((state) => state.filtersSlice);
  const { copiesRange } = state;
  const [copiesState, setCopiesState] = useState<Range>(copiesRange);
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (value: Range | number) => {
      setCopiesState(value as Range);
      dispatch(updateCopiesRange(value as Range));
    },
    [dispatch]
  );

  useEffect(() => {
    if (JSON.stringify(state) === JSON.stringify(FILTERS_INIT_STATE)) {
      setCopiesState(FILTERS_INIT_STATE.copiesRange);
    }
  }, [state]);

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
