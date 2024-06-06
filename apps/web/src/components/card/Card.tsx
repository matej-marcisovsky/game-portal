import { clsx } from 'clsx';
import { memo } from 'react';

enum Position {
  Top,
  Right,
  Bottom,
  Left,
}

export const Card = memo(function Card() {
  return (
    <div className='relative aspect-card min-w-16 max-w-48 rounded-md border border-gray-200 shadow-md'>
      {[Position.Top, Position.Bottom].map((position, key) => (
        <div
          key={key}
          className={clsx('absolute h-2/4 w-full', {
            'left-0 top-0': position === Position.Top,
            'right-0 bottom-0 -scale-100': position === Position.Bottom,
          })}
        >
          {[Position.Left, Position.Right].map((position, key) => (
            <div
              key={key}
              className={clsx('absolute top-0', {
                'left-0': position === Position.Left,
                'right-0': position === Position.Right,
              })}
            />
          ))}
        </div>
      ))}
    </div>
  );
});
