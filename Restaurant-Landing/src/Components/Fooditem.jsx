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
    <div className='bg-white md:bg-food-bg bg-no-repeat bg-top-left h-152 sm:h-130 md:h-140 lg:h-140 xl:h-140 2xl:h-160 about-area md:overflow-hidden'>
      <div className="food-text-area">
        <span className='bg-foodclr w-1 h-1 p-1.5 flex justify-start items-center relative left-10 top-5 sm:left-20 sm:top-5 md:left-36 md:top-5 lg:left-36 lg:top-5 xl:left-36 xl:top-5 2xl:left-60 2xl:top-1'></span>
        <p className='text-foodclr font-Roboto text-lg font-bold relative left-14 sm:left-24 md:left-40 lg:left-40 xl:left-40 2xl:left-64 2xl:bottom-4'>Crispy, Every Bite Taste</p>
        <h1 className='font-BebusNeue font-bold text-foodtxtclr text-3xl sm:text-4xl md:text-5xl relative left-14 sm:left-20 md:left-36 lg:left-36 xl:left-36 2xl:left-60'>POPULAR FOOD ITEMS</h1>
      </div>

      <div className='w-[200px] sm:w-[600px] md:w-[600px] lg:w-[700px] xl:w-[1000px] sm:h-[500px] 2xl:w-[980px] 2xl:h-[400px] relative top-20 left-30 sm:top-20 sm:left-0 md:left-30 md:top-20 lg:left-50 lg:top-20 xl:left-60 xl:top-30 2xl:left-100 2xl:top-10'>  
      <Slider ref={sliderRef} {...settings}>
        {foodItems.map((fooditem) => (
          <div className="card bg-white w-[400px] h-[300px] shadow-xl mx-4" key={fooditem.id}>
            <div className="card-body">
              <img src={fooditem.img} alt="Burger image" className="w-full h-auto" />
              <span className='w-20 h-2 bg-foodclr relative left-6 sm:left-5 md:left-4 lg:left-10 xl:left-10 2xl:left-10'></span>
              <h3 className='font-BebusNeue font-bold text-AboutNmbr text-xl'>{fooditem.name}</h3>
              <p className='font-Roboto font-normal text-AboutNmbr text-base'>{fooditem.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>

      <div className="flex justify-center mt-4 relative -bottom-20 left-1 sm:bottom-128 sm:left-40 md:bottom-128 md:left-60 lg:bottom-128 lg:left-90 xl:bottom-120 xl:left-120 2xl:bottom-120 2xl:left-130">
        <button
          className='bg-white w-20 h-20 p-1.5 rounded-full border shadow-xl flex justify-center items-center mx-2'
          onClick={() => sliderRef.current.slickPrev()}
        >
          <img src={leftBtn} alt="left button" />
        </button>
        <button
          className='bg-white w-20 h-20 p-1.5 rounded-full border shadow-xl flex justify-center items-center mx-2'
          onClick={() => sliderRef.current.slickNext()}
        >
          <img src={rightBtn} alt="right button" />
        </button>
      </div>
    </div>
  );
};

export default Fooditem;