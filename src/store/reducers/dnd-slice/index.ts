import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DraggableItem {
  target: string;
  x: number;
  y: number;
}

export interface DndSliceState {
  target: string | null;
  x: number;
  y: number;
  aboveDropZone: boolean;
  displaced: DraggableItem[];
}

const initialState: DndSliceState = {
  target: null,
  x: 0,
  y: 0,
  aboveDropZone: false,
  displaced: [],
};

export const dndSlice = createSlice({
  name: 'dnd',
  initialState,
  reducers: {
    setTarget(state, action: PayloadAction<string>) {
      state.target = action.payload;
      state.aboveDropZone = false;
    },
    toggleAboveDropZone(state, action: PayloadAction<boolean>) {
      state.aboveDropZone = action.payload;
    },
    finishDrag(state, action: PayloadAction<DraggableItem>) {
      const { x, y, target } = action.payload;
      if (state.aboveDropZone) {
        state.displaced.push({
          target,
          x,
          y,
        });
      } else {
        state.target = null;
        state.x = 0;
        state.y = 0;
        state.aboveDropZone = false;
      }
    },
  },
});

export const { setTarget, toggleAboveDropZone, finishDrag } = dndSlice.actions;
export default dndSlice.reducer;
