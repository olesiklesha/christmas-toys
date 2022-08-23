import React from 'react';
import { Block, BlockTitle } from '../FiltersSection/styles';
import { SearchInput, Select } from './styles';

const FilterBySort = () => {
  return (
    <Block>
      <BlockTitle>sorting</BlockTitle>
      <SearchInput
        type="search"
        name="search"
        placeholder="Search for toys"
        autoComplete="off"
        autoFocus
      />
      <Select name="sort" id="sort">
        <option value="str-max">By name from «A» to «Z»</option>
        <option value="str-min">By name from «Z» to «A»</option>
        <option value="new">First the new ones</option>
        <option value="old">First the old ones</option>
      </Select>
    </Block>
  );
};

export default FilterBySort;
