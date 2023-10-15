/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogoPlayStore } from 'react-icons/bi';
import { BsApple } from 'react-icons/bs';
import { GiBatteryPackAlt } from 'react-icons/gi';
import { androidBSA } from '../dummy';
import { appleBSA } from '../dummy';

// #071422 bgColor
// #112131 topColor
const BatterySaver = () => {
  return (
    <div className='bg-[#071422] min-h-screen text-gray-200 py-[2%] md:px-[7%] px-[4%]'>
      <div className='flex gap-1 items-center md:mb-[7%] mb-[20%] text-2xl shadow-2xl pb-4'>
        <GiBatteryPackAlt fontSize={25} />
        <h1 className='font-semibold'> Batrix</h1>
      </div>
      <section>
        <h1 className='font-semibold md:text-3xl text-2xl mb-4'>Battery Savers</h1>
        <p>An app that saves batteries usually helps you stop unusual 
          events that consume the most battery power. 
          Some apps offer features like battery monitoring, 
          profiling apps per battery usage, notifying you of low battery, etc.
          Though Android and iPhone operating systems come with their proprietary 
          battery-saving features, battery power saver apps extend the functionalities 
          and convenience to a great level.
        </p>
      </section>
      <section className='my-6'>
        <h1 className='font-semibold md:text-3xl text-xl mb-4'>Why Do You Need a Battery Saver App?</h1>
        <h2 className='font-semibold mb-4'>You may want to get a battery energy saver app for the following benefits:</h2>
        <ul className='list-disc pl-4'>
          <li>
          Make battery management convenient with the tap of a button. 
          There is no need to go through the complex working principles 
          of Android Battery Saver or iOS Low Power Mode. 
          Simply use a battery-conserving app to extend the phone battery level.
          </li>
          <li>
          Some power saver apps automatically freeze apps and functions when the mobile is in idle mode for a long. 
          Hence, you get to conserve the battery power.
          </li>
          <li>
            The latest Android and iOS devices indeed come with some advanced battery-saving features. 
            However, these features are not available for older models.
            Therefore, you need battery energy saver apps for legacy Android or iOS models.
          </li>
          <li>
            You can save yourself from buying a new phone due to a weak battery by simply switching to a battery 
            saver app for device battery management. This saves you money and time.
          </li>
          <li>
            A good battery power-saving app will automatically manage power-hungry services like 
            mobile internet, 4G LTE, GPS, Bluetooth, NFC, 
            Infrared, and Wi-Fi. Efficiently switching on and off these services saves battery energy.
          </li>
        </ul>
      </section>
      <section className='my-6'>
        <h1 className='font-semibold md:text-3xl text-xl mb-4'>Aims and Objectives of Battery Saver App</h1>
        <p>The aim of the Battery Saver App is to limit apps and features on Pixel 3 and later phones, 
        Extreme Battery Saver pauses most apps, turns off features, and slows processes 
        in addition to what Battery Saver limits. The system notifies the user if 
        the battery is low and indicates which app is using more power. 
        indicates which app consumes more power. The objectives are</p>
        <ul className='list-disc pl-4'>
          <li>
            To investigate the architecture and functioning of the Android Battery Saver System.    
          </li>
          <li>
            To evaluate the effectiveness of the system in extending battery life and improving energy efficiency.
          </li>
          <li>
            To analyze the impact of the battery saver mode on device performance and user experience.
          </li>
          <li>
            To identify the adaptive behavior of the system in response to varying usage patterns and user settings.
          </li>
          <li>
            To discuss the limitations and potential areas for improvement of the Android Battery Saver System
          </li>
        </ul>
      </section>

      <section className='my-6'>
        <h1 className='font-semibold md:text-3xl text-xl mb-4'>Limitation of the study</h1>
        <p>
          While the Android battery saver system is designed to improve battery life 
          and enhance user experience, it also has some limitations. Understanding these 
          limitations helps users manage their expectations and make informed decisions 
          about their device usage. While the Android battery saver system is a useful tool 
          for extending battery life, it's essential to consider these limitations and strike a 
          balance between power conservation and device performance based on individual preferences
          and usage needs. Users can manually adjust settings or use third-party battery management
          apps to complement the built-in battery saver system and tailor their experience
          to suit their requirements.
        </p>
      </section>


      <section className='mb-6'>
        <h1 className='font-semibold md:text-3xl text-xl mb-4'>Battery Saver Apps for Android</h1>
        <div className='md:grid-cols-3 grid-cols-1 grid gap-2'>
          {androidBSA.map((app) => (
            <div key={app.googlePlayLink} className='blue-glassmorphism secondAnimation my-4 p-3 relative'>
              <img src={app.img} alt={app.name} className='rounded-md' />
              <p className='font-semibold my-2 md:text-lg text-base'>{app.name}</p>
              <p className='text-sm mb-[45px]'>{app.description}</p>
              <Link to={app.googlePlayLink}>
                <button type="button" className='absolute bottom-0 left-0 h-[45px] hover:opacity-80 
                rounded-md bg-gray-200 text-black text-center w-full flex items-center gap-2 justify-center'>
                <BiLogoPlayStore fontSize={20} />
                Download</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-6'>
        <h1 className='font-semibold md:text-3xl text-xl mb-4'>Battery Saver Apps for IOS</h1>
        <div className='md:grid-cols-3 grid-cols-1 grid gap-2'>
          {appleBSA.map((app) => (
            <div key={app.googlePlayLink} className='blue-glassmorphism secondAnimation my-4 p-3 relative'>
              <img src={app.img} alt={app.name} className='rounded-md' />
              <p className='font-semibold my-2 md:text-lg text-base'>{app.name}</p>
              <p className='text-sm mb-[45px]'>{app.description}</p>
              <Link to={app.appStoreLink}>
                <button type="button" className='absolute bottom-0 left-0 h-[45px] hover:opacity-80 
                rounded-md bg-gray-200 text-black text-center w-full flex items-center gap-2 justify-center'>
                <BsApple fontSize={20} />
                Download</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default BatterySaver