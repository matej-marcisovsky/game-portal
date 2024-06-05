import { memo } from 'react';

const a = {
  a: 3,
  b: 4,
};

export const Card = memo(function Card() {
  return (
    <div className='aspect-card max-w-48 rounded-md shadow-md border border-gray-200'></div>
  );
});
