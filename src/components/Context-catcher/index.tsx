import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateFilters } from '../../store/reducers/filters-slice';
import { IValueFilters } from '../../models';
import { FILTERS_INIT_STATE } from '../../constants';

const ContextCatcher = () => {
  const { values, resetForm, setValues } = useFormikContext();
  const state = useAppSelector((state) => state.filtersSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateFilters(values as IValueFilters));
  }, [values, dispatch]);

  useEffect(() => {
    if (JSON.stringify(state) === JSON.stringify(FILTERS_INIT_STATE)) {
      const { values } = FILTERS_INIT_STATE;
      setValues(values);
    }
  }, [state, resetForm, setValues]);

  return null;
};

export default ContextCatcher;
