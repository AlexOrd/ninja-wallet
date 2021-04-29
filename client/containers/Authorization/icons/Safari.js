import React from 'react';

export function Safari({ width = '25px', height = '25px', ...restProps }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      {...restProps}
    >
      <circle cx={256} cy={256} r={256} fill="#2196f3" />
      <path fill="#fafafa" d="M224 224L96 416l192-128z" />
      <path fill="#f44336" d="M224 224l64 64L416 96z" />
    </svg>
  );
}
