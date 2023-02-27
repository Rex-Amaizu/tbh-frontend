import React from 'react';
import Image from 'next/future/image';
import CheckImg from '../../public/assets/images/subscription/check.svg';
import ShortLineImg from '../../public/assets/images/subscription/shortLine.svg';

const priceCard = () => {
  return (
    <div className="flex flex-col w-[283px] h-[312px] shadow-priceBoxSHadow bg-[white] rounded-t-md">
      <div className="flex flex-col justify-center w-full h-[52px] bg-[#028789] rounded-t-md pl-[22px]">
        <p className="font-Poppins font-semibold leading-7 text-lg text-[#ffffff]">
          Business Name
        </p>
        <h6 className="font-Poppins font-normal text-ssx leading-4.5 text-[#ffffff]">
          Up to 1 million shares
        </h6>
      </div>
      <div className="flex flex-col w-full mt-[7px] pl-[22px]">
        <div className="flex flex-row gap-2 w-full mt-[7px]">
          <Image className="" src={CheckImg} alt="check" />
          <p className="font-Poppins font-normal text-xs leading-113 text-[#212121]">
            Business Name Registration
          </p>
        </div>
        <div className="flex flex-row gap-2 w-full mt-[7px]">
          <Image className="" src={CheckImg} alt="check" />
          <p className="font-Poppins font-normal text-xs leading-113 text-[#212121]">
            TIN Registration
          </p>
        </div>
        <div className="flex flex-row gap-2 w-full mt-[7px]">
          <Image className="" src={CheckImg} alt="check" />
          <p className="font-Poppins font-normal text-xs leading-113 text-[#212121]">
            Free Banking for 3 years
          </p>
        </div>
        <div className="flex flex-row gap-2 w-full mt-[7px]">
          <Image className="" src={CheckImg} alt="check" />
          <p className="font-Poppins font-normal text-xs leading-113 text-[#212121]">
            Search Report
          </p>
        </div>
        <div className="flex flex-row gap-2 w-full mt-[7px]">
          <Image className="" src={CheckImg} alt="check" />
          <p className="font-Poppins font-normal text-xs leading-113 text-[#212121]">
            Open An Account
          </p>
        </div>
        <Image className="mt-[14px]" src={ShortLineImg} alt="short line" />
        <label className="flex self-center font-Poppins font-medium text-2xl leading-9 tracking-tighter text-[#212121] mt-[7px]">
          ₦23,000
        </label>
        <Image className="mt-[14px]" src={ShortLineImg} alt="short line" />
        <div className="flex flex-row items-center justify-center p-[8px] w-[242px] h-[38px] bg-[#768396] rounded-sm cursor-pointer">
          <p className="font-Poppins font-bold text-xs leading-110 text-[#ffffff]">
            Get Started
          </p>
        </div>
      </div>
    </div>
  );
};

export default priceCard;
