import React from 'react';
import Image from 'next/future/image';
import BusinessCustomerImg from '../../public/assets/images/subscription/businessCustomer.svg';
import BusinessFileImg from '../../public/assets/images/subscription/businessFile.svg';

const businessRegistration = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-[white]">
      <div className="flex flex-row justify-between mt-[140px] w-10/12">
        <Image className="" src={BusinessCustomerImg} alt="business customer" />
        <div className="flex flex-col w-[493px]">
          <div className="flex flex-row gap-2 items-center">
            <Image className="" src={BusinessFileImg} alt="business file" />
            <p className="font-Poppins font-normal leading-100 text-base tracking-tight text-[#212121]">
              Business Registration
            </p>
          </div>
          <label className="w-[426px] font-Poppins font-semibold leading-119 text-3xl text-[#1E1E1E] mt-4">
            Get your business registered in{' '}
            <span className="text-[#028789]">10 minutes</span>
          </label>
          <p className="w-[493px] font-Poppins font-normal text-sm leading-5 text-[#000000] mt-[32px]">
            Let us help you register your business without hassles and at a
            highly subsidized fee. We’ll create the legal documents, file the
            paperwork and apply for your Tax identification number.
          </p>
          <p className="w-[493px] font-Poppins font-normal text-sm leading-5 text-[#000000] mt-7">
            Our focus is to have you in business within a few days
            <br /> Our packages (This would be a display of all the business
            registration types.) See below
          </p>
        </div>
      </div>
    </div>
  );
};

export default businessRegistration;
