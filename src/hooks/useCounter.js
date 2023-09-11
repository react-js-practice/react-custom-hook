import { useState } from 'react';

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
}

export default useCounter;
