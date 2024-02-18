'use client';
import { useState, useEffect } from 'react';
import '@/app/globals.css';
import Image from "next/image";
import { useScroll } from '@/hooks/useScroll';
type Item = {
  title: string;
  href: string;
}

const data: Item[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
]

export const RootHeader = () => {
  const { scrollY } = useScroll();

  const items = data.map((item, index) => {
    return (
      <li key={index} className='group/item py-4 h-full flex justify-center items-center'>
        <a href={item.href} className='group-hover/item:scale-125 transition-all duration-200 text-base text-black font-bold'>{item.title}</a>
      </li>
    )
  })

  return (
    <header className={`w-full fixed backdrop-blur-xl h-20 items-center flex z-[500]`}>
      <div className={`flex-row flex h-full justify-between w-full opacity-0 transform transition-all duration-500 px-6 ${scrollY > 1 && 'opacity-100'}`}>
        <div className='h-full flex justify-center items-center'>
          <a href='/' className={`flex`}>
            <h1 className='text-2xl font-bold text-black'>tnmod</h1>
            <h6 className='text-xs font-light text-black'>.dev</h6>
          </a>
        </div>
        {
          scrollY > 1 && (
            <div>
              <nav className='hidden z-[500] sm:flex'>
                <ul className="flex flex-row gap-6">
                  {items}
                </ul>
              </nav>
            </div>
          )
        }
      </div>
      {
        !(scrollY > 1) && (
          <div className={`flex h-full absolute w-full justify-center items-center transform transition-all z-[500] duration-500 ${scrollY > 1 && 'opacity-0'}`}>
            <nav >
              <ul className="flex flex-row gap-2">
                {items}
              </ul>
            </nav>
          </div>
        )
      }
    </header>
  );
}
