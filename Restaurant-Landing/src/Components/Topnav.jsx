'use client';
import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import bar from '../assets/Hamburger.png'
import cross from '../assets/ic_round-close.png'

const Topnav = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () =>
    {
        setIsModalOpen(!isModalOpen);
    }



  return (
    <div className='top-area flex justify-between fixed w-full bg-Top bg-top-bg bg-cover bg-center top-0 z-20'>
      <div className="logo-area my-5 relative left-5 sm:left-5 md:left-5 lg:left-10 xl:left-40 2xl:left-60">
        <img src={Logo} alt='Landing-Logo' />
      </div>

       <div className="menu-area my-8 mx-10 hidden md:flex">
        <ul className="menu-lists flex justify-between md:gap-3 lg:gap-6 xl:gap-6 2xl:gap-10">
            <li className="menu-item font-Raleway text-white text-base font-medium"><a href="/">Home</a></li>
            <li className="menu-item font-Raleway text-white text-base font-medium"><a href="/">About</a></li>
            <li className="menu-item font-Raleway text-white text-base font-medium"><a href="/">Portfolio</a></li>
            <li className="menu-item font-Raleway text-white text-base font-medium"><a href="/">Clients</a></li>
            <li className="menu-item font-Raleway text-white text-base font-medium"><a href="/">Blog</a></li>
            <li className="menu-item font-Raleway text-white text-base font-medium"><a href="/">Contact</a></li>
        </ul>
       </div>

       <div className="button-area my-6 relative right-16 top-4 sm:right-20 sm:top-4 md:right-5 md:top-0 lg:right-10 xl:right-40 2xl:right-60">
        <a href="/" className='bg-TopBtn px-6 py-3 font-Roboto font-bold md:text-sm lg:text-base text-black hidden md:flex'>BOOK A TABLE</a>
        <img src = {bar} alt='bar' onClick={toggleModal}  className='bar flex relative bottom-2 lg:bottom-0 md:hidden' />
       </div>

       <div className={`fixed inset-0 bg-Top bg-opacity-0 flex justify-end z-20 h-[500px] transition-transform duration-700 ease-in-out transform ${isModalOpen ? '-translate-x-0' : 'translate-x-full'}`}>
        <div className='w-1/3 h-full bg-Top p-4 rounded-tl-3xl'>
            <button className='text-white
            ' onClick={toggleModal}>
                <img src={cross} alt="Cross-sign" />
            </button>

            <ul className="flex flex-col justify-center pl-6 pt-8 md:pl-6 md:pt-8 gap-4">
            <li className="text-white font-gilroy_regular font-semibold md:text-xl cursor-pointer"><a href="" onClick={toggleModal}>Home</a></li>
            <li className="text-white font-gilroy_regular font-semibold md:text-xl cursor-pointer"><a href="" onClick={toggleModal}>About</a></li>
            <li className="text-white font-gilroy_regular font-semibold md:text-xl cursor-pointer"><a href="" onClick={toggleModal}>Portfolio</a></li>
            <li className="text-white font-gilroy_regular font-semibold md:text-xl cursor-pointer"><a href="" onClick={toggleModal}>Clients</a></li>
            <li className="text-white font-gilroy_regular font-semibold md:text-xl cursor-pointer"><a href="" onClick={toggleModal}>Blog</a></li>
            <li className="text-white font-gilroy_regular font-semibold md:text-xl cursor-pointer"><a href="" onClick={toggleModal}>Contact</a></li>
          </ul>

        </div>
       </div>
    </div>
  )
}

export default Topnav
