import { combineReducers, configureStore } from '@reduxjs/toolkit';
import selectedToysSlice from './reducers/selected-toys-slice';
import filtersSlice from './reducers/filters-slice';

const rootReducer = combineReducers({
  selectedToysSlice,
  filtersSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
