import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filtersSlice, initialState } from '../../store/reducers/filters-slice';
import { IValueFilters } from '../../models';

const ContextCatcher = () => {
  const { values, resetForm } = useFormikContext();
  const state = useAppSelector((state) => state.filtersSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filtersSlice.actions.updateFilters(values as IValueFilters));
  }, [values, dispatch]);

  useEffect(() => {
    if (JSON.stringify(state) === JSON.stringify(initialState)) {
      resetForm();
    }
  }, [state, resetForm]);

  return null;
};

export default ContextCatcher;
