import { useState } from 'react';
import './HotButton.css';

export default function HotButton() {
  const [clicks, setClicks] = useState(0);

  function getTemperature() {
    if (clicks < 3) return 'extra-cold';
    if (clicks < 6) return 'cold';
    if (clicks < 9) return 'warm';
    if (clicks < 12) return 'warmer';
    if (clicks < 15) return 'hot';
    return 'extra-hot';
  }

  const temperature = getTemperature();

  return (
    <>
      <button className={temperature} onClick={() => setClicks(clicks + 1)}>
        Hot Button
      </button>
      <p>The button has been clicked {clicks} times.</p>
    </>
  );
}
