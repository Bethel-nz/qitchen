'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import MenuList from './menu-list';
const playfair = Playfair_Display({ subsets: ['latin'] });

import data from '../data';
import Lenis from '@studio-freight/lenis';
import ScrollButton from './scroll-button';

export default function Side() {
  const sideRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const scroll = (amount: number) => {
    if (sideRef.current) {
      sideRef.current.scrollTop += amount;
    }
  };
  return (
    <div
      ref={sideRef}
      className={
        ' border border-default flex content-center flex-col items-center gap-y-12 rounded-lg pt-20  h-[96%] relative overflow-scroll'
      }
    >
      <div className={'w-[38em] flex flex-col'}>
        <span className={'mx-auto'}>
          <Image
            src={'/maki.png'}
            alt='maki banner'
            width={200}
            height={200}
            className='h-12 object-contain w-52 '
          />
        </span>
        <div className='w-full px-4'>
          <MenuList data={data.maki} />
        </div>
      </div>
      <div className={'w-[38em] flex flex-col'}>
        <span className={'mx-auto'}>
          <Image
            src={'/uramaki.png'}
            alt='maki banner'
            width={200}
            height={200}
            className='h-12 object-contain w-52'
          />
        </span>
        <div className='w-full px-4'>
          <MenuList data={data.uramaki} />
        </div>
      </div>
      <div className={'w-[38em] flex flex-col'}>
        <span className={'mx-auto '}>
          <Image
            src={'/special_rolls.png'}
            alt='maki banner'
            width={200}
            height={200}
            className='h-12 object-contain w-52'
          />
        </span>
        <div className='w-full px-4'>
          <MenuList data={data.special_rolls} />
        </div>
      </div>
      <div className='fixed right-12 gap-2 flex flex-col bottom-10'>
        <ScrollButton direction='up' onClick={() => scroll(-200)} />
        <ScrollButton direction='down' onClick={() => scroll(200)} />
      </div>
    </div>
  );
}
