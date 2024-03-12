import React, { useState } from 'react';

function HelloWorld() {
  const [textColor, setTextColor] = useState('#61dafb');

  const helloWorldStyle = {
    textAlign: 'center',
    marginTop: '50px',
    color: textColor,
  };

  const headingStyle = {
    color: '#61dafb',
  };

  const handleButtonClick = function() {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setTextColor(randomColor);
  };

  return (
    <div style={helloWorldStyle}>
      <h1 style={headingStyle}>Hello, World!</h1>
      <button onClick={handleButtonClick}>Change Color</button>
    </div>
  );
}

export default HelloWorld;
