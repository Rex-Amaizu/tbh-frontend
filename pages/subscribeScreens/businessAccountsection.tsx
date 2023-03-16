import React from 'react';
import Image from 'next/future/image';
import BusinessAccountImg from '../../public/assets/images/subscription/businessAccountImg.svg';
import BusinessHouseImg from '../../public/assets/images/subscription/businessHouse.svg';
import GreenArrImg from '../../public/assets/images/subscription/greenArrow.svg';

const businessAccountsection = () => {
  return (
    <div className="flex w-full items-center justify-center bg-[white] mt-[56px]">
      <div className="flex flex-row justify-between w-10/12">
        <div className="flex flex-col w-[598px]">
          <div className="flex flex-row gap-2 items-center">
            <Image className="" src={BusinessHouseImg} alt="business house" />
            <p className="font-Poppins font-normal leading-100 text-base tracking-tight text-[#212121]">
              Business Account
            </p>
          </div>
          <label className="font-Poppins font-semibold leading-119 text-3xl text-[#1E1E1E] mt-[15px]">
            A personalized approach to your <br />
            <span className="text-[#028789]">business banking</span>
          </label>
          {/* first col */}
          <div className="flex flex-row gap-[60px] w-full h-[100px] mt-[51px]">
            <div className="flex flex-col w-[282px]">
              <div className="flex flex-row gap-2">
                <Image className="" src={GreenArrImg} alt="green arrow" />
                <label className="font-Poppins font-medium text-base leading-107 text-[#212121]">
                  Business Zero AMF
                  <br /> account
                </label>
              </div>
              <p className="w-[282px] font-Poppins font-normal text-xsx leading-5 text-[#000000] mt-[13px]">
                This is a current account exclusively
                <br /> reserved for start-ups. This is for
                <br /> registered businesses that are 0- 3 years.
              </p>
            </div>
            <div className="flex flex-col w-[282px]">
              <div className="flex flex-row gap-2">
                <Image className="" src={GreenArrImg} alt="green arrow" />
                <label className="font-Poppins font-medium text-base leading-107 text-[#212121]">
                  Business AMF account
                </label>
              </div>
              <p className="w-[271px] font-Poppins font-normal text-xsx leading-5 text-[#000000] mt-[13px]">
                This is a regular current account for businesses to run their
                operations. Standard account maintenance fee (AMF) applies
                monthly.
              </p>
            </div>
          </div>
          {/* second col */}
          <div className="flex flex-row gap-[60px] w-full h-[100px] mt-[51px]">
            <div className="flex flex-col w-[282px]">
              <div className="flex flex-row gap-2">
                <Image className="" src={GreenArrImg} alt="green arrow" />
                <label className="font-Poppins font-medium text-base leading-107 text-[#212121]">
                  Business Foreign Currency
                  <br /> Account
                </label>
              </div>
              <p className="w-[282px] font-Poppins font-normal text-xsx leading-5 text-[#000000] mt-[13px]">
                A current account denominated in Foreign Currency. (USD, GBP &
                EURO) Available to Businesses to make and receive payments in
                foreign currency
              </p>
            </div>
            <div className="flex flex-r4 items-center">
              <div className="flex flex-row items-center justify-center p-[8px] w-[221px] h-[34px] bg-[#028789] rounded-sm cursor-pointer">
                <p className="font-Poppins font-bold text-xs leading-110 text-[#ffffff]">
                  Open Business Account
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image className="" src={BusinessAccountImg} alt="business account" />
      </div>
    </div>
  );
};

export default businessAccountsection;
