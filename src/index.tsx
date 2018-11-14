import React from 'react';

interface doubleOptions {
  num: number;
}

export default function double(
  { num }: doubleOptions = { num: 0 }
): JSX.Element {
  return <div>{num}</div>;
}
