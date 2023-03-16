import React from 'react';
import Image from 'next/future/image';
import HappyCustomerImg from '../../public/assets/images/subscription/happyCustomer.svg';
import EasyPayImg from '../../public/assets/images/subscription/easyPay.svg';
import FastTransactionImg from '../../public/assets/images/subscription/fastTransaction.svg';
import RoiImg from '../../public/assets/images/subscription/roi.svg';
import BusinessGrowthImg from '../../public/assets/images/subscription/businessGrowth.svg';

const joinCommunity = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-[white]">
      <div className="flex flex-row justify-between w-11/12 mt-[63px]">
        <div className="flex flex-col w-[489px]">
          <label className="not-italic font-Poppins font-semibold text-xgx leading-119 text-[#1E1E1E] w-full">
            Everything your
            <br /> business needs to
            <br /> scale up, we are there.
          </label>
          <p className="w-[426px] mt-7 font-Poppins font-normal text-base leading-159 text-[#000000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl
            nibh, suscipit sit amet ultricies sit amet, cursus vitae nisi.
          </p>
          <div className="flex flex-row items-center justify-center w-[153px] h-[34px] bg-[#028789] rounded-sm mt-[28px]">
            <p className="font-Poppins font-semibold leading-110 text-xsx text-[#ffffff]">
              Join the community
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[510px] relative">
          <Image className="" src={HappyCustomerImg} alt="happy customer" />
          <Image
            className="absolute ml-[330px]"
            src={EasyPayImg}
            alt="easy pay"
          />
          <Image
            className="absolute ml-[-85px] mt-[50px]"
            src={FastTransactionImg}
            alt="fast transaction"
          />
          <Image
            className="absolute ml-[-110px] mt-[200px]"
            src={RoiImg}
            alt="roi"
          />
          <Image
            className="absolute ml-[150px] mt-[330px]"
            src={BusinessGrowthImg}
            alt="business growth"
          />
        </div>
      </div>
    </div>
  );
};

export default joinCommunity;
