import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({
  src,
  link,
  text,
}: {
  src: string;
  link: string;
  text: string;
}) {
  return (
    <div className='relative rounded-lg h-[265px] w-96 border-muted overflow-hidden '>
      <>
        <Image
          src={src}
          alt={`${text} - card image`}
          width={500}
          height={500}
          className='h-72 w-96 rounded-lg absolute -z-20'
        />
      </>
      <div className=' bg-muted w-fit absolute right-0 bottom-0 px-4 py-2 text-default rounded-ss-xl rounded-ee-md '>
        <Link
          href={link}
          className='flex gap-4 items-center group transition-all'
        >
          <span className={'text-md font-thin uppercase'}>{text}</span>

          <Image
            alt={`${text} - link arrow`}
            src={'/link-badge.svg'}
            width={80}
            height={80}
            className='size-8 text-white group-hover:translate-x-2  duration-100 ease-in-out'
          />
        </Link>
      </div>
    </div>
  );
}
