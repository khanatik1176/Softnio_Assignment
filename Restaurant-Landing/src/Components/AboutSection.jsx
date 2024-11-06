'use client';
import React, {useState} from 'react'
import AboutImg from '../assets/About-Img.png'
import AboutCall from '../assets/About-call.png'
import delivery from '../assets/Delivery.png'
import dinning from '../assets/Dinning.png';
import pickup from '../assets/pickup.png'

const AboutSection = () => {

  const [activeButton, setActiveButton] = useState('About')

  const renderContent = () => {
    switch (activeButton) {
      case 'About':
        return (
          <div className="relative left-10 xl:bottom-7">
            <h1 className='text-3xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl tracking-tighter font-BebusNeue w-[350px] xs:w-[350px] sm:w-[500px] md:w-[300px] lg:w-[480px] xl:w-[700px] 2xl:w-[880px] leading-tight text-Aboutclr font-bold'>EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD</h1>
            <p className='font-Roboto text-base text-Aboutclr pt-4 w-[320px] xs:w-[350px] sm:w-[500px] md:w-[300px] lg:w-[400px] xl:w-[700px] 2xl:w-[880px] text-left '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
  
            <a href="" className='bg-TopBtn px-6 py-3 font-Roboto font-bold text-black relative left-0 top-10 xs:left-0 xs:top-10 sm:left-0 sm:top-10 md:top-10 md:left-0 lg:left-0 lg:top-10 xl:left-0 xl:top-10'>
                ABOUT MORE
            </a>
            <img src={AboutCall} alt="about-call" className='relative left-40 top-4 xs:left-46 xs:top-4 sm:left-46 sm:top-4 md:left-0 md:top-16 lg:left-0 lg:top-16 xl:left-50 xl:top-4' />
            <p className='font-Roboto text-base text-AboutNmbr font-bold relative left-48 -top-2 xs:left-54 xs:-top-2 sm:left-54 sm:-top-2 md:left-10 md:top-10 lg:left-10 lg:top-10 xl:left-60 xl:-top-2'>+88 3426 739 485</p>
          
            </div>
        );
      case 'Experience':
        return (
          <div className="relative left-10 xl:bottom-7">
            <h1 className='text-3xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl font-BebusNeue w-[350px] xs:w-[400px] sm:w-[500px] md:w-[300px] lg:w-[500px] xl:w-[700px] 2xl:w-[880px] leading-tight text-Aboutclr font-bold'>EXPERIENCE THE DELICIOUS FOOD</h1>
            <p className='font-Roboto text-base text-Aboutclr pt-4 w-[320px] xs:w-[350px] sm:w-[500px] md:w-[300px] lg:w-[400px] xl:w-[700px] 2xl:w-[880px] text-left '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
          </div>
        );
      case 'Contact':
        return (
          <div className="relative left-10 xl:bottom-7">
          <h1 className='text-3xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl font-BebusNeue w-[350px] xs:w-[400px] sm:w-[500px] md:w-[300px] lg:w-[500px] xl:w-[700px] 2xl:w-[880px] leading-tight text-Aboutclr font-bold'>CONTACT WITH US</h1>
          <p className='font-Roboto text-base text-Aboutclr pt-4 w-[320px] xs:w-[350px] sm:w-[500px] md:w-[300px] lg:w-[400px] xl:w-[700px] 2xl:w-[880px] text-left '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
        </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='bg-white md:bg-about-bg  bg-no-repeat bg-right-bottom h-270 xs:h-270 sm:h-300 md:h-220 lg:h-220 xl:h-250 2xl:h-250 about-area md:overflow-hidden'>
      <div className="upper-two-area grid grid-cols-1 md:grid-cols-2">

        <div className="about-img-area relative left-10 top-6 xs:left-10 xs:top-6 sm:left-10 sm:top-6 md:left-20 md:top-11 lg:left-5 lg:top-10 xl:left-36 2xl:left-58 xl:top-44 2xl:top-44">
          <img src={AboutImg} alt="About Image" className=' w-[300px] xs:w-[350px] sm:w-[570px] md:w-[280px] lg:w-[460px] xl:w-[500px] 2xl:w-[600px]'/>
        </div>

        <div className="text-area relative md:-left-8 lg:top-0 lg:-left-6 xl:right-20 2xl:right-50 xl:top-32 xl:w-[800px] 2xl:w-[900px]">
          <div className="about-area">
            <div className="about-button-area">
              <div className="flex sm:space-x-1 md:space-x-2 lg:space-x-1 xl:space-x-2 relative left-10 top-12">
                <button
                  className={`py-2 px-4 sm:py-2 sm:px-4 font-Inter text-xxxs sm:text-sm ${activeButton === 'About' ? 'bg-red-600 text-white border-b-2 border-red-600' : 'bg-white text-Aboutclr'}`}
                  onClick={() => setActiveButton('About')}
                >
                  About
                </button>
                <button
                  className={`py-2 px-4 text-xxxs sm:text-sm font-Inter ${activeButton === 'Experience' ? 'bg-red-600 text-white border-b-2 border-red-600' : 'bg-white text-Aboutclr'}`}
                  onClick={() => setActiveButton('Experience')}
                >
                  Experience
                </button>
                <button
                  className={`py-2 px-4 text-xxxs sm:text-sm font-Inter ${activeButton === 'Contact' ? 'bg-red-600 text-white border-b-2 border-red-600' : 'bg-white text-Aboutclr'}`}
                  onClick={() => setActiveButton('Contact')}
                >
                  Contact
                </button>
              </div>
              <hr className='border-red-600 relative left-10 top-12 w-[320px] xs:w-[340px] sm:w-[620px] xl:w-[700px] 2xl:w-[850px]' />
              <div className="mt-4 relative top-12 md:top-12 lg:top-12 xl:top-20 mini-xl:top-16">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-category-area grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="item-1 relative top-20 left-10 xs:top-20 xs:left-10  sm:top-20 sm:left-10 md:top-14 lg:top-20 xl:top-10 2xl:right-30 2xl:top-0">
          <span className='bg-white w-20 h-20 p-1.5 rounded-full border shadow-xl flex justify-start items-center relative md:left-10 md:top-10 lg:left-2 lg:top-10 xl:left-26 xl:top-50 2xl:left-50 2xl:top-60'>
            <img src={delivery} alt="delivery-icon" className='relative left-3' />
          </span>
          <h1 className='font-BebusNeue font-bold text-xl xs:text-2xl md:text-xl lg:text-xl xl:text-3xl text-AboutNmbr relative left-24 -top-16 sm:left-24 sm:-top-16 md:left-32 md:-top-6 lg:left-24 lg:-top-6 xl:left-48 xl:top-34 2xl:left-74 2xl:top-42'>FAST DELIVERY</h1>
          <p className='font-BebusNeue font-normal text-lg xs:text-xl md:text-lg lg:text-lg text-AboutNmbr relative left-24 -top-16 sm:left-24 sm:-top-16 md:left-32 md:-top-6 lg:left-24 lg:-top-6 xl:left-48 xl:top-34 2xl:left-74 2xl:top-42'>Within 30 minutes</p>
        </div>

        <div className="item-2 relative top-10 left-10 xs:top-10 xs:left-10 sm:top-10 sm:left-10 md:top-14 lg:top-20 lg:right-6 xl:top-10 xl:right-20 2xl:right-100 2xl:top-0">
          <span className='bg-white w-20 h-20 p-1.5 rounded-full border shadow-xl flex justify-start items-center relative md:-left-6 md:top-10 lg:-left-10 lg:top-10 xl:left-10 xl:top-50 2xl:left-0 2xl:top-60'>
            <img src={dinning} alt="delivery-icon" className='relative left-3' />
          </span>
          <h1 className='font-BebusNeue font-bold text-xl xs:text-2xl md:text-xl lg:text-xl xl:text-3xl text-AboutNmbr relative left-24 -top-16 sm:left-24 sm:-top-16 md:left-18 md:-top-6 lg:left-14 lg:-top-6 xl:left-34 xl:top-34 2xl:left-24 2xl:top-42'>ABSOLUTE DINNING</h1>
          <p className='font-BebusNeue font-normal text-lg xs:text-xl md:text-lg lg:text-lg text-AboutNmbr relative left-24 -top-16 sm:left-24 sm:-top-16 md:left-18 md:-top-6 lg:left-14 lg:-top-6 xl:left-34 xl:top-34 2xl:left-24 2xl:top-42'>Best buffet restuarant</p>
        </div>

        <div className="item-3 relative top-0 left-10 xs:top-0 xs:left-10 sm:top-10 sm:left-10  md:top-14 lg:top-20 lg:right-6 xl:top-10 xl:right-30 2xl:right-120 2xl:top-0">
          <span className='bg-white w-20 h-20 p-1.5 rounded-full border shadow-xl flex justify-start items-center relative md:left-10 md:top-10 lg:-left-10 lg:top-10 xl:left-10 xl:top-50 2xl:-left-30 2xl:top-60'>
            <img src={pickup} alt="delivery-icon" className='relative left-3' />
          </span>
          <h1 className='font-BebusNeue font-bold text-xl xs:text-2xl md:text-xl lg:text-xl xl:text-3xl text-AboutNmbr relative left-24 -top-16 sm:left-24 sm:-top-16 md:left-32 md:-top-6 lg:left-14 lg:-top-6 xl:left-34 xl:top-34 2xl:-left-5 2xl:top-42'>PICKUP DELIVERY</h1>
          <p className='font-BebusNeue font-normal text-lg xs:text-xl md:text-lg lg:text-lg text-AboutNmbr relative left-24 -top-16 sm:left-24 sm:-top-16 md:left-32 md:-top-6 lg:left-14 lg:-top-6 xl:left-34 xl:top-34 2xl:-left-5 2xl:top-42'>Grab your food order</p>
        </div>
      </div>

    </div>
  )
}

export default AboutSection