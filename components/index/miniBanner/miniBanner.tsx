// import Image from 'next/image';
import React from 'react';
// import styles from '../../../styles/MiniBanner.module.css';
// import Arrow from '../../../public/assets/images/footer/contactUsArrow.svg';

const MiniBanner = () => {
  return (
    <div className="bg-[#074444] pt-[20px] pb-[20px] sm:pt[0px] sm:pb-[0px] flex flex-col gap-[20px] sm:flex-row w-full h-[232px] justify-center sm:justify-between sm:items-center pl-[100px] pr-[100px]">
      <label className="w-[280] md:w-[520px] font-Poppins font-semibold text-xs sm:text-lg md:text-[40px] leading-6 sm:leading-[144.5%] text-[#ffffff]">
        Want To Register Your Business?{' '}
        <span className="text-[#F8B400]">Get it done in 10 minutes</span>
      </label>
      <a href="https://tbh-dashboard-frontend-dev.sterlingapps.p.azurewebsites.net/signup">
        <div className="flex flex-row items-center justify-center w-[166px] h-[38px] bg-[#F8B400] rounded-sm cursor-pointer">
          <p className="font-Poppins font-bold text-xs leading-110 text-[#005555]">
            Get Started
          </p>
        </div>
      </a>
    </div>
  );
};

export default MiniBanner;
