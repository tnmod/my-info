'use client';
import { useState, useEffect } from 'react';
import '@/app/globals.css';
import Image from "next/image";
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
  {
    title: 'About',
    href: '/about',
  }
]

export const RootHeader = () => {
  const [isDivHidden, setIsDivHidden] = useState(false);

  const items = data.map((item, index) => {
    return (
      <li key={index} className='group/item py-4 h-full flex justify-center items-center'>
        <a href={item.href} className='group-hover/item:scale-125 transition-all duration-200 text-base text-black font-bold'>{item.title}</a>
      </li>
    )
  })

  const handleToggle = () => {
    console.log('toggled');
  }


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 40) {
        setIsDivHidden(true);
      } else {
        setIsDivHidden(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`w-full fixed backdrop-blur-xl h-20 items-center flex z-50`}>
      <div className={`flex-row flex h-full justify-between w-full opacity-0 transform transition-all duration-500 px-6 ${isDivHidden && 'opacity-100'}`}>
        <div className='h-full flex justify-center items-center'>
          <a href='/' className={`flex`}>
            <h1 className='text-2xl font-bold text-black'>tnmod</h1>
            <h6 className='text-xs font-light text-black'>.dev</h6>
          </a>
        </div>
        <nav className='hidden md:flex'>
          <ul className="flex flex-row gap-2">
            {items}
          </ul>
        </nav>

      </div>
      <div className={`flex h-full absolute w-full justify-center items-center transform transition-all duration-500 ${isDivHidden && 'opacity-0'}`}>
        <nav >
          <ul className="flex flex-row gap-2">
            {items}
          </ul>
        </nav>
      </div>
    </header>
  );
}
