import React from 'react';
import ArrowDown from '../../images/icon-arrow-down.svg';
import Navbar from '../Navbar';

const Hero = () => {
  return (
    <>
    <header className='hero-bg container'>
      <Navbar/>
    <div className="w-12/12 md:w-10/12  m-auto py-2 md:py-8 mt-8 md:mt-8">
    <div className="flex flex-col  items-center mt-1 md:mt-8">
        <h1 className='text-center text-3xl md:text-6xl uppercase tracking-widest text-white mb-4 md:mb-6'>We are creatives</h1>
      <img src={ArrowDown} alt="" className='h-24 w-8 md:h-auto md:w-auto mt-4 md:mt-8 pt-4 md:pt-8 animate-bounce' />
    </div>
    </div>
    

      
    </header>

    </>
  );
};

export default Hero;
