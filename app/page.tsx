import Card from '@/components/card/card';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='w-full h-dvh flex flex-row  gap-4'>
      <div className='w-[75%] h-fit rounded-lg relative'>
        <Image
          src={'/qitchen-home-Image.png'}
          alt='qitchen background image'
          width={500}
          height={1000}
          className='rounded-lg object-contain w-full'
        />
        <div className={'absolute bottom-20 left-12'}>
          <p
            className={`text-default text-[140px] leading-[1] ${playfair.className} flex flex-col`}
          >
            <span>Sushi</span>
            <span>Sensation</span>
          </p>
        </div>
        <div
          className={
            'flex gap-4  bg-muted w-fit absolute right-0 bottom-0 px-4 py-2 text-default rounded-ss-xl rounded-ee-md '
          }
        >
          <div>
            <a
              href={'http://www.instagram.com/'}
              target='_blank'
              className='flex gap-4 items-center group transition-all'
            >
              <span className={'text-md font-thin uppercase'}>
                <Image
                  alt={`qitchen social link - instagram`}
                  src={'/instagram-badge.svg'}
                  width={80}
                  height={80}
                  className='size-8 text-white group-hover:scale-110  duration-100 ease-in-out'
                />
              </span>
            </a>
          </div>
          <div>
            <a
              href={'http://www.facebook.com/'}
              target='_blank'
              className='flex gap-4 items-center group transition-all'
            >
              <span className={'text-md font-thin uppercase'}>
                <Image
                  alt={`qitchen social link - instagram`}
                  src={'/facebook-badge.svg'}
                  width={80}
                  height={80}
                  className='size-8 text-white group-hover:scale-110  duration-100 ease-in-out'
                />
              </span>
            </a>
          </div>
          <div>
            <a
              href={'http://www.twitter.com/'}
              target='_blank'
              className='flex gap-4 items-center group transition-all'
            >
              <span className={'text-md font-thin uppercase'}>
                <Image
                  alt={`qitchen social link - instagram`}
                  src={'/twitter-badge.svg'}
                  width={80}
                  height={80}
                  className='size-8 text-white group-hover:scale-110  duration-100 ease-in-out'
                />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className='w-[25%] flex flex-col gap-2 lg:gap-4'>
        <Card link='/menu' src='/qitchen-menu-image.png' text='menu' />
        <Card
          link='/reservation'
          src='/qitchen-reservation-image.png'
          text='reservation'
        />
        <Card
          link='/about'
          src='/qitchen-restaurant-image.png'
          text='our restaurant'
        />
      </div>
    </main>
  );
}
