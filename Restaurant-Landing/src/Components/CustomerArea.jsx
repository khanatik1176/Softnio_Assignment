'use client';
import React, { useState, useEffect, useRef } from 'react';
import leftBtn from '../assets/left-btn.png';
import rightBtn from '../assets/right-btn.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Video from '../assets/Video.png';
import Customer from '../assets/Customer.png';
const CustomerArea = () => {
  const [activeItem, setActiveItem] = useState('item1');
  const items = ['item1', 'item2', 'item3', 'item4'];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = items.indexOf(activeItem);
      const nextIndex = (currentIndex + 1) % items.length;
      setActiveItem(items[nextIndex]);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); 
  }, [activeItem]); 

  const handlePrev = () => {
    const currentIndex = items.indexOf(activeItem);
    const prevIndex = (currentIndex - 1 + items.length) % items.length; 
    setActiveItem(items[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = items.indexOf(activeItem);
    const nextIndex = (currentIndex + 1) % items.length; 
    setActiveItem(items[nextIndex]);
  };

  return (
    <div className='bg-white md:bg-multiple-bg bg-no-repeat bg-top-left h-250 xs:h-250 sm:h-280 md:h-160 lg:h-160 xl:h-160 2xl:h-170 about-area md:overflow-hidden multiple-bg'>
      <div className="Customer-text-area">
        <span className='bg-foodclr w-1 h-1 p-1.5 flex justify-start items-center relative left-5 top-10 xs:left-5 xs:top-10  sm:left-10 sm:top-10 md:left-36 md:top-10 lg:left-36 lg:top-10 xl:left-36 xl:top-10 2xl:left-60 2xl:top-16'></span>
        <p className='text-foodclr font-Roboto text-lg font-bold relative left-10 -bottom-5 xs:left-10 xs:-bottom-5 sm:left-16 md:left-40 lg:left-40 xl:left-42 2xl:left-66 2xl:-bottom-11'>Crispy, Every Bite Taste</p>
        <h1 className='font-BebusNeue font-bold text-foodtxtclr text-2xl xs:text-3xl sm:text-4xl md:text-3xl lg:text-5xl relative left-5 top-10 xs:top-10 xs:left-5  sm:left-10 md:left-36 lg:left-36 xl:left-36 2xl:left-60 2xl:top-16 w-[250px]  xs:w-[300px] sm:w-[500px] md:w-full'>WHAT SOME OF MY CUSTOMER SAY</h1>
      </div>

      <div className="video-area bg-customerclr bg-customer-bg bg-no-repeat bg-left-bottom w-[350px] xs:w-[400px] h-[700px] sm:w-[600px] sm:h-[800px] md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[400px] xl:w-[900px] xl:h-[400px] 2xl:w-[1100px] 2xl:h-[400px] relative left-5 top-20 xs:left-4 xs:top-20 sm:left-10 sm:top-20 md:left-30 md:top-30 lg:left-30 lg:top-26 xl:left-60 xl:top-20  2xl:left-100 2xl:top-26">
        <hr  className='relative top-165 xs:top-165 sm:top-190 md:top-90 md:left-8 lg:top-90 lg:left-20 xl:top-90 xl:left-24 2xl:top-90 2xl:left-20 border-AboutNmbr w-[310px] xs:w-[360px] sm:w-[560px] md:w-[300px] lg:w-[270px] xl:w-[340px] 2xl:w-[440px]'/>
        <div className="inner-area flex flex-col-reverse md:flex-row">
          <div className='slider-area mt-10 relative w-full'>
            <div className="carousel-area carousel w-full h-96">
              <div id="item1" className={`carousel-item w-full h-full ${activeItem === 'item1' ? 'block' : 'hidden'}`}>
                <div className="text-area 2xl:w-[600px]">
                <h1 className='font-Roboto font-normal text-xl text-Aboutclr w-[280px] xs:w-[300px] sm:w-[450px] md:w-[250px] lg:w-[250px] xl:w-[300px] 2xl:w-[300px] relative left-10 top-6 xs:left-12 xs:top-6 sm:left-12 sm:top-6 md:left-10 md:top-4 lg:left-22 lg:top-4 xl:left-24 xl:top-5 2xl:left-24 2xl:top-10'>
                  <span className='text-5xl font-Cotoris font-bold text-Aboutclr absolute -left-5 bottom-34 xs:-left-5 xs:bottom-36 sm:-left-5 sm:bottom-20 md:-left-6 md:bottom-40 lg:-left-7 lg:bottom-40 xl:-left-8 xl:bottom-32 2xl:-left-8 2xl:bottom-32'>“</span>
                    You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.
                </h1>
                </div>

                <div className="lower-area flex justify-between relative top-36 xs:top-27 sm:top-26 md:top-18 md:left-8 lg:top-20 lg:left-16 xl:top-24 xl:left-14 2xl:top-24 2xl:left-10">
                  <div className="lower-text-area relative left-12 xs:left-12 sm:left-12 md:left-3 lg:left-5 xl:left-10 2xl:left-10">
                    <h3 className='text-AboutNmbr font-bold lg:text-base xl:text-lg font-BebusNeue'>KHALID AL DAWSRY</h3>
                    <p className='text-Aboutclr font-Roboto lg:text-xs xl:text-sm'>Jeddah, Saudi</p>
                  </div> 
                
                  <div className="image-area relative right-10 xs:right-10 sm:right-10 md:right-10 lg:right-22 lg:bottom-1 xl:bottom-0 xl:right-20 2xl:right-30 flex flex-col items-center">
                      <img src={Customer} alt="Customer" className='' />
                      <span className='w-12 h-1 bg-foodclr mt-3 xs:mt-2 sm:mt-3 md:mt-2 lg:mt-1 xl:mt-3 2xl:mt-3'></span>
                </div>
                </div>

              </div>
              <div id="item2" className={`carousel-item w-full h-full ${activeItem === 'item2' ? 'block' : 'hidden'}`}>
                <div className="text-area 2xl:w-[600px]">
                  <h1 className='font-Roboto font-normal text-xl text-Aboutclr w-[280px] xs:w-[300px] sm:w-[450px] md:w-[250px] lg:w-[250px] xl:w-[300px] 2xl:w-[300px] relative left-10 top-6 xs:left-12 xs:top-7 sm:left-12 sm:top-7 md:left-10 md:top-4 lg:left-22 lg:top-4 xl:left-24 xl:top-5 2xl:left-24 2xl:top-10'>
                  <span className='text-5xl font-Cotoris font-bold text-Aboutclr absolute -left-5 bottom-20 xs:-left-5 xs:bottom-22 sm:-left-5 sm:bottom-14 md:-left-6 md:bottom-40 lg:-left-7 lg:bottom-26 xl:-left-8 xl:bottom-18 2xl:-left-8 2xl:bottom-20'>“</span> The service was excellent, and the ambiance was perfect for a family dinner. The food was delicious and well-presented.
                  </h1>
                </div>

                <div className="lower-area flex justify-between relative top-50 xs:top-41 sm:top-33 md:top-32 md:left-8 lg:top-32 xl:top-38 xl:left-14 2xl:top-38 2xl:left-10">
                  <div className="lower-text-area relative left-12 xs:left-12 sm:left-12 md:left-3 lg:left-13 lg:top-2 xl:top-0 xl:left-10 2xl:left-10">
                    <h3 className='text-AboutNmbr font-bold lg:text-base xl:text-lg font-BebusNeue'>KHALID AL DAWSRY</h3>
                    <p className='text-Aboutclr font-Roboto lg:text-xs xl:text-sm'>Jeddah, Saudi</p>
                  </div> 
                
                  <div className="image-area relative right-10 xs:right-10 sm:right-10 md:right-10 lg:right-14 lg:top-1 xl:top-0 xl:right-20 2xl:right-30 flex flex-col items-center">
                      <img src={Customer} alt="Customer" className='' />
                      <span className='w-12 h-1 bg-foodclr mt-3 xs:mt-2 sm:mt-3 md:mt-2 lg:mt-1 xl:mt-3 2xl:mt-3'></span>
                </div>
                </div>

              </div>
              <div id="item3" className={`carousel-item w-full h-full ${activeItem === 'item3' ? 'block' : 'hidden'}`}>
                <div className="text-area 2xl:w-[600px]">
                  <h1 className='font-Roboto font-normal text-xl text-Aboutclr w-[280px] xs:w-[300px] sm:w-[450px] md:w-[250px] lg:w-[250px] xl:w-[300px] 2xl:w-[300px] relative left-10 top-6 xs:left-12 xs:top-7 sm:left-12 sm:top-7 md:left-10 md:top-4 lg:left-22 lg:top-4 xl:left-24 xl:top-5 2xl:left-24 2xl:top-10'>
                  <span className='text-5xl font-Cotoris font-bold text-Aboutclr absolute -left-5 bottom-20 xs:-left-5 xs:bottom-22 sm:-left-5 sm:bottom-14 md:-left-6 md:bottom-40 lg:-left-7 lg:bottom-26 xl:-left-8 xl:bottom-18 2xl:-left-8 2xl:bottom-20'>“</span> I loved the variety of dishes available. The flavors were authentic, and the portions were generous. Will visit again!
                  </h1>
                </div>

                <div className="lower-area flex justify-between relative top-50 xs:top-41 sm:top-33 md:top-32 md:left-8 lg:top-32 xl:top-38 xl:left-14 2xl:top-38 2xl:left-10">
                  <div className="lower-text-area relative left-12 xs:left-12 sm:left-12 md:left-3 lg:left-13 lg:top-2 xl:top-0 xl:left-10 2xl:left-10">
                    <h3 className='text-AboutNmbr font-bold lg:text-base xl:text-lg font-BebusNeue'>KHALID AL DAWSRY</h3>
                    <p className='text-Aboutclr font-Roboto lg:text-xs xl:text-sm'>Jeddah, Saudi</p>
                  </div> 
                
                  <div className="image-area relative right-10 xs:right-10 sm:right-10 md:right-10 lg:right-14 lg:top-1 xl:top-0 xl:right-20 2xl:right-30 flex flex-col items-center">
                      <img src={Customer} alt="Customer" className='' />
                      <span className='w-12 h-1 bg-foodclr mt-3 xs:mt-2 sm:mt-3 md:mt-2 lg:mt-1 xl:mt-3 2xl:mt-3'></span>
                </div>
                </div>
              </div>
              <div id="item4" className={`carousel-item w-full h-full ${activeItem === 'item4' ? 'block' : 'hidden'}`}>
                <div className="text-area 2xl:w-[600px]">
                  <h1 className='font-Roboto font-normal text-xl text-Aboutclr w-[280px] xs:w-[300px] sm:w-[450px] md:w-[250px] lg:w-[250px] xl:w-[300px] 2xl:w-[300px] relative left-10 top-6 xs:left-12 xs:top-7 sm:left-12 sm:top-7 md:left-10 md:top-4 lg:left-22 lg:top-4 xl:left-24 xl:top-5 2xl:left-24 2xl:top-10'>
                  <span className='text-5xl font-Cotoris font-bold text-Aboutclr absolute -left-5 bottom-27 xs:-left-5 xs:bottom-22 sm:-left-5 sm:bottom-14 md:-left-6 md:bottom-40 lg:-left-7 lg:bottom-26 xl:-left-8 xl:bottom-18 2xl:-left-8 2xl:bottom-20'>“</span> A great place to dine with friends. The staff was friendly, and the food was served hot and fresh. Highly recommended!
                  </h1>
                </div>
                <div className="lower-area flex justify-between relative top-43 xs:top-41 sm:top-33 md:top-32 md:left-8 lg:top-32 xl:top-38 xl:left-14 2xl:top-38 2xl:left-10">
                  <div className="lower-text-area relative left-12 xs:left-12 sm:left-12 md:left-3 lg:left-13 lg:top-2 xl:top-0 xl:left-10 2xl:left-10">
                    <h3 className='text-AboutNmbr font-bold lg:text-base xl:text-lg font-BebusNeue'>KHALID AL DAWSRY</h3>
                    <p className='text-Aboutclr font-Roboto lg:text-xs xl:text-sm'>Jeddah, Saudi</p>
                  </div> 
                
                  <div className="image-area relative right-10 xs:right-10 sm:right-10 md:right-10 lg:right-14 lg:top-1 xl:top-0 xl:right-20 2xl:right-30 flex flex-col items-center">
                      <img src={Customer} alt="Customer" className='' />
                      <span className='w-12 h-1 bg-foodclr mt-3 xs:mt-2 sm:mt-3 md:mt-2 lg:mt-1 xl:mt-3 2xl:mt-3'></span>
                </div>
                </div>

              </div>
            </div>
          </div>

          <div className="image-area">
            <img src={Video} alt="Video" className=' sm:w-[700px] sm:h-[450px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[400px] xl:w-[800px] xl:h-[400px] 2xl:w-[1100px] 2xl:h-[400px]' />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 relative -bottom-20 left-1 xs:-bottom-20 xs:left-1 sm:-bottom-22 sm:left-6 md:bottom-94 md:left-60 lg:bottom-88 lg:left-104 xl:bottom-116 xl:left-120 2xl:bottom-110 2xl:left-115">
        <button
          className='bg-white w-16 h-16 p-1.5 rounded-full border shadow-xl flex justify-center items-center mx-2'
          onClick={handlePrev}
        >
          <img src={leftBtn} alt="left button" />
        </button>
        <button
          className='bg-white w-16 h-16  p-1.5 rounded-full border shadow-xl flex justify-center items-center mx-2'
          onClick={handleNext}
        >
          <img src={rightBtn} alt="right button" />
        </button>
      </div>
    </div>
  );
}

export default CustomerArea;