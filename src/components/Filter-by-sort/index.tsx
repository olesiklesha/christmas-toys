import React, { Component } from 'react';
import { Block, BlockTitle } from '../FiltersSection/styles';
import { BtnContainer, Button, Quantity, SearchInput, Select } from './styles';

class FilterBySort extends Component {
  render() {
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
        <BtnContainer>
          <Button>Reset filters</Button>
          <Button>Reset memory</Button>
        </BtnContainer>
        <Quantity>2</Quantity>
      </Block>
    );
  }
}

export default FilterBySort;
