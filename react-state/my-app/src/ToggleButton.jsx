import { useState } from 'react';

export default function ToggleButton({ color, text }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  const backgroundColor = isClicked ? color : 'lightgrey';

  return (
    <button onClick={handleClick} style={{ backgroundColor: backgroundColor }}>
      {text}
    </button>
  );
}
