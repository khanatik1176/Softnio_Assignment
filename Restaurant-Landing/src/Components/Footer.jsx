'use client';
import React, { useState } from 'react';
import Clock from "../assets/Hour.png";
import Phone from '../assets/Talk.png';
import Mail from '../assets/Book.png';
import Pin from '../assets/Address.png';
import Fb from '../assets/Fb.png';
import  twit from '../assets/X.png';
import Insta from '../assets/instgram.png';
import Lin from '../assets/Lin.png';

const Footer = () => {
  const [footerItems, setFooterItems] = useState([
    {
      id: 1,
      title: 'OPENING HOURS',
      subheading: 'Monday - Friday',
      belowSubheading: '9:00 AM - 10:00 PM',
      logo: Clock,
    },
    {
      id: 2,
      title: 'LET’S TALK',
      subheading: 'Phone: 1-800-222-4545',
      belowSubheading: 'Fax: 1-800-222-4545',
      logo: Phone,
    },
    {
      id: 3,
      title: 'BOOK A TABLE',
      subheading: 'Email: demo@website.com',
      belowSubheading: 'Support: support@website.com',
      logo: Mail,
    },
    {
      id: 4,
      title: 'OUR ADDRESS',
      subheading: '123 Stree New York City , United States Of America.',
      belowSubheading: '',
      logo: Pin,
    },
  ]);

  return (
    <div className='bg-footer-bg bg-no-repeat bg-cover h-230 sm:h-240 md:h-140 lg:h-140 xl:h-140 2xl:h-160 footer-area md:overflow-hidden'>
      <div className="footer-text-area">
        <h1 className='font-BebusNeue text-white text-3xl xs:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-center w-[350px] xs:w-full sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] 2xl:w-[1400px] relative top-10 left-2 xs:top-10 xs:left-0 sm:top-20 sm:left-10 md:top-20 md:left-20 lg:top-30 lg:left-10 xl:top-30 xl:left-20 2xl:top-30 2xl:left-50'>
          WE READY TO HAVE YOU THE BEST DINING EXPERIENCES
        </h1>
      </div>

      <div className="footer-items-area grid grid-cols-1 md:grid-cols-4 gap-y-10 sm:gap-y-10 md:gap-4 p-4 md:w-[750px] lg:w-[900px] xl:w-[900px] 2xl:w-[900px] relative top-10 sm:top-30 md:top-26 md:left-6 lg:top-30 lg:left-20 xl:top-40 xl:left-80 2xl:top-40 2xl:left-100">
        {footerItems.map(item => (
          <div key={item.id} className="footer-item flex flex-col items-center text-center">
            <img src={item.logo} alt={item.title} className="mb-2" />
            <h2 className='font-BebusNeue text-white text-xl'>{item.title}</h2>
            <div className="subtext relative top-3">
            <p className='font-Roboto text-footerclr text-base text-normal'>{item.subheading}</p>
            <p className='font-Roboto text-footerclr text-sm relative top-1'>{item.belowSubheading}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="footer-socials flex justify-between w-[280px] sm:w-[280px] md:w-[280px] lg:w-[280px] xl:w-[280px] 2xl:w-[280px] relative top-14 left-10 xs:top-14 xs:left-20 sm:top-36 sm:left-46  md:top-30 md:left-58 lg:top-36 lg:left-100 xl:top-50 xl:left-152 2xl:top-60 2xl:left-180">
       <a href="/"><img src={Fb} alt="Facebook"/></a>
       <a href="/"><img src={twit} alt="X"/></a>
       <a href="/"><img src={Insta} alt="Instagram"/></a>
       <a href="/"><img src={Lin} alt="Linkedin"/></a> 
      </div>
        
        <h5 className='text-white text-normal text-xl font-Montserrat relative top-18 left-8 xs:top-18 xs:left-14 sm:top-44 sm:left-40 md:top-36 md:left-54  lg:top-40 lg:left-96 xl:top-56 xl:left-148 2xl:top-66 2xl:left-176'>© 2023 <span className='text-xl text-nioclr'>Niomax </span>All Rights Reserved</h5>

    </div>
  );
};

export default Footer;