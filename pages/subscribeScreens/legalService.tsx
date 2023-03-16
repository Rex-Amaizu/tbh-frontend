import React from 'react';
import Image from 'next/future/image';
import LegalImg from '../../public/assets/images/subscription/legalImg.svg';
import LegalBalImg from '../../public/assets/images/subscription/legalBal.svg';

const legalService = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-[white] mt-[100px]">
      <div className="flex flex-row justify-between w-10/12">
        <Image className="" src={LegalImg} alt="legal" />
        <div className="flex flex-col w-[493px]">
          <div className="flex flex-row gap-2 items-center">
            <Image className="" src={LegalBalImg} alt="legal bal" />
            <p className="font-Poppins font-normal leading-100 text-base tracking-tight text-[#212121]">
              Legal Service
            </p>
          </div>
          <label className="w-[508px] font-Poppins font-medium leading-131 text-2xl text-[#1E1E1E] mt-4">
            Enjoy value added legal services to help you on this journey
          </label>
          <p className="w-[454px] font-Poppins font-normal text-xsx leading-156 text-[#000000] mt-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra
            lacus sit amet pharetra scelerisque. Nunc semper vel turpis non
            tincidunt. Nunc eu pretium quam. Pellentesque orci ex, auctor eget
            mattis sed, condimentum a risus. Aliquam et dui sit amet neque
            suscipit lacinia eget vel libero. Proin non felis in odio lobortis
            maximus.
          </p>
          <div className="flex flex-row items-center justify-center p-[8px] w-[165px] h-[37px] bg-[#028789] rounded-sm cursor-pointer mt-[30px]">
            <p className="font-Poppins font-bold text-xs leading-110 text-[#ffffff]">
              Get Started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default legalService;
