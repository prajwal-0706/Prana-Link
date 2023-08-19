import React, { useState } from 'react';
import './button.css';

const Buttons = ({ name, children }) => {
  // const [open, setopen] = useState(false);
  return (
    <>
      <div className="home-btn">{name}</div>
    </>
  );
};

export default Buttons;
