/* eslint-disable no-unused-vars */

import React from 'react';
import bgImg from '../assets/images/battery-saver.jpg';
import { GiBatteryPackAlt } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
    <div className='w-full h-screen relative py-[2%] px-[7%] text-white'>
      <img src={bgImg} alt="" className='absolute top-0 left-0 z-0 w-full h-full object-cover'  />
      <div className='w-screen h-screen absolute top-0 left-0 bg-black opacity-40 z-10' />
      <div className='relative z-20'>
        <div className='flex gap-1 items-center md:mb-[7%] mb-[20%] text-3xl'>
          <GiBatteryPackAlt fontSize={25} />
          <h1 className='font-semibold'> Batrix</h1>
        </div>
       

       <div className='justify-center flex flex-col'>
          <h1 className='font-black md:text-[3.65rem] text-[2.7rem] md:w-[65%] w-[90%] md:leading-[4.5rem] leading-[3.5rem] mb-6'>
            Welcome to the Future 
            of Device Performance 
            and Sustainability
          </h1>
          <p className='md:text-base text-sm md:w-[55%] w-[90%] font-semibold mb-6'>we believe that your device should work as hard as you do, 
          without compromise. Say goodbye to constant charging 
          and hello to an optimized, long-lasting battery life that 
          keeps up with your busy lifestyle.</p>
          <Link to="/apps">
            <button type="submit" className='md:w-fit w-full px-8 hover:opacity-50 py-3 
            rounded-md bg-white text-black'>Get started</button>
          </Link>
       </div>
      </div>
    </div>
    </>
  )
}

export default LandingPage