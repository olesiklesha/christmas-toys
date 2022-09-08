import React, { useCallback, useEffect } from 'react';
import { Block, BlockTitle } from '../Filters-section/styles';
import { BtnContainer, Button, SearchInput, Select } from './styles';
import { QuantityCounter } from '../index';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useFormik } from 'formik';
import { resetSelectedToys } from '../../store/reducers/selected-toys-slice';
import { resetFilters, updateSorting } from '../../store/reducers/filters-slice';
import { FILTERS_INIT_STATE } from '../../constants';

const FilterBySort = () => {
  const state = useAppSelector((state) => state.filtersSlice);
  const { sorting } = state;
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: sorting,
    onSubmit: () => {},
  });

  const handleResetMemory = useCallback(() => {
    dispatch(resetSelectedToys());
  }, [dispatch]);

  const handleResetFilters = useCallback(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(updateSorting(formik.values));
  }, [formik.values, dispatch]);

  useEffect(() => {
    if (JSON.stringify(state) === JSON.stringify(FILTERS_INIT_STATE)) {
      formik.resetForm();
    }
  }, [state]);

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
