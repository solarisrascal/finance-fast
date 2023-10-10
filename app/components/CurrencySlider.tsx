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
        <div className={`w-[40px] h-[40px] bg-[#EAE7FF] rounded-[50px] flex flex-row justify-center items-center `}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 21V15.85L6 17.725V15.35L9 13.475V11.125L6 13V10.65L9 8.75V3H11V7.5L15 5V7.35L11 9.875V12.225L15 9.725V12.075L11 14.6V19C12.3833 19 13.5627 18.5127 14.538 17.538C15.5127 16.5627 16 15.3833 16 14H18C18 15.95 17.321 17.604 15.963 18.962C14.6043 20.3207 12.95 21 11 21H9Z" fill="#C0C0C0"/>
          </svg>
        </div>
        <div>
          <p className='text-[#1A1A1A] font-grifter text-[18px] not-italic font-[700] leading-normal lg:text-[20px]'>Turkish Lira</p>
          <p className='text-[3A3A3A] font-satoshi text-[14px] not-italic font-[400] leading-normal lg:text-[16px]'>₦ 340 to ₺1 + ₦2,500 hidden conversion fee </p>
        </div>
      </div>

      <div className='flex flex-row justify-between mt-[24px] lg:mt-[60px]'>
        <div className={`w-[40px] h-[40px] bg-[#EAE7FF] rounded-[50px] flex flex-row justify-center items-center`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M3.5 14V8.5M3.5 8.5V1.5H8C8.45963 1.5 8.91475 1.59053 9.33939 1.76642C9.76403 1.94231 10.1499 2.20012 10.4749 2.52513C10.7999 2.85013 11.0577 3.23597 11.2336 3.66061C11.4095 4.08525 11.5 4.54037 11.5 5C11.5 5.45963 11.4095 5.91475 11.2336 6.33939C11.0577 6.76403 10.7999 7.14987 10.4749 7.47487C10.1499 7.79988 9.76403 8.05769 9.33939 8.23358C8.91475 8.40947 8.45963 8.5 8 8.5H3.5ZM3.5 8.5H8.5C9.29565 8.5 10.0587 8.81607 10.6213 9.37868C11.1839 9.94129 11.5 10.7044 11.5 11.5V14" stroke="#C0C0C0"/>
        </svg>
        </div>
        <div>
          <p className='text-[#1A1A1A] font-grifter text-[18px] not-italic font-[700] leading-normal lg:text-[20px]'>South Africa Rand</p>
          <p className='text-[3A3A3A] font-satoshi text-[14px] not-italic font-[400] leading-normal lg:text-[16px]'>₦ 470 to R1 + ₦3,100 hidden conversion fee  </p>
        </div>
      </div>

      <div className='flex flex-row justify-between mt-[24px] lg:mt-[60px]'>
        <div className={`w-[40px] h-[40px] bg-[#563ACC] rounded-[50px] flex flex-row justify-center items-center`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14.25 11.25H12.75V5.25H13.5C14.2949 5.25247 15.0565 5.56934 15.6186 6.13141C16.1807 6.69349 16.4975 7.45511 16.5 8.25C16.5 8.44891 16.579 8.63968 16.7197 8.78033C16.8603 8.92098 17.0511 9 17.25 9C17.4489 9 17.6397 8.92098 17.7803 8.78033C17.921 8.63968 18 8.44891 18 8.25C18 7.05653 17.5259 5.91193 16.682 5.06802C15.8381 4.22411 14.6935 3.75 13.5 3.75H12.75V2.25C12.75 2.05109 12.671 1.86032 12.5303 1.71967C12.3897 1.57902 12.1989 1.5 12 1.5C11.8011 1.5 11.6103 1.57902 11.4697 1.71967C11.329 1.86032 11.25 2.05109 11.25 2.25V3.75H10.125C8.93153 3.75 7.78693 4.22411 6.94302 5.06802C6.09911 5.91193 5.625 7.05653 5.625 8.25C5.625 9.44347 6.09911 10.5881 6.94302 11.432C7.78693 12.2759 8.93153 12.75 10.125 12.75H11.25V18.75H9.75C8.95511 18.7475 8.19349 18.4307 7.63141 17.8686C7.06934 17.3065 6.75247 16.5449 6.75 15.75C6.75 15.5511 6.67098 15.3603 6.53033 15.2197C6.38968 15.079 6.19891 15 6 15C5.80109 15 5.61032 15.079 5.46967 15.2197C5.32902 15.3603 5.25 15.5511 5.25 15.75C5.25 16.9435 5.72411 18.0881 6.56802 18.932C7.41193 19.7759 8.55653 20.25 9.75 20.25H11.25V21.75C11.25 21.9489 11.329 22.1397 11.4697 22.2803C11.6103 22.421 11.8011 22.5 12 22.5C12.1989 22.5 12.3897 22.421 12.5303 22.2803C12.671 22.1397 12.75 21.9489 12.75 21.75V20.25H14.25C15.4435 20.25 16.5881 19.7759 17.432 18.932C18.2759 18.0881 18.75 16.9435 18.75 15.75C18.75 14.5565 18.2759 13.4119 17.432 12.568C16.5881 11.7241 15.4435 11.25 14.25 11.25ZM11.25 11.25H10.125C9.32935 11.25 8.56629 10.9339 8.00368 10.3713C7.44107 9.80871 7.125 9.04565 7.125 8.25C7.125 7.45435 7.44107 6.69129 8.00368 6.12868C8.56629 5.56607 9.32935 5.25 10.125 5.25H11.25V11.25ZM14.25 18.75H12.75V12.75H14.25C15.0456 12.75 15.8087 13.0661 16.3713 13.6287C16.9339 14.1913 17.25 14.9544 17.25 15.75C17.25 16.5456 16.9339 17.3087 16.3713 17.8713C15.8087 18.4339 15.0456 18.75 14.25 18.75Z" fill="white"/>
        </svg>
        </div>
        <div>
          <p className='text-[#1A1A1A] font-grifter text-[18px] not-italic font-[700] leading-normal lg:text-[20px]'>United States</p>
          <p className='text-[3A3A3A] font-satoshi text-[14px] not-italic font-[400] leading-normal lg:text-[16px]'>₦ 770 to $1 + ₦ 3,000 hidden conversion fee  </p>
        </div>
      </div>

      <div className='flex flex-row justify-between mt-[24px] lg:mt-[60px]'>
        <div className={`w-[40px] h-[40px] bg-[#EAE7FF] rounded-[50px] flex flex-row justify-center items-center`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 3H4L5.33 9H9.33L10.67 3H13.33L14.67 9H18.67L20 3H22L20.67 9H22V11H20.22L19.78 13H22V15H19.33L18 21H15.33L14 15H10L8.67 21H6L4.67 15H2V13H4.22L3.78 11H2V9H3.33L2 3ZM13.11 11H10.89L10.44 13H13.56L13.11 11ZM7.33 18L8 15H6.67L7.33 18ZM8.89 11H5.78L6.22 13H8.44L8.89 11ZM16.67 18L17.33 15H16L16.67 18ZM18.22 11H15.11L15.56 13H17.78L18.22 11ZM12 6L11.33 9H12.67L12 6Z" fill="#C0C0C0"/>
        </svg>
        </div>
        <div>
          <p className='text-[#1A1A1A] font-grifter text-[18px] not-italic font-[700] leading-normal lg:text-[20px]'>South Korea Won</p>
          <p className='text-[3A3A3A] font-satoshi text-[14px] not-italic font-[400] leading-normal lg:text-[16px]'>₦ 470 to ₩1 + ₦ 5,000 hidden conversion fee  </p>
        </div>
      </div>

      <div className='flex flex-row justify-between mt-[24px] lg:mt-[60px]'>
        <div className={`w-[40px] h-[40px] bg-[#EAE7FF] rounded-[50px] flex flex-row justify-center items-center`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M11 21V14H6V12H10.725L5 3H7.375L12 10.3L16.625 3H19L13.275 12H18V14H13V21H11Z" fill="#C0C0C0"/>
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