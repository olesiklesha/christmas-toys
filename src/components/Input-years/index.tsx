import React, { useCallback, useState } from 'react';
import { Container, Output } from '../Filter-by-range/styles';
import InputRange, { Range } from 'react-input-range';
import { MAX_YEAR, MIN_YEAR } from '../../constants';

const YearsInput = () => {
  const [yearsState, setYearsState] = useState<Range>({ min: MIN_YEAR, max: MAX_YEAR });

  const handleChange = useCallback((value: Range | number) => {
    setYearsState(value as Range);
  }, []);

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
