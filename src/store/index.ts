import { combineReducers, configureStore } from '@reduxjs/toolkit';
import selectedToysSlice from './reducers/selected-toys-slice';

const rootReducer = combineReducers({
  selectedToysSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
