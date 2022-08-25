import React, { useCallback, useEffect, useState } from 'react';
import { Container, Output } from '../Filter-by-range/styles';
import InputRange, { Range } from 'react-input-range';
import { MAX_YEAR, MIN_YEAR } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filtersSlice, initialState } from '../../store/reducers/filters-slice';

const YearsInput = () => {
  const state = useAppSelector((state) => state.filtersSlice);
  const { yearsRange } = state;
  const [yearsState, setYearsState] = useState<Range>(yearsRange);
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (value: Range | number) => {
      setYearsState(value as Range);
      dispatch(filtersSlice.actions.updateYearsRange(value as Range));
    },
    [dispatch]
  );

  useEffect(() => {
    if (JSON.stringify(state) === JSON.stringify(initialState)) {
      setYearsState(initialState.yearsRange);
    }
  }, [state]);

  return (
    <Container>
      <Output>{yearsState.min}</Output>
      <InputRange
        maxValue={MAX_YEAR}
        minValue={MIN_YEAR}
        value={yearsState}
        onChange={handleChange.bind(this)}
      />
      <Output>{yearsState.max}</Output>
    </Container>
  );
};

export default YearsInput;
