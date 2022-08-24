import { useFormikContext } from 'formik';
import { useEffect } from 'react';

const ContextCatcher = () => {
  const { values } = useFormikContext();

  useEffect(() => {
    console.log(values);
  }, [values]);

  return null;
};

export default ContextCatcher;
