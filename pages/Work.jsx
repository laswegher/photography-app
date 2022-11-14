import React from 'react';
import Hero from '../components/Hero';
import WorkGallery from '../components/WorkGallery';

const Work = () => {
  return (
    <div>
      <Hero
        title="My Works"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore libero incidunt corrupti cupiditate deserunt officia?"
      />

      <div className="my-16">
        <div className="Container">
          <h1 className="max-w-max mx-auto text-2xl mb-5 font-bold text-[#333] border-b-4 border-green-500">
            Instagram
          </h1>
          <WorkGallery />
        </div>
      </div>
    </div>
  );
};

export default Work;
