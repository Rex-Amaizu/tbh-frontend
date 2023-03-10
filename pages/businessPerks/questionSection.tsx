/* eslint-disable */
import React from 'react';
import Image from 'next/future/image';
import CustomerServiceImg from 'public/assets/images/businessPerks/customerServiceImg.svg';

const questionSection = () => {
  return (
    <div className="flex flex-row gap-14 mt-[130px]">
      <Image className="" src={CustomerServiceImg} alt="customer service" />
      <div className="flex flex-col gap-8 w-auto h-auto">
        {/* merchant */}
        <div className="flex flex-col gap-4 w-[539px] h-[145px] bg-[white] shadow-smWhite rounded-mdx start pl-10 pt-2.5 pb-2.5 pr-2.5">
          <label className="w-[376px] font-Poppins not-italic font-semibold leading-131 text-xl text-[#000000]">
            Do I have to be a TBH merchant to enjoy the startup perks?
          </label>
          <p className="w-[495px] font-Poppins not-italic font-normal text-sm leading-5.5 text-sms">
            Aenean vel nulla orci. Pellentesque orci neque, pellentesque in orci
            vitae, pretium ornare elit. Maecenas laoreet
          </p>
        </div>
        {/* perk */}
        <div className="flex flex-col gap-4 w-[539px] h-[145px] bg-[white] shadow-smWhite rounded-mdx start pl-10 pt-2.5 pb-2.5 pr-2.5">
          <label className="w-[376px] font-Poppins not-italic font-semibold leading-131 text-xl text-[#000000]">
            How do I claim more than one startup perk at a time?
          </label>
          <p className="w-[495px] font-Poppins not-italic font-normal text-sm leading-5.5 text-sms">
            Aenean vel nulla orci. Pellentesque orci neque, pellentesque in orci
            vitae, pretium ornare elit. Maecenas laoreet
          </p>
        </div>
        {/* product */}
        <div className="flex flex-col gap-4 w-[539px] h-[145px] bg-[white] shadow-smWhite rounded-mdx start pl-10 pt-2.5 pb-2.5 pr-2.5">
          <label className="w-[376px] font-Poppins not-italic font-semibold leading-131 text-xl text-[#000000]">
            Can I feature my startup's product as a startup perk?
          </label>
          <p className="w-[495px] font-Poppins not-italic font-normal text-sm leading-5.5 text-sms">
            Aenean vel nulla orci. Pellentesque orci neque, pellentesque in orci
            vitae, pretium ornare elit. Maecenas laoreet
          </p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <label className="w-[132px] font-Poppins not-italic font-semibold leading-131 text-sms text-[#028789]">
            More questions?
          </label>
          <div className="flex flex-row items-center justify-center p-2.5 w-[308px] h-[41px] rounded-mdx bg-[#028789]">
            <p className="w-auto h-[21px] not-italic font-semibold leading-131 text-sms text-[#ffffff]">
              Contact the Startup Programs team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default questionSection;
