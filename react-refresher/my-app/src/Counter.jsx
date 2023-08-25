import { useState } from 'react';
import Button from './Button';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleDecrement() {
    count > 0 && setCount(count - 1);
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <>
      <Button onCustomClick={handleDecrement}>Down</Button>
      {count}
      <Button onCustomClick={handleIncrement}>Up</Button>
    </>
  );
}
