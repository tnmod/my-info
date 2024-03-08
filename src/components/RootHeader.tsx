'use client';
import { useState, useEffect } from 'react';
import '@/app/globals.css';
import Image from "next/image";
import { useScroll } from '@/hooks/useScroll';
import Icon from "@/images/icon.png"
//https://colorhunt.co/palette/b5c0d0ccd3caf5e8ddeed3d9
type Item = {
  title: string;
  href: string;
}

const Index: Item[] = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Skills',
    href: '#skills',
  },
  {
    title: 'Works',
    href: '#works',
  },
  {
    title: 'Contact',
    href: '#contact',
  }
]

export const RootHeader = () => {
  const { scrollY } = useScroll();

  const items = Index.map((item, index) => {
    return (
      <li key={index} className='group/item py-0.5 h-full flex justify-center items-center cursor-pointer'>
        <a
          className='group-hover/item:-translate-x-3 transition-all duration-200 text-lg text-slate-700 font-medium'
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {item.title}
        </a>
      </li>
    )
  })

  return (
    <header className={`w-full items-start flex justify-between p-5 bg-transparent`}>
      <div className={"w-12 h-12 bg-slate-500"}>
        <Image src={Icon} alt="icon" />
      </div>
      <div className={"w-auto h-auto  flex flex-col"}>
        <ul className='flex flex-col items-end'>
          {items}
        </ul>
      </div>
    </header>
  );
}
