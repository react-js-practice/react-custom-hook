import { useState } from 'react';

const useToggle = (initialValue) => {
  const [toggle, setToggle] = useState(initialValue);

  const toggleMe = () => setToggle((prev) => (prev = !prev));
  return {
    toggle,
    toggleMe,
  };
};

export default useToggle;
