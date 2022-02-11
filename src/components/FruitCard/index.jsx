import React from 'react';
import CherryDesktop from '../../images/desktop/image-graphic-design.jpg';
import CherryMobile from '../../images/mobile/image-graphic-design.jpg';
import OrangeDesktop from '../../images/desktop/image-photography.jpg';
import OrangeMobile from '../../images/mobile/image-photography.jpg';

const FruitCard = () => {
  return (
      <>
      <section className='w-full'>
          <div className="container flex flex-col md:flex-row">
                 <div className="w-12/12 md:w-6/12  py-0 md:py-0 ">
                            <div className="w-full relative">
                                <img src={CherryDesktop} alt="" className='w-full hidden md:block' />
                            <img src={CherryMobile} alt="" className='w-full block md:hidden'/>
                            <div className="absolute bottom-14 right-0 md:right-16 p-2  w-12/12 md:w-10/12">
                                <div className="w-12/12 md:w-10/12  mx-auto">
                                    <h3 className='text-4xl text-center pb-2'>Graphic Design</h3>
                                <p className='text-md md:text-xl px-2 md:px-6 text-center py-3'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                                </div>
                            </div>
                            </div>
              </div>
              <div className="w-12/12 md:w-6/12   py-0 md:py-0 ">
                                <div className="w-full relative">
                                    <img src={OrangeDesktop} alt="" className=' h-full hidden w-full md:block' />
                            <img src={OrangeMobile} alt="" className='block h-full md:hidden w-full' />
                              <div className="absolute bottom-14 right-0 md:right-16 p-2  w-12/12 md:w-10/12">
                                <div className="w-12/12 md:w-10/12  mx-auto">
                                    <h3 className='text-4xl text-center pb-2'>Photography</h3>
                                <p className='text-md md:text-xl px-2 md:px-6 text-center py-3'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                                </div>
                            </div>
                                </div>
              </div>
           

          </div>
      </section>

      </>
  );
};

export default FruitCard;
