import React from 'react';
import Button from './Button';
import heroImage from '../public/hero-picture.jpg';
import Image from 'next/image';

const Hero = ({ title, text }) => {
  return (
    <div className="CenterComponent relative bg-black/70">
      <div className="absolute inset-0 w-full h-screen -z-10">
        <Image
          className="w-full h-full object-cover"
          src={heroImage}
          alt="/"
          priority
        />
      </div>

      <div className="Container text-white FCenter flex-col text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 text-red-500">
          {title}
        </h1>
        <p className="max-w-[600px] tracking-tight sm:tracking-normal md:tracking-wider mb-7">
          {text}
        </p>
        <Button className="text-red-500">Book</Button>
      </div>
    </div>
  );
};

export default Hero;
