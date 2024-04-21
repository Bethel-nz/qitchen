import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function page() {
  return (
    <main className='w-full h-dvh flex flex-row  gap-4'>
      <div className='w-[48%] h-fit rounded-lg relative'>
        <Image
          src={'/qitchen-contact-bg.png'}
          alt='qitchen background image'
          width={500}
          height={1000}
          className='rounded-lg object-contain w-full'
        />
        <div className={'absolute bottom-20 left-12'}>
          <p
            className={`text-default text-[140px] leading-[1] ${playfair.className} flex flex-col`}
          >
            <span>Contact</span>
          </p>
        </div>
      </div>
      <div className='w-[50%] flex flex-col gap-y-4 '>
        <div className='mx-auto w-full'>
          <div className={'flex flex-row gap-4'}>
            <div className='flex flex-col text-left h-96 w-96  items-center gap-8 border border-default/60 rounded-lg p-12 justify-center'>
              <div>
                <Image
                  src={'/opening-hours.svg'}
                  alt='opening hours banner'
                  width={24}
                  height={24}
                  className=' object-contain w-52 '
                />
              </div>
              <div>
                <Image
                  src={'/schedule.svg'}
                  alt='schedule.png'
                  width={100}
                  height={100}
                  className='h-full w-64 object-contain'
                />
              </div>
            </div>
            <div className='flex gap-4 flex-wrap w-96 h-96 '>
              <Image
                src={'/qitchen-contact-bg.png'}
                alt={' image card 1'}
                height={500}
                width={500}
                className={'size-44 rounded-lg'}
              />
              <Image
                src={'/sushi-card-2.png'}
                alt={' image card 2'}
                height={500}
                width={500}
                className={'size-44 rounded-lg object-fill'}
              />
              <Image
                src={'/sushi-card-1.png'}
                alt={' image card 3'}
                height={500}
                width={500}
                className={'size-44 rounded-lg'}
              />
              <Image
                src={'/qitchen-about-bg.png'}
                alt={' image card 4'}
                height={500}
                width={500}
                className={'size-44 rounded-lg'}
              />
            </div>
          </div>

          <div className={'flex flex-row gap-4 mt-12'}>
            <div>
              <div className='relative rounded-lg h-96 w-96 border-muted overflow-hidden '>
                <>
                  <Image
                    src={'/qitchen-location.png'}
                    alt={`route - card image`}
                    width={500}
                    height={500}
                    className='h-96 w-96 rounded-lg absolute -z-20'
                  />
                </>
                <div className=' bg-muted w-fit absolute right-0 bottom-0 px-4 py-2 text-default rounded-ss-xl rounded-ee-md '>
                  <Link
                    href={'/'}
                    className='flex gap-4 items-center group transition-all'
                  >
                    <span className={'text-md font-thin uppercase'}>route</span>

                    <Image
                      alt={` route - link arrow`}
                      src={'/link-badge.svg'}
                      width={80}
                      height={80}
                      className='size-8 text-white group-hover:translate-x-2  duration-100 ease-in-out'
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex flex-col h-96 w-96  items-center gap-8 space-y-4 border border-default/60 rounded-lg p-12 justify-center'>
              <div>
                <Image
                  src={'/get-in-touch-banner.svg'}
                  alt='opening hours banner'
                  width={24}
                  height={24}
                  className=' object-contain w-64 '
                />
              </div>
              <div>
                <Image
                  src={'/get-in-touch.svg'}
                  alt='schedule.png'
                  width={100}
                  height={100}
                  className='h-full w-64 object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
