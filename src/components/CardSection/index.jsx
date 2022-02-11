import React from 'react';
import EggDesktop from '../../images/desktop/image-transform.jpg';
import EggMobile from '../../images/mobile/image-transform.jpg';
import WineGDesktop from '../../images/desktop/image-stand-out.jpg';
import WineGMobile from '../../images/mobile/image-stand-out.jpg';
const CardSection = () => {
  return(
      <>
      <section className=' w-full'>
          <div className="container flex flex-col-reverse md:flex-row">
              <div className="w-12/12 md:w-6/12 bg-white grid content-center py-4 md:py-0 ">
                    <div className="px-4 w-12/12 md:w-8/12 m-auto">
                    <h2 className="text-left text-3xl md:text-5xl py-4">Transform your brand</h2>
                    <p className='py-4 text-darkGblue text-left text-xl'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>

                    <a href="/" className='text-xl font-bold uppercase border-b-4 border-yellow '>Learn More</a>
                    </div>                  

              </div>
              <div className="w-12/12 md:w-6/12  bg-yellow py-4 md:py-0 ">
                            <img src={EggDesktop} alt="" className='hidden md:block' />
                            <img src={EggMobile} alt="" className='block md:hidden'/>
              </div>

          </div>

                <div className="container flex flex-col md:flex-row my-4 md:my-0">
                    <div className="w-12/12 md:w-6/12  bg-softRed py-4 md:py-0 ">
                            <img src={WineGDesktop} alt="" className='hidden md:block' />
                            <img src={WineGMobile} alt="" className='block md:hidden'/>
              </div>
              <div className="w-12/12 md:w-6/12 bg-white grid content-center ">
                    <div className="px-4 w-12/12 md:w-9/12 m-auto py-4 md:py-4">
                    <h2 className="text-left text-3xl md:text-5xl py-4">Stand out to the right audience</h2>
                    <p className='py-4 text-darkGblue text-left text-xl'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>

                    <a href="/" className='text-xl font-bold uppercase border-b-4 border-softRed '>Learn More</a>
                    </div>                  

              </div>
              

          </div>

      </section>
      </>
  );
};

export default CardSection;
