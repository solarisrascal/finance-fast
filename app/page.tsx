"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Slider from './components/Slider';
import CustomeSlider from './components/CustomeSlider';
import CurrencySlider from './components/CurrencySlider';

// import VerticalCarousel from './components/VerticalCarousel';

export default function Home() {
  const [value, setValue] = useState('');
  const [accordNum , setAccordNum] = useState(0);

  const lists = [
    "path/to/image1.jpg",
    "path/to/image2222222.jpg",
    "path/to/image3.jpg",
    "path/to/image4.jpg",
    "path/to/image5.jpg",
    "path/to/image6.jpg",
    "path/to/image7.jpg",
    "path/to/image8.jpg",
    "path/to/image9.jpg",
    "path/to/image10.jpg",
    "path/to/image11.jpg",
    "path/to/image12.jpg",
    "path/to/image13.jpg",
    "path/to/image14.jpg",
    "path/to/image15.jpg",
    "path/to/image16.jpg",
    "path/to/image17.jpg",
    "path/to/image18.jpg",
  ];

  return (
    <div className='bg-[#FFF]'>
      <Slider />
      <CustomeSlider />
      
      <style>{`
            .item {
              height: 10rem;
              background: #4dc7a0;
              padding: 1rem;
              color: white;
              font-family: Arial, Helvetica, sans-serif;
             }
          `}</style>
      <div className='hidden lg:block'>
        <p className="font-grifter text-[#1A1A1A] text-[48px] font-[700] leading-[54px] w-[928px] text-center mx-auto">
          Simplify Your International Transactions with 
          <span className="bg-gradient-to-r from-[#6364FF] from-[64.58%] to-[#563ACC] to-[100%] text-transparent bg-clip-text"> One Platform</span>
        </p>
        <p className="font-satoshi text-[#3A3A3A] text-[18px] font-[400] leading-normal w-[644px] text-center mx-auto mt-3">
          Say Goodbye to the Hassles of Traditional Money Transfers. FinanceFast allows you effortlessly transfer money anywhere in the world with confidence and ease.
        </p>

        <div className="flex items-center justify-center mt-10 relative w-[498px] mx-auto">
          <PhoneInput
            placeholder="Enter phone number"
            value={'+234'}
            onChange={setValue}
            
          />
          <button className="absolute font-satoshi text-[#FFF] text-[18px] font-[500] not-italic leading-normal rounded-[24px] bg-[#563ACC] h-6 right-1 px-[24px] py-[12px] h-[48px] w-[173px]">Download Now</button>
          <style>{`
            .react-tel-input .form-control {
              border-radius: 32px;
              width: 100%;
              height: 61px;
              border-color: rgba(148, 148, 148, 0.5);
              padding: 14px 55px;
              color: #1A1A1A;
              font-family: Satoshi;
              font-size: 18px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }
            .react-tel-input .selected-flag {
              width: 0rem;
              padding: 0 0;
              left: .625rem;
            }
            .react-tel-input .flag-dropdown {
              border: none;
            }
          `}</style>
        </div>

        <div className='mt-[9.25rem]'>
          <Image className='mx-auto' src='/assets/images/iPhone.png' width={1400} height={340} alt='' />
        </div>

        <div className='h-[9.6875rem] bg-[#E5DBFB] px-[6%]'>
          
        </div>
      </div>
      <div className='lg:mt-[112px] mt-[64px] px-[6%]'>
        <p className='font-satoshi font-[700] text-[10px] leading-normal bg-gradient-to-r from-[#6364FF] from-[64.58%] to-[#563ACC] to-[100%] text-transparent bg-clip-text text-center uppercase lg:text-[14px]'>Cross-Border Transactions</p>
        <p className="font-grifter text-[#1A1A1A] text-[24px] not-italic font-[700] leading-[28px] w-full text-center mx-auto mt-3 lg:mt-4 lg:text-[40px] lg:w-[622px] lg:leading-[48px]">
          Say Goodbye to International Payment Hassles 
        </p>
        <p className="lg:hidden block font-satoshi text-[#3A3A3A] not-italic text-[14px] font-[400] leading-[22px] w-full text-center mt-3 px-[10px]">
          Start your journey to hassle free Cross-Border Payments with FastFinance.
        </p>
        <div className='flex flex-col justify-center items-center'>
          <p className="hidden lg:block lg:font-satoshi lg:text-[#3A3A3A] lg:not-italic lg:text-[16px] lg:font-[400] lg:leading-[26px] lg:text-center lg:mt-3 lg:w-[560px]">
            Start your journey to hassle free Cross-Border Payments by downloading the FastFinance app from your iOS of Android store.
          </p>
        </div>
      </div>

      <div className='flex flex-col px-[6%] justify-center lg:mt-[7rem] lg:px-[6%] lg:grid lg:grid-cols-11 lg:gap-[33px]'>
        <div className='lg:col-span-5'>
          {/* <VerticalCarousel lists={lists} /> */}
        </div>

        <div className='pt-[24px] pb-[24px] flex flex-row justify-between lg:flex-col lg:pt-[0px] lg:pb-[0px]'>
          <div className="border-t-[1px] mt-[10px] w-[47%] lg:border-l-[1px] lg:h-[47%] lg:border-t-[0px] lg:mt-[0px] lg:ml-[10px]"></div>
          <div className='text-[#3A3A3A] font-satoshi text-[15px] not-italic text-[700] leading-normal uppercase lg:text-[18px]'>VS</div>
          <div className="border-t-[1px] mt-[10px] w-[47%] lg:border-l-[1px] lg:h-[47%] lg:border-t-[0px] lg:mt-[0px] lg:ml-[10px]"></div>
        </div>

        <div className="lg:col-span-5 lg:bg-card-1 rounded-3xl bg-card-1">
          <div className='flex flex-col justify-center items-center pt-8 pb-6 px-6 lg:px-8 lg:pt-12 lg:pb-8'>
              <div className="hidden lg:block mx-auto bg-iphone1-pattern bg-no-repeat w-[314px] h-[288px]"></div>
              <img className='block lg:hidden w-[200px] h-[183px]' src='/assets/images/iPhone-13-Pro-Front-1.png' />
              <div className='flex flex-col mt-6 lg:mt-10'>
                <span className='text-[#1A1A1A] font-grifter text-[20px] not-italic font-[700] leading-normal lg:text-[32px]'>Global accounts in minutes</span>
                <span className='text-[#1A1A1A] font-satoshi text-[14px] not-italic font-[400] leading-normal lg:text-[16px]'>FinanceFast solves problems by proving low fees, fast transfers, secure transactions, and a user-friendly platform.</span>
              </div>
          </div>
        </div>
      </div>

      <div className='mt-[7rem] lg:px-[28%] px-[6%]'>
          <p className='text-center font-satoshi text-[10px] not-italic	text-[700] leading-normal uppercase text-[#6364ff] mb-[12px] lg:text-[14px] lg:mb-[16px]'>real-time exchange rate</p>
          <p className='font-grifter text-center text-[#1A1A1A] text-[24px] not-italic text-[700] leading-[28px] lg:text-[40px] lg:leading-[40px]'>Effortlessly Convert</p>
          <p className='font-grifter text-center text-[#1A1A1A] text-[24px] not-italic text-[700] leading-[28px] lg:text-[40px] lg:leading-[40px] mb-[12px]'>Currency</p>
          <p className='text-[#3A3A3A] text-center font-satoshi text-[14px] not-italic text-[400] leading-[22px] lg:text-[16px] lg:leading-[26px] mb-[54px] lg:mb-[88px]'>Convert your currency from Pounds to Naira or Naira to Dollars. Convert Currency Anytime, <span className='hidden lg:inline-block'> Anywhere with FinanceFast's Seamless and Efficient Service.</span></p>
      </div>

      <div className='flex flex-col lg:flex-row px-[6%] lg:mb-[148px]'>
        <div className='rounded-[24px] bg-[#f6e8ff] pt-[32px] lg:pt-[53px] pb-[24.5px] lg:pb-[27px] pl-[16px] pr-[15px] lg:pl-[32px] lg:pr-[127px] lg:w-1/2 w-full'>
            <div className='flex flex-row justify-center items-center'>
              <div className='relative w-[200px] h-[184px] lg:w-[314px] lg:h-[288px] mb-[24px] lg:mb-[40px]'> 
                <img className='mx-auto w-[100%] h-[100%] z-[31] relative' src='/assets/images/iPhone 13 Pro 1.png'/>
                <img className='absolute bottom-[0%] w-[80px] h-[39px] left-[-25%] z-[30] lg:w-[141px] lg:h-[69px] lg:left-[-30%]' src='/assets/images/3d-business-pile-of-three-coins 1.png' />
                <img className='absolute top-[-4%] right-[-15%] w-[80px] h-[61px] z-[32] lg:w-[114px] lg:h-[86px] lg:top-[10%] lg:right-[-20%]' src='/assets/images/business-3d-flying-dollar-1 1.png' />
              </div>
            </div>
            <p className='font-grifter text-[#1A1A1A] text-[20px] not-italic text-[700] leading-normal lg:text-[32px]'>Zero Hidden Fees</p>
            <p className='font-satoshi text-[#3A3A3A] text-[14px] not-italic text-[400] leading-normal lg:text-[16px]'>Get the Best Exchange Rates with FinanceFast: Convert Currency Hassle-Free, Instantly and Without Fees.</p>
        </div>
        <div className='pt-[24px] flex flex-row justify-between lg:flex-col lg:pt-[0px] lg:ml-[90px] '>
          <div className="border-t-[1px] mt-[10px] w-[47%] lg:border-l-[1px] lg:h-[43%] lg:border-t-[0px] lg:mt-[0px] lg:ml-[10px]"></div>
          <div className='text-[#3A3A3A] font-satoshi text-[15px] not-italic text-[700] leading-normal uppercase lg:text-[18px]'>VS</div>
          <div className="border-t-[1px] mt-[10px] w-[47%] lg:border-l-[1px] lg:h-[43%] lg:border-t-[0px] lg:mt-[0px] lg:ml-[10px]"></div>
        </div>
        <div className='mb-[80px] lg:mb-[0px]'>
          <CurrencySlider active={true} url={'1'} country={'asdf'} content={'asd'}/>
        </div>
      </div>

      <div>
        <p className='text-center font-satoshi text-[10px] not-italic text-[700] leading-normal uppercase text-[#6364ff] mb-[12px] lg:mb-[16px]'>Testimonials</p>
        <p className='font-grifter text-center text-[#1A1A1A] text-[24px] not-italic text-[700] leading-[28px] lg:text-[40px] lg:leading-[48px] mb-[44px] lg:mb-[72px]'>What Our Customers are Saying</p>
      </div>

      <div className='px-[6%] mb-[72px] lg:mb-[112px]'>
        {/* carosel */}
      </div>
        
      <div>
        <p className='text-center font-satoshi text-[10px] not-italic text-[700] leading-normal uppercase text-[#6364ff] text-[14px] mb-[12px] lg:mb-[16px]'>FAQ’S</p>
        <p className='font-grifter text-[#1A1A1A] text-center text-[24px] not-italic text-[700] leading-[28px] lg:text-[40px] lg:leading-normal mb-[54px] lg:mb-[88px]'>Got questions?</p>
      </div>

      <div className='px-[6%] mb-[64px] lg:mb-[124px]'>
        <button className={`py-[24px] text-[#1A1A1A] text-[16px] not-italic text-[700] leading-normal lg:text-[20px] lg:py-[32px] cursor-pointer flex flex-row justify-between w-full`} onClick={() => {
          accordNum !== 1 ? setAccordNum(1) : setAccordNum(0)
        }}>
          <span className='font-grifter'>
            How does FinanceFast work?
          </span>
          {
            accordNum === 1 && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4.5 15.75L12 8.25L19.5 15.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )
          }
          {
            accordNum !== 1 && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )
          }
        </button>
        <div className={`panel mb-[24px] lg:mb-[32px] mt-[-12px] lg:mt-[-16px] ${accordNum === 1 ? 'block' : 'hidden'}`}>
          <p>FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.</p>
        </div>

        <button className={`py-[24px] text-[#1A1A1A] text-[16px] not-italic text-[700] leading-normal lg:text-[20px] lg:py-[32px] cursor-pointer flex flex-row justify-between w-full border-t-[1px]`} onClick={() => {
          console.log(accordNum);
          accordNum !== 2 ? setAccordNum(2) : setAccordNum(0)
        }}>
          <span className='font-grifter'>
            Is it safe to use FinanceFast?
          </span>
          {
            accordNum === 2 && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4.5 15.75L12 8.25L19.5 15.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )
          }
          {
            accordNum !== 2 && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )
          }
        </button>
        <div className={`panel mb-[24px] lg:mb-[32px] mt-[-12px] lg:mt-[-16px] ${accordNum === 2 ? 'block' : 'hidden'}`}>
          <p>......</p>
        </div>

        <button className={`py-[24px] text-[#1A1A1A] text-[16px] not-italic text-[700] leading-normal lg:text-[20px] lg:py-[32px] cursor-pointer flex flex-row justify-between w-full border-t-[1px]`} onClick={() => {
          accordNum !== 3 ? setAccordNum(3) : setAccordNum(0)
        }}>
          <span className='font-grifter'>
            Can I track my transfer?
          </span>
          {
            accordNum === 3 && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4.5 15.75L12 8.25L19.5 15.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )
          }
          {
            accordNum !== 3 && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )
          }
        </button>
        <div className={`panel mb-[24px] lg:mb-[32px] mt-[-12px] lg:mt-[-16px] ${accordNum === 3 ? 'block' : 'hidden'}`}>
          <p>/////////</p>
        </div>

        <button className={`py-[24px] text-[#1A1A1A] text-[16px] not-italic text-[700] leading-normal lg:text-[20px] lg:py-[32px] cursor-pointer flex flex-row justify-between w-full hidden lg:flex border-t-[1px]`} onClick={() => {
          accordNum !== 4 ? setAccordNum(4) : setAccordNum(0)
        }}>
          <span className='font-grifter'>
            Are there any hidden fees with FinanceFast?
          </span>
          {
            accordNum === 4 && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4.5 15.75L12 8.25L19.5 15.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )
          }
          {
            accordNum !== 4 && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )
          }
        </button>
        <div className={`panel mb-[24px] lg:mb-[32px] hidden mt-[-12px] lg:mt-[-16px] ${accordNum === 4 ? 'lg:block' : 'lg:hidden'}`}>
          <p>FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.</p>
        </div>
      </div>

      <div className='px-[6%]' >
          <div className="bg-[url('/assets/images/Frame26.png')] lg:bg-[url('/assets/images/CTA3-web.png')] bg-cover bg-no-repeat bg-fixed flex flex-col  justify-center lg:flex-row px-[16px] lg:px-[54px] rounded-[24px]" >
            <div className='pt-[54px] lg:pt-[121px] lg:w-1/2 '>
              <p className='font-grifter text-center lg:text-start font-grifter text-[#FFF] text-[24px] not-italic text-[700] leading-[34px] lg:text-[40px] lg:leading-[46px] mb-[12px] lg:mb-[24px]'>One Solution for All Your Cross-Border Payments</p>
              <div className='flex flex-row justify-center lg:justify-start pb-[56px] lg:pb-[120px]'>
                <img src='/assets/images/google-play.png' className='w-[135px] h-[43px] lg:w-[145px] lg:h-[47px] mr-[14px] lg:mr-[16px]'/>
                <img src='/assets/images/app-store.png' className='w-[135px] h-[43px] lg:w-[145px] lg:h-[47px]' />
              </div>
            </div>
            <div className='flex flex-row justify-center lg:justify-end lg:mt-[56px] lg:w-1/2'>
              <div className='w-[238px] h-[200px] lg:w-[354px] lg:h-[350px] relative'>
                <img src="/assets/images/iPhone13Pro.png" className='lg:hidden block w-full h-full'/>
                <img src="/assets/images/iPhone-13-Pro-Front.png" className='hidden lg:block w-full h-full'/>
                <img src="/assets/images/6.png" className='lg:hidden block absolute left-[-16%] top-[-9%]' />
                <img src="/assets/images/6-1.png" className='lg:block hidden lg:absolute left-[-54%] top-[32%]' />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
