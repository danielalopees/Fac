// Suggested code may be subject to a license. Learn more: ~LicenseLog:2082389213.
import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
