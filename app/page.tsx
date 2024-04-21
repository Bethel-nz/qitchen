import Card from '@/components/card/card';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link'
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
        <div className='relative rounded-lg h-[265px] w-96 border-muted overflow-hidden '>
      <>
        <Image
          src={'/qitchen-menu-image.png'}
          alt={`Menu - card image`}
          width={500}
          height={500}
          className='h-72 w-96 rounded-lg absolute -z-20'
        />
      </>
      <div className=' bg-muted w-fit absolute right-0 bottom-0 px-4 py-2 text-default rounded-ss-xl rounded-ee-md '>
        <Link
          href={'/menu'}
          className='flex gap-4 items-center group transition-all'
        >
          <span className={'text-md font-thin uppercase'}>menu</span>

          <Image
            alt={`menu - link arrow`}
            src={'/link-badge.svg'}
            width={80}
            height={80}
            className='size-8 text-white group-hover:translate-x-2  duration-100 ease-in-out'
          />
        </Link>
      </div>
    </div>
        <div className='relative rounded-lg h-[265px] w-96 border-muted overflow-hidden '>
      <>
        <Image
          src={'/qitchen-reservation-image.png'}
          alt={`about - card image`}
          width={500}
          height={500}
          className='h-72 w-96 rounded-lg absolute -z-20'
        />
      </>
      <div className=' bg-muted w-fit absolute right-0 bottom-0 px-4 py-2 text-default rounded-ss-xl rounded-ee-md '>
        <Link
          href={'/reservation'}
          className='flex gap-4 items-center group transition-all'
        >
          <span className={'text-md font-thin uppercase'}>reservation</span>

          <Image
            alt={`reservation - link arrow`}
            src={'/link-badge.svg'}
            width={80}
            height={80}
            className='size-8 text-white group-hover:translate-x-2  duration-100 ease-in-out'
          />
        </Link>
      </div>
    </div>
        <div className='relative rounded-lg h-[265px] w-96 border-muted overflow-hidden '>
      <>
        <Image
          src={'/qitchen-restaurant-image.png'}
          alt={`about - card image`}
          width={500}
          height={500}
          className='h-72 w-96 rounded-lg absolute -z-20'
        />
      </>
      <div className=' bg-muted w-fit absolute right-0 bottom-0 px-4 py-2 text-default rounded-ss-xl rounded-ee-md '>
        <Link
          href={'/about'}
          className='flex gap-4 items-center group transition-all'
        >
          <span className={'text-md font-thin uppercase'}>our restaurant</span>

          <Image
            alt={`about - link arrow`}
            src={'/link-badge.svg'}
            width={80}
            height={80}
            className='size-8 text-white group-hover:translate-x-2  duration-100 ease-in-out'
          />
        </Link>
      </div>
    </div>
      </div>
    </main>
  );
}
