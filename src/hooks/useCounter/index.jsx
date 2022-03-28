// Custom Hook

import { useState } from "react";

const UseCounter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return [count, increment, decrement];
};

export default UseCounter;
