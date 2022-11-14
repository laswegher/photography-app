import React from 'react';
import { pic1, pic2, pic3, pic4, pic5 } from '../data/work_data';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WorkGallery = () => {
  return (
    <div className="md:h-[400px] grid gap-5 grid-cols-4 grid-rows-2">
      <div className=" col-span-4 md:col-span-2 row-span-2 rounded-xl overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={pic1}
          alt="/"
        />
      </div>
      <div className=" col-span-4 md:col-span-1 row-span-1 rounded-xl overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={pic2}
          alt="/"
        />
      </div>
      <div className=" col-span-4 md:col-span-1 row-span-1 rounded-xl overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={pic3}
          alt="/"
        />
      </div>
      <div className=" col-span-4 md:col-span-1 row-span-1 rounded-xl overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={pic4}
          alt="/"
        />
      </div>
      <div className=" col-span-4 md:col-span-1 row-span-1 rounded-xl overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={pic5}
          alt="/"
        />
      </div>
    </div>
  );
};

export default WorkGallery;
