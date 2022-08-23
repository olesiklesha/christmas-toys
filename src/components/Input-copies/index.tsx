import React, { useCallback, useState } from 'react';
import { Container, Output } from '../Filter-by-range/styles';
import InputRange, { Range } from 'react-input-range';
import { MAX_COUNT, MIN_COUNT } from '../../constants';

const CopiesInput = () => {
  const [copiesState, setCopiesState] = useState<Range>({ min: MIN_COUNT, max: MAX_COUNT });

  const handleChange = useCallback((value: Range | number) => {
    setCopiesState(value as Range);
  }, []);

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
