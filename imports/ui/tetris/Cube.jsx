import React, { Component, PropTypes } from 'react';

export default Cube = ({ size, color, top, left }) => {
  const isEmpty = color.length === 2 && color[0] === '_';
  const colorCode = color[color.length - 1].toUpperCase();

  return (
    <div
      className={`cube color-${colorCode}` + (isEmpty ? ' empty' : '')}
      style={{
        width: size + 'px',
        height: size + 'px',
        top: top + 'px',
        left: left + 'px'
      }}
    ></div>
  );
};