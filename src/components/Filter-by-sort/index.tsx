import React, { useCallback, useEffect } from 'react';
import { Block, BlockTitle } from '../FiltersSection/styles';
import { BtnContainer, Button, SearchInput, Select } from './styles';
import { QuantityCounter } from '../index';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectedToysSlice } from '../../store/reducers/selected-toys-slice';
import { useFormik } from 'formik';
import { filtersSlice } from '../../store/reducers/filters-slice';

const FilterBySort = () => {
  const { sorting } = useAppSelector((state) => state.filtersSlice);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: sorting,
    onSubmit: () => {},
  });

  const handleResetMemory = useCallback(() => {
    dispatch(selectedToysSlice.actions.reset());
  }, [dispatch]);

  const handleResetFilters = useCallback(() => {
    dispatch(filtersSlice.actions.reset());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filtersSlice.actions.updateSorting(formik.values));
  }, [formik.values, dispatch]);

  return (
    <Block>
      <form onSubmit={formik.handleSubmit}>
        <BlockTitle>sorting</BlockTitle>
        <SearchInput
          type="search"
          name="search"
          placeholder="Search for toys"
          autoComplete="off"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.search}
        />
        <Select name="sort" id="sort" onChange={formik.handleChange} value={formik.values.sort}>
          <option value="str-max">By name from «A» to «Z»</option>
          <option value="str-min">By name from «Z» to «A»</option>
          <option value="new">First the new ones</option>
          <option value="old">First the old ones</option>
        </Select>
        <BtnContainer>
          <Button onClick={handleResetFilters}>Reset filters</Button>
          <Button onClick={handleResetMemory}>Reset memory</Button>
        </BtnContainer>
        <QuantityCounter />
      </form>
    </Block>
  );
};

export default FilterBySort;
