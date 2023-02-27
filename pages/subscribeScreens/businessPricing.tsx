import React from 'react';
import Image from 'next/future/image';
import LineImg from '../../public/assets/images/subscription/businessPriceLine.svg';
import PriceCard from './priceCard';

const businessPricing = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-[white] mt-[104px]">
      <div className="flex flex-col items-center mt-[104px bg-[#F9F9F9] w-11/12">
        <div className="flex flex-row gap-[11px] w-[456px] h-[46px] mt-[91px]">
          <div className="flex items-center justify-center w-[222px] h-[45px] border-[#028789] border bg-[#ffd480] rounded-t cursor-pointer">
            <p className="font-Poppins font-medium leading-5 text-sm text-[#028789]">
              Business Registration Pricing
            </p>
          </div>
          <div className="flex items-center justify-center w-[222px] h-[45px] border-[#028789] border bg-[white] rounded-t cursor-pointer">
            <p className="font-Poppins font-medium leading-5 text-sm text-[#028789]">
              Compare Competitor
            </p>
          </div>
        </div>
        <Image className="" src={LineImg} alt="line" />
        <div className="flex flex-col items-center w-11/12 h-auto mt-[73px]">
          <label className="font-Poppins font-medium leading-100 text-xls text-[#F8B400] uppercase">
            Our Pricing
          </label>
          <p className="font-Poppins font-normal leading-107 text-sms text-[#028789] mt-[9px]">
            Choose A Plan That Suits Your Business
          </p>
          <div className="flex flex-row justify-center gap-[50px] flex-wrap basis-1/3 w-11/12 h-auto mt-[47px] mb-[57px]">
            <PriceCard />
            <PriceCard />
            <PriceCard />
            <PriceCard />
            <PriceCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default businessPricing;
