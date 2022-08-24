import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { filtersSlice } from '../../store/reducers/filters-slice';
import { IValueFilters } from '../../models';

const ContextCatcher = () => {
  const { values } = useFormikContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filtersSlice.actions.updateFilters(values as IValueFilters));
  }, [values, dispatch]);

  return null;
};

export default ContextCatcher;
