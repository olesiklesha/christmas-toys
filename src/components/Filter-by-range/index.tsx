import React, { useState } from 'react';
import { Block, BlockTitle } from '../FiltersSection/styles';
import { MAX_COUNT, MIN_COUNT } from '../../constants';
import InputRange, { Range } from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './styles.css';

const FilterByRange = () => {
  const [state, setState] = useState<Range>({ min: MIN_COUNT, max: MAX_COUNT });

  return (
    <Block>
      <BlockTitle>filters by range</BlockTitle>
      <span>Number of copies</span>
      <div>
        <output>{state.min}</output>
        <InputRange
          maxValue={MAX_COUNT}
          minValue={MIN_COUNT}
          value={state}
          onChange={(value) => {
            setState(value as Range);
          }}
        />
        <output>{state.max}</output>
      </div>
      <span>Year of purchase</span>
    </Block>
  );
};

export default FilterByRange;
