import React from 'react';

const ToCall = ({ phone, color, bgColor, children }) => (
  <div style={{ backgroundColor: bgColor }}>
    <a href={`tel:${phone}`} style={{ color: color }}>
      {children}
    </a>
  </div>
);

export default ToCall;
