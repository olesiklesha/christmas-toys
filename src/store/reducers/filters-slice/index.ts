import { IValueFilters } from '../../../models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersSliceState {
  values: IValueFilters;
}

const initialState: FiltersSliceState = {
  values: { shapes: [], colors: [], sizes: [], favourite: false },
};

export const FiltersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilters(state, action: PayloadAction<IValueFilters>) {
      state.values = action.payload;
    },
  },
});

export default FiltersSlice.reducer;
