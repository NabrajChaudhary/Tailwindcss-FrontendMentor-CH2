import React from 'react';

const ImageData=[
    {id:1,
    desktopImg:'./desktop/image-gallery-milkbottles.jpg',
    mobileImg:'./mobile/image-gallery-milkbottles.jpg'},
    {id:2,
    desktopImg:'./desktop/image-gallery-orange.jpg',
    mobileImg:'./mobile/image-gallery-orange.jpg'},
   {id:3,
     desktopImg:'./desktop/image-gallery-cone.jpg',
    mobileImg:'./mobile/image-gallery-cone.jpg'},
    {id:4,
    desktopImg:'./desktop/image-gallery-sugarcubes.jpg',
    mobileImg:'./mobile/image-gallery-sugar-cubes.jpg'},

]
const ImageSection = () => {
  return (
      <>
      <section className='w-full'>
          <div className="container w-12/12">
              <div className="grid grid-cols-2 md:grid-cols-4">
                  {ImageData.map(({id,desktopImg,mobileImg})=>(
                      <div className="" key={id}>
                          <img src={desktopImg} alt="" className='h-100 w-100 hidden md:block'/>
                          <img src={mobileImg} alt="" className='block md:hidden' />
                      </div>
                  ))}
              </div>
          </div>
      </section>
      </>
  );
};

export default ImageSection;
