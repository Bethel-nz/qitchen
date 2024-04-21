
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

import Form from './components/form';
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function page() {
  return (
    <main className='w-full h-dvh flex flex-row  gap-4'>
      <div className='w-[48%] h-full rounded-lg relative'>
        <Image
          src={'/qitchen-reservation-bg-image.png'}
          alt='qitchen resevation background image'
          width={500}
          height={1000}
          className='rounded-lg object-contain w-full'
        />
        <div className={'absolute bottom-20 left-12'}>
          <p
            className={`text-default text-[120px] leading-[1] ${playfair.className} flex flex-col`}
          >
            <span>Book</span>
            <span>A Table</span>
          </p>
        </div>
      </div>
      <div className='w-[50%] flex border border-default rounded-lg h-[96%] justify-center'>
        <div className='w-[38em] flex flex-col'>
          <div className='mx-auto mt-12'>
            <Image
              src={'/reservation-banner.png'}
              alt='reservation banner'
              width={200}
              height={200}
              className='h-12 object-contain w-52 '
            />
          </div>
          <div className={'mx-auto mt-5'}>
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
}
