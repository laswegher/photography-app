import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gallery_data from '../data/gallery_data';

const Gallery = () => {
  const [rightWidth, setRightWidth] = useState(0);
  const caurosel = useRef();

  useEffect(() => {
    setRightWidth(
      caurosel.current.scrollWidth - caurosel.current.offsetWidth
    );
  });

  return (
    <div
      id="gallery"
      className="CenterComponent flex-col px-4 pt-16"
    >
      <h1 className=" text-2xl font-bold text-[#333] border-b-4 border-yellow-200">
        Gallery
      </h1>
      <div className="w-full max-w-[900px] overflow-hidden shadow-xl p-5 rounded-xl">
        <motion.div
          ref={caurosel}
          drag="x"
          dragConstraints={{ right: 0, left: -rightWidth }}
          className="max-w-[900px] flex gap-10"
        >
          {gallery_data.map((el, index) => {
            return (
              <div
                key={index}
                className=" max-w-[300px] max-h-[400px]"
              >
                <Image
                  src={el}
                  alt="/"
                  draggable={false}
                  priority
                  className="max-w-[300px] h-full rounded-xl object-cover se"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
