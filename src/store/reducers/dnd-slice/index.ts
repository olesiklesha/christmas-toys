import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOYS_LS } from '../../../constants';

export interface IDraggableItem {
  target: string;
  x: number;
  y: number;
}

export interface DndSliceState {
  target: string | null;
  x: number;
  y: number;
  aboveDropZone: boolean;
  displaced: IDraggableItem[];
  onDropZoneStart: boolean;
}

const displacedMemory = window.localStorage.getItem(TOYS_LS);

const initialState: DndSliceState = {
  target: null,
  x: 0,
  y: 0,
  aboveDropZone: false,
  displaced: displacedMemory ? JSON.parse(displacedMemory) : [],
  onDropZoneStart: false,
};

export const dndSlice = createSlice({
  name: 'dnd',
  initialState,
  reducers: {
    setTarget(
      state,
      action: PayloadAction<{ onDrag: boolean; num: string; x?: number; y?: number }>
    ) {
      state.target = action.payload.num;
      state.onDropZoneStart = action.payload.onDrag;
      state.x = action.payload.x ?? 0;
      state.y = action.payload.y ?? 0;
      state.aboveDropZone = false;
    },
    toggleAboveDropZone(state, action: PayloadAction<boolean>) {
      state.aboveDropZone = action.payload;
    },
    finishDrag(state, action: PayloadAction<IDraggableItem>) {
      const { x, y, target } = action.payload;
      //dnd on tree
      if (state.aboveDropZone && state.onDropZoneStart) {
        state.displaced = state.displaced.map((el) => {
          if (el.target === target && el.x === state.x && el.y === state.y) {
            return action.payload;
          }
          return el;
        });
      }

      // remove toy
      if (!state.aboveDropZone && state.x !== 0 && state.y !== 0) {
        state.displaced = state.displaced.filter((el) => el.x !== state.x && el.y !== state.y);
      }

      //add toy
      if (state.aboveDropZone && state.x === 0 && state.y === 0) {
        state.displaced.push({
          target,
          x,
          y,
        });
      }

      state.target = null;
      state.x = 0;
      state.y = 0;
      state.aboveDropZone = false;
      window.localStorage.setItem(TOYS_LS, JSON.stringify(state.displaced));
    },
    resetDnd(state) {
      state.displaced = [];
      window.localStorage.removeItem(TOYS_LS);
    },
  },
});

export const { setTarget, toggleAboveDropZone, finishDrag, resetDnd } = dndSlice.actions;
export default dndSlice.reducer;
