'use client';
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Burger from '../assets/Burger.png';
import Pizza from '../assets/Pizza.png';
import Fries from '../assets/FF.png';
import Chicken from '../assets/Chicken.png';
import leftBtn from '../assets/left-btn.png';
import rightBtn from '../assets/right-btn.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Fooditem = () => {
  const sliderRef = useRef(null);

  const [foodItems, setFoodItems] = useState([
    { id: 1, name: 'VEGETABLES BURGER', description: 'Barbecue Italian cuisine pizza', img: Burger },
    { id: 2, name: 'SPACIAL PIZZA', description: 'Barbecue Italian cuisine pizza', img: Pizza },
    { id: 3, name: 'SPECIAL FRENCH FIRES', description: 'Barbecue Italian cuisine pizza', img: Fries },
    { id: 4, name: 'CUISINE CHICKEN', description: 'Barbecue Italian cuisine pizza',img: Chicken },
    { id: 5, name: 'VEGETABLES BURGER', description: 'Barbecue Italian cuisine pizza', img: Burger },
    { id: 6, name: 'VEGETABLES BURGER', description: 'Barbecue Italian cuisine pizza', img: Burger },
    { id: 7, name: 'VEGETABLES BURGER', description: 'Barbecue Italian cuisine pizza', img: Burger },
    { id: 8, name: 'VEGETABLES BURGER', description: 'Barbecue Italian cuisine pizza', img: Burger },
  ]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='bg-fooditemclr md:bg-food-bg bg-no-repeat bg-top-left h-148 xs:h-148 sm:h-140 md:h-152 lg:h-140 xl:h-140 2xl:h-140 about-area md:overflow-hidden'>
      <div className="food-text-area relative md:top-4 lg:top-6 xl:top-6 2xl:top-6">
        <span className='bg-foodclr w-1 h-1 p-1.5 flex justify-start items-center relative left-10 top-8 xs:left-10 xs:top-8 sm:left-20 sm:top-10 md:left-36 md:top-12 lg:left-40 lg:top-7 xl:left-60 xl:top-6 2xl:left-60 2xl:top-6'></span>
        <p className='text-foodclr font-Roboto text-lg font-bold relative left-16 top-3 xs:left-16 xs:top-3 sm:left-26 sm:top-5 md:left-42 md:top-7 lg:left-46 lg:top-2 xl:left-66 xl:top-1 2xl:left-66 2xl:top-1'>Crispy, Every Bite Taste</p>
        <h1 className='font-BebusNeue font-bold text-foodtxtclr text-2xl xs:text-3xl sm:text-4xl md:text-5xl relative left-10 top-10 tracking-tighter xs:left-10 xs:top-10  sm:left-20 sm:top-10 md:left-36 md:top-12 lg:left-40 lg:top-0 xl:left-60 xl:top-6 2xl:left-60'>POPULAR FOOD ITEMS</h1>
      </div>

      <div className='w-[300px] xs:w-[350px] sm:w-[600px] md:w-[600px] lg:w-[700px] xl:w-[1000px] sm:h-[500px] 2xl:w-[1300px] 2xl:h-[500px] relative top-10 left-10 xs:top-10 xs:left-10 sm:top-30 sm:left-6 md:left-30 md:top-30 lg:left-40 lg:top-10 xl:left-60 xl:top-14 2xl:left-60 2xl:top-14'>  
      <Slider ref={sliderRef} {...settings}>
        {foodItems.map((fooditem) => (
          <div className="card bg-white w-[500px] h-[300px] sm:w-[400px] sm:h-[250px]  mx-0 my-10" key={fooditem.id}>
            <div className="card-body">
            <img src={fooditem.img} alt="Food image" className={`w-[180px] xs:w-[180px] sm:w-[120px] h-auto relative left-6 xs:left-8 sm:left-0 lg:left-2 xl:left-6 2xl:left-12 ${fooditem.name === 'SPACIAL PIZZA' ? ' w-[160px] h-[100px] xs:w-[160px] xs:h-[100px] sm:w-[100px] sm:h-[80px]  xs:left-30 sm:left-0 lg:left-5 xl:left-0 2xl:left-14' : ''}`} />
              <span className='w-14 h-1 bg-foodclr relative left-22 xs:left-24 sm:left-5 md:left-6 lg:left-10 xl:left-14 2xl:left-20'></span>
              <h3 className='font-BebusNeue font-bold text-AboutNmbr tracking-tighter text-lg sm:text-base md:text-base lg:text-lg text-center'>{fooditem.name}</h3>
              <p className='font-Roboto font-normal text-AboutNmbr text-base sm:text-sm md:text-sm lg:text-base relative left-2 xs:left-8 sm:left-0 lg:left-5 xl:left-10 2xl:left-0'>{fooditem.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>

      <div className="flex justify-center mt-4 relative -bottom-5 xs:-bottom-5 xs:left-1 sm:bottom-114 sm:left-40 md:bottom-110 md:left-60 lg:bottom-140 lg:left-86 xl:bottom-140 xl:left-120 2xl:bottom-140 2xl:left-130">
        <button
          className='bg-white w-16 h-16 p-1.5 rounded-full border shadow-xl flex justify-center items-center mx-2'
          onClick={() => sliderRef.current.slickPrev()}
        >
          <img src={leftBtn} alt="left button" />
        </button>
        <button
          className='bg-white w-16 h-16 p-1.5 rounded-full border shadow-xl flex justify-center items-center mx-2'
          onClick={() => sliderRef.current.slickNext()}
        >
          <img src={rightBtn} alt="right button" />
        </button>
      </div>
    </div>
  );
};

export default Fooditem;