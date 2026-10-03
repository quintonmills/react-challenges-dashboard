// design and implement a React counter component that maintains a 
// numeric value and allows users to modify it through button 
// interactions. The component should handle state updates and
//  reflect changes immediately in the UI.

import React from 'react';
import { useState } from 'react';

export default function ComponentCounter(){
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
    return (
    <div>
      {/* Display the current count */}
      <p>Count: {count}</p>
      {/* Add buttons to increment and decrement the count */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}