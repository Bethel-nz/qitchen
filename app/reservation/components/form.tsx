import React, { useState } from 'react';

export default function Form() {
  return (
    <form className={'flex gap-y-2 flex-col'}>
      <div>
        <input
          type='text'
          placeholder='Name'
          className={
            'border-gray-600 bg-muted rounded-lg p-4 placeholder:text-default placeholder:font-thin w-[32em] border-[1.5px]'
          }
        />
      </div>
      <div>
        <input
          type='email'
          placeholder='Email'
          className={
            'border-gray-600 bg-muted rounded-lg p-4 placeholder:text-default placeholder:font-thin w-[32em] border-[1.5px]'
          }
        />
      </div>
      <div>
        <input
          type='email'
          placeholder='Phone'
          className={
            'border-gray-600 bg-muted rounded-lg p-4 placeholder:text-default placeholder:font-thin w-[32em] border-[1.5px]'
          }
        />
      </div>
      <div className='flex gap-2'>
        <input
          type='text'
          placeholder='Guests'
          className={
            'border-gray-600 bg-muted rounded-lg p-4 placeholder:text-default placeholder:font-thin w-40 border-[1.5px]'
          }
        />
        <input
          type='text'
          placeholder='Date'
          className={
            'border-gray-600 bg-muted rounded-lg p-4 placeholder:text-default placeholder:font-thin w-44 border-[1.5px]'
          }
        />
        <input
          type='email'
          placeholder='Time'
          className={
            'border-gray-600 bg-muted rounded-lg p-4 placeholder:text-default placeholder:font-thin w-40 border-[1.5px]'
          }
        />
      </div>
      <button className='bg-default rounded-lg p-4 text-inverse text-sm w-full'>
        Reserve
      </button>
    </form>
  );
}
