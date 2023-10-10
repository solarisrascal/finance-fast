import React from 'react'

const CustomeSlider = () => {
  return (
    <div className='relative rounded-[24px] boder-[1px] bg-[#ede6fd] border-solid'>
      <p className='text-[#3A3A3A] text-center font-satoshi text-[14px] not-italic font-[500] leading-[24px] lg:text-[24px] lg:leading-[35px] pt-[75px] px-[40px] lg:px-[96px] lg:pt-[88px]'>
      “I&apos;ve been using FinanceFast for a few months now and it&apos;s completely transformed the way I send money to my family abroad. The platform is so easy to use and transfers are always fast and secure.”
      </p>
      <div className='flex flex-row justify-center items-center mt-[83px] lg:mt-[93px] px-[85px] py-[25px] lg:px-[320px] lg:py-[32px]'>
        <div className='w-[54px] h-[54px] lg:w-[64px] lg:h-[64px] '>
          <img src="/assets/images/Ellipse-3.png" className='w-full h-full' alt="" />
        </div>
        
        <div className='ml-2'>
          <p className='text-[#1A1A1A] font-grifter text-[18px] not-italic font-[700] leading-normal lg:text-[20px]'>
            Carl Rowan
          </p>
          <p className='text-[#3A3A3A] font-satoshi text-[14px] not-italic font-[400] leading-normal lg:text-[16px]'>
          Aglets Inc
          </p>
        </div>
      </div>
    </div>
  )
}
export default CustomeSlider;