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
    setGarlandColor(state, action: PayloadAction<GARLAND_COLOR>) {
      state.garland.isOn = true;
      state.garland.color = action.payload;
      window.localStorage.setItem(TREE_LS, JSON.stringify(state));
    },
    toggleGarland(state) {
      state.garland.isOn = !state.garland.isOn;
      window.localStorage.setItem(TREE_LS, JSON.stringify(state));
    },
    toggleSnow(state) {
      state.snow = !state.snow;
      window.localStorage.setItem(TREE_LS, JSON.stringify(state));
    },
    toggleMusic(state) {
      state.music = !state.music;
      window.localStorage.setItem(TREE_LS, JSON.stringify(state));
    },
    resetTreeSettings(state) {
      Object.assign(state, TREE_SET_INIT_STATE);
      window.localStorage.setItem(TREE_LS, JSON.stringify(state));
    },
  },
});

export const {
  setTree,
  setBg,
  setGarlandColor,
  toggleGarland,
  toggleSnow,
  toggleMusic,
  resetTreeSettings,
} = treeSettingsSlice.actions;
export default treeSettingsSlice.reducer;
