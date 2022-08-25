import { ISortFilters, IValueFilters } from '../../../models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Range } from 'react-input-range';
import { FILTERS_INIT_STATE, FILTERS_LS } from '../../../constants';

export interface FiltersSliceState {
  values: IValueFilters;
  copiesRange: Range;
  yearsRange: Range;
  sorting: ISortFilters;
}

const store = window.localStorage.getItem(FILTERS_LS);

export const initialState: FiltersSliceState = store
  ? (JSON.parse(store) as FiltersSliceState)
  : FILTERS_INIT_STATE;

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilters(state, action: PayloadAction<IValueFilters>) {
      state.values = action.payload;
      window.localStorage.setItem(FILTERS_LS, JSON.stringify(state));
    },
    updateCopiesRange(state, action: PayloadAction<Range>) {
      state.copiesRange = action.payload;
      window.localStorage.setItem(FILTERS_LS, JSON.stringify(state));
    },
    updateYearsRange(state, action: PayloadAction<Range>) {
      state.yearsRange = action.payload;
      window.localStorage.setItem(FILTERS_LS, JSON.stringify(state));
    },
    updateSorting(state, action: PayloadAction<ISortFilters>) {
      state.sorting = action.payload;
      window.localStorage.setItem(FILTERS_LS, JSON.stringify(state));
    },
    resetFilters(state) {
      state.sorting = FILTERS_INIT_STATE.sorting;
      state.values = FILTERS_INIT_STATE.values;
      state.copiesRange = FILTERS_INIT_STATE.copiesRange;
      state.yearsRange = FILTERS_INIT_STATE.yearsRange;
      window.localStorage.setItem(FILTERS_LS, JSON.stringify(state));
    },
  },
});

export const { updateCopiesRange, updateYearsRange, updateFilters, updateSorting, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
