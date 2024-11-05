import React from 'react'
import HeroImgLg from '../assets/Hero-img.png'
import Star from '../assets/hero-bg-img.png'

const HeroSection = () => {
  return (
    <div className='hero-area flex justify-center items-center relative right-8 mt-10 flex-col md:flex-row'>
      <div className="hero-text-area relative top-16 md:top-10 lg:top-10 xl:top-10 ">
        <div className="heading relative left-14 sm:left-0 md:left-30 lg:left-20 xl:left-30">
          <div className="absolute inset-0 bg-transparent  md:bg-Top opacity-50 z-0"></div>
          <h1 className='font-BebusNeue text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl xl:leading-tight 2xl:leading-tight text-white font-bold w-[350px] xs:w-[400px] sm:w-[500px] md:w-[450px] lg:w-[600px] xl:w-[620px] 2xl:w-[900px] relative z-10'>
            TASTE THE AUTHENTIC SAUDI CUISINE
          </h1>
        </div>
        <h4 className='font-Roboto text-xl xs:text-xl md:text-xl lg:text-2xl text-white font-normal w-[300px] xs:w-[350px] sm:w-[350px] md:w-[320px] lg:w-[500px] xl:w-[500px] relative left-14 sm:left-0 md:left-30 lg:left-20 xl:left-30'>
          Among the best Saudi chefs in the world, serving you something beyond flavor
        </h4>
        <a href="" className='bg-TopBtn px-6 py-3 font-Roboto font-bold text-black relative left-14 top-10 sm:left-0 sm:top-10 md:top-10 md:left-30 lg:left-20 lg:top-10 xl:left-30 xl:top-10'>
          EXPLORE MENU
        </a>
      </div>

      <div className="img-area relative top-42 left-10 xs:top-40 xs:left-10 sm:top-40 sm:left-12 md:static md:mt-30">
        <img src={HeroImgLg} alt='Hero-Img'  className='hero-img w-[300px] xs:w-[350px] sm:w-[600px] md:w-[400px] lg:w-[500px] xl:w-[700px]' />
        <img src={Star} alt='bg-Img'  className='hero-img relative left-64 bottom-76 xs:left-76 xs:bottom-86 sm:left-134 sm:bottom-140 md:left-76 md:bottom-86 lg:left-90 lg:bottom-99 xl:left-156 xl:bottom-162 2xl:left-156 2xl:bottom-162'/>
        
      </div>
    </div>
  )
}

export default HeroSection