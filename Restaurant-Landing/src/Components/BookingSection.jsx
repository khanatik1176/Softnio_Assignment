'use client';

import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Calander from '../assets/Calander.png';

const BookingSection = () => {
  const datePickerRef = useRef(null);

  const [addBookingFormData, setAddBookingFormData] = useState({
    name: '',
    email: '',
    date: null,
    totalpeople: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    date: '',
    totalpeople: '',
    message: '',
  });

  const resetForm = () => {
    setAddBookingFormData({
      name: '',
      email: '',
      date: null,
      totalpeople: '',
      message: '',
    });

    setErrors({
      name: '',
      email: '',
      date: '',
      totalpeople: '',
      message: '',
    });
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setAddBookingFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateBookingForm = () => {
    const errors = { name: '', email: '', date: '', totalpeople: '', message: '' };
    const { name, email, date, totalpeople, message } = addBookingFormData;

    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!date) {
      errors.date = 'Date is required';
    }
    if (!totalpeople) {
      errors.totalpeople = 'Total People is required';
    }
    if (!message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateBookingForm();
    const hasErrors = Object.values(newErrors).some((error) => error !== '');

    if (hasErrors) {
      setErrors(newErrors);
    } else {
      setErrors(newErrors);

      try {
        const response = await fetch('http://localhost:5000/Bookings', {
          method: 'POST',
          body: JSON.stringify(addBookingFormData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        resetForm();
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
  };

  return (
    <div className='bg-book-bg bg-no-repeat bg-cover h-210 xs:h-210 sm:h-170 md:h-175 lg:h-180 xl:h-180 2xl:h-190 about-area md:overflow-hidden'>
      <div className="book-text-area">
        <span className='bg-foodclr w-1 h-1 p-1.5 flex justify-start items-center relative left-8 top-9 xs:left-10 xs:top-9 sm:left-10 sm:top-8 md:left-36 md:top-11 lg:left-36 lg:top-11 xl:left-36 xl:top-10 2xl:left-62 2xl:top-20'></span>
        <p className='text-foodclr font-Roboto text-lg font-bold relative left-14 top-4 xs:left-16 xs:top-4 sm:left-16 sm:top-3 md:left-42 md:top-6 lg:left-42 lg:top-0 xl:left-42 xl:top-5 2xl:left-68 2xl:top-15'>Book Now</p>
        <h1 className='font-BebusNeue font-bold text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl relative left-8 top-6 xs:left-10 xs:top-6 sm:left-10 sm:top-5 md:left-36 md:top-10 lg:left-36 xl:left-36 2xl:left-60 2xl:top-18'>BOOK YOUR TABLE</h1>
        <p className='text-white font-Roboto text-lg font-normal relative left-8 top-10 xs:left-10 xs:top-10 sm:left-10 sm:top-10 md:left-38 md:top-14 lg:left-38 xl:left-38 2xl:left-60 2xl:top-20 w-[350px] sm:w-[400px] md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[600px]'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
      </div>

      <div className="form-area relative left-8 top-20 xs:left-10 xs:top-20 sm:left-10 sm:top-16 md:left-38 md:top-20 lg:left-38 lg:top-20 2xl:top-30 2xl:left-60">
        <form onSubmit={handleBookingSubmit}>
          <div className="form-grp-1 flex flex-col sm:flex-row gap-6 xs:gap-4">
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                id="Name"
                placeholder='Your Name *'
                value={addBookingFormData.name}
                onChange={handleBookingChange}
                className='bg-transparent border border-white h-10 w-82 xs:w-82 sm:h-10 sm:w-60 pl-2 pb-1 placeholder:text-white placeholder:text-xs xs:placeholder:text-sm sm:placeholder:text-sm md:placeholder:text-base'
              />
              {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                id="Email"
                placeholder='Your Email'
                value={addBookingFormData.email}
                onChange={handleBookingChange}
                className='bg-transparent border border-white h-10 w-82 xs:w-82 sm:h-10 sm:w-60 pl-2 pb-1 placeholder:text-white placeholder:text-xs xs:placeholder:text-sm sm:placeholder:text-sm md:placeholder:text-base'
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
            </div>
          </div>

          <div className="form-grp-2 flex flex-col sm:flex-row gap-6 xs:gap-4 mt-5">
            <div className='flex flex-col'>
              <DatePicker
                selected={addBookingFormData.date}
                onChange={(date) => setAddBookingFormData((prevState) => ({ ...prevState, date }))}
                dateFormat="dd MMM yyyy"
                placeholderText="Reservation Date"
                name='date'
                className='bg-transparent border border-white h-10 w-82 xs:w-82 sm:h-10 sm:w-60 pl-2 pb-1 placeholder:text-white placeholder:text-xs xs:placeholder:text-sm sm:placeholder:text-sm md:placeholder:text-base'
                ref={datePickerRef}
                autoComplete='off'
              />
              <img
                src={Calander}
                alt="Calander"
                onClick={() => datePickerRef.current && datePickerRef.current.setFocus()}
                className={`absolute left-70 xs:left-70 sm:left-52 ${errors.date ? 'bottom-98' : 'bottom-83'} transform -translate-y-1/2 text-2xl text-subheading cursor-pointer z-10 ${errors.date ? 'xs:bottom-96 sm:bottom-70' : 'xs:bottom-81 sm:bottom-60'}`}
              />
              {errors.date && <span className="text-red-500 text-xs mt-1">{errors.date}</span>}
            </div>
            <div className="flex flex-col">
              <input
                type="number"
                name="totalpeople"
                id="TotalPeople"
                placeholder='Total People'
                value={addBookingFormData.totalpeople}
                onChange={handleBookingChange}
                className='bg-transparent border border-white h-10 w-82 xs:w-82 sm:h-10 sm:w-60 pl-2 pb-1 placeholder:text-white placeholder:text-xs xs:placeholder:text-sm sm:placeholder:text-sm md:placeholder:text-base'
              />
              {errors.totalpeople && <span className="text-red-500 text-xs mt-1">{errors.totalpeople}</span>}
            </div>
          </div>

          <div className="last-input flex flex-col mt-5">
            <textarea
              name='message'
              value={addBookingFormData.message}
              onChange={handleBookingChange}
              placeholder='Message'
              maxLength={200}
              className='bg-transparent border border-white h-40 w-82 xs:w-82   sm:h-40 sm:w-130 pl-4 pt-4 placeholder:text-white placeholder:text-xs xs:placeholder:text-sm sm:placeholder:text-sm md:placeholder:text-base'
            />
            {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message}</span>}
          </div>

          <button className='bg-TopBtn px-6 py-3 font-Roboto font-bold text-black mt-10 sm:mt-4 relative sm:top-8 md:top-4'>
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingSection;