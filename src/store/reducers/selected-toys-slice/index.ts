import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedToysState {
  selected: string[];
}

const initialState: SelectedToysState = {
  selected: [],
};

export const selectedToysSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    toggleSelectedToys(state, action: PayloadAction<string>) {
      const { selected } = state;
      const { payload } = action;

      if (selected.includes(payload)) {
        selected.splice(selected.indexOf(payload), 1);
      } else {
        selected.push(payload);
      }

      window.localStorage.setItem('s', JSON.stringify(state));
    },
  },
});

export default selectedToysSlice.reducer;
