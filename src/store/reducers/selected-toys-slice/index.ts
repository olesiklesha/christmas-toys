import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SELECTED_LS } from '../../../constants';

interface SelectedToysState {
  selected: string[];
}

const store = window.localStorage.getItem(SELECTED_LS);
const initialState: SelectedToysState = store
  ? (JSON.parse(store) as SelectedToysState)
  : {
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

      window.localStorage.setItem(SELECTED_LS, JSON.stringify(state));
    },
    reset(state) {
      state.selected = [];
      window.localStorage.removeItem(SELECTED_LS);
    },
  },
});

export default selectedToysSlice.reducer;
