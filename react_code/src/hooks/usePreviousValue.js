import { useRef, useEffect } from 'react';

const usePreviousValue = (value) => {
  console.log(value);
  const previousValue = useRef();

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return previousValue.current;
};

export default usePreviousValue;
