import React from 'react';
import type { FOOD_DATA } from '../data';
import Image from 'next/image';

export default function MenuList({ data }: { data: FOOD_DATA[] }) {
  return (
    <div>
      {data.map((value: FOOD_DATA) => (
        <div
          key={value.description}
          className={
            'w-full my-5 text-default py-4 px-2 hover:bg-black/80 rounded-lg'
          }
        >
          <div
            className={
              'flex justify-between items-center space-x-4 w-full px-2'
            }
          >
            <div>
              <div className='rounded-lg h-42'>
                <Image
                  src={value.image}
                  alt={`${value.title}'s image`}
                  className='rounded-lg object-contain w-full'
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <span className={'flex gap-2 flex-col'}>
              <span className={'flex flex-row gap-4 items-center'}>
                <p className='uppercase'>{value.title}</p>
                {value.special && (
                  <span>
                    <Image
                      src={'/leaf.svg'}
                      width={24}
                      height={24}
                      className='size-4'
                      alt='leaf icon'
                    />
                  </span>
                )}
                <div className={'ml-auto'}>
                  <p className={'text-lg'}>${value.price}</p>
                </div>
              </span>
              <p className={'text-sm font-thin'}>{value.description}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * import React from 'react';
import type { FOOD_DATA } from '../data';
import Image from 'next/image';

export default function MenuList({ data }: { data: FOOD_DATA[] }) {
  return (
    <div>
      {data.map((value: FOOD_DATA) => (
        <div
          key={value.description}
          className={
            'w-full my-5 flex flex-row items-center text-default justify-between py-2 px-2'
          }
        >
          <div
            className={
              'flex justify-between items-center space-x-4 w-full border-2'
            }
          >
            <div className={'ml-4 rounded-lg'}>
              <div className="relative aspect-[500/300]">
                <Image
                  src={value.image}
                  alt={`${value.title}'s image`}
                  layout="fill"
                  object-fit="cover"
                  className='h-28 w-42 object-contain'
                />
              </div>
            </div>
            <span className={'flex gap-2 flex-col'}>
              <span className={'flex flex-row gap-4 items-center'}>
                <p className='uppercase'>{value.title}</p>
                {value.special && (
                  <span>
                    <Image
                      src={'/leaf.svg'}
                      width={24}
                      height={24}
                      className='size-4'
                      alt='leaf icon'
                    />
                  </span>
                )}
                <div className={'ml-auto'}>
                  <p>${value.price}</p>
                </div>
              </span>
              <p className={'text-sm font-thin'}>{value.description}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
*/
