import { ISortFilters, IValueFilters } from '../../../models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Range } from 'react-input-range';
import { MAX_COUNT, MAX_YEAR, MIN_COUNT, MIN_YEAR } from '../../../constants';

interface FiltersSliceState {
  values: IValueFilters;
  copiesRange: Range;
  yearsRange: Range;
  sorting: ISortFilters;
}

const initialState: FiltersSliceState = {
  values: { shapes: [], colors: [], sizes: [], favourite: false },
  copiesRange: { min: MIN_COUNT, max: MAX_COUNT },
  yearsRange: { min: MIN_YEAR, max: MAX_YEAR },
  sorting: {
    search: '',
    sort: 'str-max',
  },
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilters(state, action: PayloadAction<IValueFilters>) {
      state.values = action.payload;
    },
    updateCopiesRange(state, action: PayloadAction<Range>) {
      state.copiesRange = action.payload;
    },
    updateYearsRange(state, action: PayloadAction<Range>) {
      state.yearsRange = action.payload;
    },
    updateSorting(state, action: PayloadAction<ISortFilters>) {
      state.sorting = action.payload;
    },
  },
});

export default filtersSlice.reducer;
