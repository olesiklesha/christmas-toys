import { GARLAND_COLOR, TREE_LS, TREE_SET_INIT_STATE } from '../../../constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITreeSettings {
  tree: number;
  bg: number;
  garland: {
    isOn: boolean;
    color: GARLAND_COLOR;
  };
  music: boolean;
  snow: boolean;
}

const store = window.localStorage.getItem(TREE_LS);
const initialState: ITreeSettings = store
  ? (JSON.parse(store) as ITreeSettings)
  : TREE_SET_INIT_STATE;

export const treeSettingsSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    setTree(state, action: PayloadAction<number>) {
      state.tree = action.payload;
      window.localStorage.setItem(TREE_LS, JSON.stringify(state));
    },
    setBg(state, action: PayloadAction<number>) {
      state.bg = action.payload;
      window.localStorage.setItem(TREE_LS, JSON.stringify(state));
    },
  },
});

export const { setTree, setBg } = treeSettingsSlice.actions;
export default treeSettingsSlice.reducer;
