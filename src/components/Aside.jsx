'use client';

import { Colors } from '@/constans/Constants';
import { useState } from 'react';
import { AddIcon } from '@/assets/Icons';

export const Aside = ({ addNote }) => {
  const [showColors, setShowColors] = useState(false);

  const handleColorClick = (color) => {
    addNote(color);
    setShowColors(false);
  };
  return (
    <aside
      className={`w-24 flex-col lg:flex text-center items-center gap-4 lg:border-r lg:border-neutral-200 z-50 absolute lg:relative lg:bottom-auto bottom-0`}
    >
      <button
        className='p-2 w-10 h-10 text-lg rounded-full shadow-md bg-slate-900 hover:scale-105 fixed lg:bottom-auto lg:right-auto bottom-12 right-4 lg:relative flex justify-center items-center transition-all duration-200 '
        onClick={() => setShowColors(!showColors)}
      >
        <AddIcon />
      </button>

      <div className='flex flex-col  gap-2 fixed lg:relative lg:bottom-auto lg:right-auto bottom-28 right-[20px] '>
        {Colors.map((color, index) => (
          <button
            key={index}
            className={`h-8 w-8 rounded-full transform transition-transform duration-300 ease-in-out cursor-pointer shadow-md   ${
              showColors ? 'scale-100  ' : 'scale-0'
            }`}
            onClick={() => handleColorClick(color)}
            style={{
              backgroundColor: color,
              transitionDelay: `${
                showColors ? index * 100 : (Colors.length - index - 1) * 100
              }ms`,
            }}
          ></button>
        ))}
      </div>
    </aside>
  );
};
