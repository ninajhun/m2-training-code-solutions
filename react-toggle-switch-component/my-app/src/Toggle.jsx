import { useState } from 'react';
import './Toggle.css';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const isOnClass = isOn ? 'is-on' : '';

  return (
    <>
      <div className="container">
        <div className={`toggle-container ${isOnClass}`}>
          <div className="toggle"></div>
          <div className="toggle-button" onClick={() => setIsOn(!isOn)}></div>
        </div>
        <p>{isOn ? 'ON' : 'OFF'}</p>
      </div>
    </>
  );
}
