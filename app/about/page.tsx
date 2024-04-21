import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function page() {
  return (
    <main className='w-full h-dvh flex flex-row  gap-4'>
      <div className='w-[48%] h-fit rounded-lg relative'>
        <Image
          src={'/qitchen-about-bg.png'}
          alt='qitchen background image'
          width={500}
          height={1000}
          className='rounded-lg object-contain w-full'
        />
        <div className={'absolute bottom-20 left-12'}>
          <p
            className={`text-default text-[140px] leading-[1] ${playfair.className} flex flex-col`}
          >
            <span>About</span>
          </p>
        </div>
      </div>
      <div className='w-[50%] flex flex-col gap-y-4 '>
        <div className='mx-auto w-full'>
          <div className={'flex flex-row gap-4'}>
            <div className='flex flex-col text-left h-80 w-96 gap-8 border border-default/60 rounded-lg p-12 justify-between'>
              <div>
                <p className={`${playfair.className} text-3xl font-light`}>
                  Sushi Artistry Redefined
                </p>
              </div>
              <div>
                <p className={'text-sm '}>
                  Where culinary craftsmanship meets modern elegance. Indulge in
                  the finest sushi, expertly curated to elevate your dining
                  experience.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={'/qitchen-about-image-1.png'}
                alt={' image card 1'}
                height={500}
                width={500}
                className={'h-80 w-96 rounded-lg'}
              />
            </div>
          </div>
          <div className='flex gap-4 my-6'>
            <div className='text-center flex items-center w-64 px-4 py-6 flex-col border border-default/60 rounded-lg'>
              <Image
                src={'/star-rating.svg'}
                alt='star rating'
                width={24}
                height={24}
                className='h-8 object-contain w-24'
              />
              <p className={`${playfair.className} text-lg`}>Trip Advisor</p>
              <p className='font-thin lext-[5px]'>Best Steak House Prague</p>
            </div>
            <div className='text-center flex items-center w-64 px-4 py-6 flex-col border border-default/60 rounded-lg'>
              <Image
                src={'/star-rating.svg'}
                alt='star rating'
                width={24}
                height={24}
                className='h-8 object-contain w-24'
              />
              <p className={`${playfair.className} text-lg`}>Michelin Guide</p>
              <p className='font-thin lext-[5px]'>Best Steak House Prague</p>
            </div>
            <div className='text-center flex items-center w-64 px-4 py-6 flex-col border border-default/60 rounded-lg'>
              <Image
                src={'/star-rating.svg'}
                alt='star rating'
                width={24}
                height={24}
                className='h-8 object-contain w-24'
              />
              <p className={`${playfair.className} text-lg`}>Star Dining</p>
              <p className='font-thin lext-[5px]'>Best Steak House Prague</p>
            </div>
          </div>
          <div className={'flex flex-row gap-4'}>
            <div>
              <Image
                src={'/qitchen-about-image-2.png'}
                alt={' image card 1'}
                height={500}
                width={500}
                className={'h-80 w-96 rounded-lg'}
              />
            </div>
            <div className='flex flex-col text-left h-80 w-96 gap-8 border border-default/60 rounded-lg p-12 justify-between'>
              <div>
                <p className={`${playfair.className} text-3xl font-light`}>
                  Sushi Artistry Redefined
                </p>
              </div>
              <div>
                <p className={'text-sm '}>
                  Where culinary craftsmanship meets modern elegance. Indulge in
                  the finest sushi, expertly curated to elevate your dining
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
