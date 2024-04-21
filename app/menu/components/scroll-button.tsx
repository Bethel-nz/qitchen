import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { ButtonHTMLAttributes, FC } from 'react';

type prop = {
  direction: 'up' | 'down';
};
const ScrollButton: FC<ButtonHTMLAttributes<HTMLButtonElement> & prop> = ({
  direction,
  ...rest
}) => {
  const scroll = (amount: number) => {
    window.scrollBy({
      top: amount,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className='bg-muted text-default p-2 rounded-md flex hover:border-default hover:border items-center'
      {...rest}
    >
      {direction === 'down' ? (
        <ChevronDown className='h-4 text-default' />
      ) : (
        <ChevronUp className='h-4 text-default' />
      )}
    </button>
  );
};

export default ScrollButton;
