import React, { useState } from 'react';
import InstagramGallery from './InstagramGallery';
const Instagram = () => {
  return (
    <div className="w-full max-w-[900px] mx-auto px-4">
      <h1 className="max-w-max mx-auto text-2xl mb-5 font-bold text-[#333] border-b-4 border-yellow-200">
        Instagram
      </h1>

      <InstagramGallery />
    </div>
  );
};

export default Instagram;
