import React from 'react';

const bundleBanner = () => {
  return (
    <div className="flex flex-col w-full h-[280px] items-center justify-center bg-[url('../public/assets/images/businessPerks/banner.svg')] bg-[#fff7e6]">
      <div className="w-[475px] h-[72px] font-Poppins not-italic font-bold text-5xl leading-18 text-center text-[#000000]">
        TBH Startup Bundle
      </div>
      <div className="w-[618px] h-[24px] font-Poppins not-italic font-medium text-base leading-6 text-center text-[#000000]">
        Get discounted access to the best growth tools and services for your
        startup.
      </div>
    </div>
  );
};

export default bundleBanner;
