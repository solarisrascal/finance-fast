import React from 'react'
interface Active  {
  active : boolean,
  url: String,
  country: String,
  content: String
}
const CurrencySlider = ({active, url, country, content} : Active) => {
  return (
    // <div className='flex flex-row justify-between'>
    //   <div className={`w-[40px] h-[40px] ${active === true ? 'bg-[#EAE7FF] text-[#C0C0C0]' : 'bg-[#563ACC] text-[#FFFFFF]'} `}>
    //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    //     <path d="M9 21V15.85L6 17.725V15.35L9 13.475V11.125L6 13V10.65L9 8.75V3H11V7.5L15 5V7.35L11 9.875V12.225L15 9.725V12.075L11 14.6V19C12.3833 19 13.5627 18.5127 14.538 17.538C15.5127 16.5627 16 15.3833 16 14H18C18 15.95 17.321 17.604 15.963 18.962C14.6043 20.3207 12.95 21 11 21H9Z" fill="#C0C0C0"/>
    //     </svg>
    //   </div>
    // </div>

    <div>
      <div className='flex flex-row justify-between'>
        <div className={`w-[40px] h-[40px] bg-[#EAE7FF] rounded-[50px] flex flex-row justify-center items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 21V15.85L6 17.725V15.35L9 13.475V11.125L6 13V10.65L9 8.75V3H11V7.5L15 5V7.35L11 9.875V12.225L15 9.725V12.075L11 14.6V19C12.3833 19 13.5627 18.5127 14.538 17.538C15.5127 16.5627 16 15.3833 16 14H18C18 15.95 17.321 17.604 15.963 18.962C14.6043 20.3207 12.95 21 11 21H9Z" fill="#C0C0C0"/>
          </svg>
        </div>
        <div>
          <p className='text-[#1A1A1A] font-grifter text-[18px] not-italic font-[700] leading-normal lg:text-[20px]'>Turkish Lira</p>
          <p className='text-[3A3A3A] font-satoshi text-[14px] not-italic font-[400] leading-normal lg:text-[16px]'>₦ 340 to ₺1 + ₦2,500 hidden conversion fee </p>
        </div>
      </div>

      <div className='flex flex-row justify-between'>
        <div className={`w-[40px] h-[40px] bg-[#EAE7FF] rounded-[50px] flex flex-row justify-center items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 21V15.85L6 17.725V15.35L9 13.475V11.125L6 13V10.65L9 8.75V3H11V7.5L15 5V7.35L11 9.875V12.225L15 9.725V12.075L11 14.6V19C12.3833 19 13.5627 18.5127 14.538 17.538C15.5127 16.5627 16 15.3833 16 14H18C18 15.95 17.321 17.604 15.963 18.962C14.6043 20.3207 12.95 21 11 21H9Z" fill="#C0C0C0"/>
          </svg>
        </div>
        <div>
          <p className='text-[#1A1A1A] font-grifter text-[18px] not-italic font-[700] leading-normal lg:text-[20px]'>South Africa Rand</p>
          <p className='text-[3A3A3A] font-satoshi text-[14px] not-italic font-[400] leading-normal lg:text-[16px]'>₦ 470 to R1 + ₦3,100 hidden conversion fee  </p>
        </div>
      </div>

      <div className='flex flex-row justify-between'>
        <div className={`w-[40px] h-[40px] bg-[#EAE7FF] rounded-[50px] flex flex-row justify-center items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 21V15.85L6 17.725V15.35L9 13.475V11.125L6 13V10.65L9 8.75V3H11V7.5L15 5V7.35L11 9.875V12.225L15 9.725V12.075L11 14.6V19C12.3833 19 13.5627 18.5127 14.538 17.538C15.5127 16.5627 16 15.3833 16 14H18C18 15.95 17.321 17.604 15.963 18.962C14.6043 20.3207 12.95 21 11 21H9Z" fill="#C0C0C0"/>
          </svg>
        </div>
        <div>
          <p className='text-[#1A1A1A] font-grifter text-[18px] not-italic font-[700] leading-normal lg:text-[20px]'>United States</p>
          <p className='text-[3A3A3A] font-satoshi text-[14px] not-italic font-[400] leading-normal lg:text-[16px]'>₦ 770 to $1 + ₦ 3,000 hidden conversion fee  </p>
        </div>
      </div>

      <div className='flex flex-row justify-between'>
        <div className={`w-[40px] h-[40px] bg-[#EAE7FF] rounded-[50px] flex flex-row justify-center items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 21V15.85L6 17.725V15.35L9 13.475V11.125L6 13V10.65L9 8.75V3H11V7.5L15 5V7.35L11 9.875V12.225L15 9.725V12.075L11 14.6V19C12.3833 19 13.5627 18.5127 14.538 17.538C15.5127 16.5627 16 15.3833 16 14H18C18 15.95 17.321 17.604 15.963 18.962C14.6043 20.3207 12.95 21 11 21H9Z" fill="#C0C0C0"/>
          </svg>
        </div>
        <div>
          <p className='text-[#1A1A1A] font-grifter text-[18px] not-italic font-[700] leading-normal lg:text-[20px]'>South Korea Won</p>
          <p className='text-[3A3A3A] font-satoshi text-[14px] not-italic font-[400] leading-normal lg:text-[16px]'>₦ 470 to ₩1 + ₦ 5,000 hidden conversion fee  </p>
        </div>
      </div>

      <div className='flex flex-row justify-between'>
        <div className={`w-[40px] h-[40px] bg-[#EAE7FF] rounded-[50px] flex flex-row justify-center items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 21V15.85L6 17.725V15.35L9 13.475V11.125L6 13V10.65L9 8.75V3H11V7.5L15 5V7.35L11 9.875V12.225L15 9.725V12.075L11 14.6V19C12.3833 19 13.5627 18.5127 14.538 17.538C15.5127 16.5627 16 15.3833 16 14H18C18 15.95 17.321 17.604 15.963 18.962C14.6043 20.3207 12.95 21 11 21H9Z" fill="#C0C0C0"/>
          </svg>
        </div>
        <div>
          <p className='text-[#1A1A1A] font-grifter text-[18px] not-italic font-[700] leading-normal lg:text-[20px]'>China Yuan</p>
          <p className='text-[3A3A3A] font-satoshi text-[14px] not-italic font-[400] leading-normal lg:text-[16px]'>₦ 470 to  ¥1 + ₦ 3,200 hidden conversion fee  </p>
        </div>
      </div>
    </div>
  )
}

export default CurrencySlider;