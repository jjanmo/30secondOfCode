import React, { useState } from 'react';
import { usePreviousValue } from '../hooks';

const styles = {
  button: {
    all: 'unset',
    padding: '0.5rem 1.2rem',
    fontSize: '2rem',
    color: 'white',
    margin: '0.5rem',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  plus: {
    backgroundColor: 'dodgerblue',
  },
  minus: {
    backgroundColor: 'tomato',
  },
};

const Add = () => {
  const [count, setCount] = useState(0);
  const previousValue = usePreviousValue(count);

  const handleClickPlus = () => {
    setCount(count + 1);
  };
  const handleClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h3>Previous Count : {previousValue}</h3>
      <button style={{ ...styles.button, ...styles.plus }} onClick={handleClickPlus}>
        +
      </button>
      <button style={{ ...styles.button, ...styles.minus }} onClick={handleClickMinus}>
        -
      </button>
      <h3>Current Count: {count}</h3>
    </div>
  );
};

export default Add;
