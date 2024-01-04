import React from "react";

const HeroContent = () => {
  return (
    <>
      {/* Hero Title */}
      <div className="grid grid-cols-4 leading-tight">
        <h1 className="col-span-3 text-[11.5vw] p-0 leading-[0.750] -ml-3 select-none">
          Full Stack
        </h1>
        <div className="col-span-1 col-start-4 self-end text-darkGray font-medium text-[20px]">
          portfolio@2024
        </div>
        <h1 className="col-span-full justify-self-end text-[11.5vw] p-0 select-none">
          Web Developer
        </h1>
      </div>

      {/* Hero Text */}
      <div className="grid grid-cols-4">
        <div className="col-span-1 col-start-1 self-end text-darkGray font-medium text-[20px]">{`(scroll)`}</div>
        <div className="col-span-2 col-start-3 p-0 max-w-xl">
          Hello, I am <span className="underline">Adam</span>. Welcome to my
          personal portfolio, where I showcase my passion for creating
          exceptional web experiences.
        </div>
      </div>
    </>
  );
};

export default HeroContent;
