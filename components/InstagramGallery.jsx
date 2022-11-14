import Image from 'next/image';
import React from 'react';
import pictures from '../data/instagram_data';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const InstagramGallery = () => {
  return (
    <div className="select-none grid items-center md:grid-cols-5 grid-cols-2 mb-40 gap-5 ">
      {pictures.map((pic, index) => {
        return (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative h-[150px] cursor-pointer"
            key={index}
          >
            <div className="group absolute inset-0 FCenter text-white hover:bg-black/40 rounded-xl">
              <FaInstagram
                className="group-hover:block hidden"
                size={30}
              />
            </div>

            <Image
              src={pic}
              alt="/"
              priority
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default InstagramGallery;
