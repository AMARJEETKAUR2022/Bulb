// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line react-refresh/only-export-components
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn(!isOn);
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Set the height to 100% of the viewport height
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: isOn ? 'lightyellow' : 'lightgrey',
  };

  const buttonStyle = {
    marginTop: '20px', // Add space between image and button
  };

  return (
    <div style={containerStyle}>
      <div className="bulb-container">
        <img
          src={isOn ? 'bulb_on.png' : 'bulb_off.png'} // Use different image paths for ON and OFF states
          alt="Bulb"
          width="200px"
          height="200px"
        />
      </div>
      <button type="button" onClick={handleClick} style={buttonStyle}>
        {isOn ? 'OFF' : 'ON'}
      </button>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Toggle />);
