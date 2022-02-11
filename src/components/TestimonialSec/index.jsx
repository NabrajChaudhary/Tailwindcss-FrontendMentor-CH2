import React from 'react';

const testimonialData = [
    {id:1,
    testImg:'./image-emily.jpg',
    testText:`We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`,
    testName:'Emily R.',
    testPost:'Marketing Director'},
        {id:2,
    testImg:'./image-thomas.jpg',
    testText:`Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.`,
    testName:'Thomas S.',
    testPost:'Chief Operating Officer'},
        {id:3,
    testImg:'./image-jennie.jpg',
    testText:`Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!`,
    testName:'Jennie F.',
    testPost:'Business Owner'},
]

const TestimonialSec = () => {
  return (
      <>
      <section className='w-full py-8'>
        <div className="container py-8">
               <div className="w-12/12 m-auto md:w-10/12  bg-white grid justify-items-center py-4 md:py-8 ">
                   <h2 className='text-2xl text-grayishBlue uppercase tracking-widest text-center mb-4'>Client Testimonials</h2>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 mt-6">
                      {testimonialData.map(({id,testImg,testText,testName,testPost})=>(
                          <div className="grid items-center rounded-md hover:shadow-xl " key={id}>
                              <div className="w-32 h-32  justify-self-center p-2">
                                        <img src={testImg} alt="" className='rounded-full' />
                              </div>
                              <p className='text-vDDGblue px-4 text-center text-md font-semibold py-6'>{testText}</p>
                              <h3 className='text-2xl text-center py-4 font-black'>{testName}</h3>
                              <p className='text-center text-xl text-grayishBlue pb-4'>{testPost}</p>
                          </div>
                      ))}
                   </div>
               </div>
        </div>
  

      </section>
      </>
  );
};

export default TestimonialSec;
