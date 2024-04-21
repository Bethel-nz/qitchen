import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

import Side from './components/side';

const playfair = Playfair_Display({ subsets: ['latin'] });
export default function page() {
  return (
    <main className='w-full flex flex-row gap-4 overflow-hidden h-dvh'>
      <div className='w-[48%] h-fit object-contain relative rounded-lg'>
        <div>
          <Image
            src={'/qitchen-menu-bg-image.png'}
            alt='qitchen background image'
            height={1000}
            width={958}
            className='rounded-lg'
          />
          <div className={'absolute bottom-20 left-12'}>
            <p
              className={`text-default text-[140px] leading-[1] ${playfair.className} flex flex-col`}
            >
              <span>Menu</span>
            </p>
          </div>
        </div>
      </div>
      <div className={'w-1/2 h-full '}>
        <Side />
      </div>
    </main>
  );
}
