/* eslint-disable */
import React from 'react';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import CheckImg from '../../public/assets/images/subscription/check.svg';
import ShortLineImg from '../../public/assets/images/subscription/shortLine.svg';

interface Props {
  cardLabel: string;
  cardText?: string;
  cardPlan1?: string;
  cardPlan2?: string;
  cardPlan3?: string;
  cardPlan4?: string;
  cardPlan5?: string;
  cardPrice: string;
}

const priceCard = ({
  cardLabel,
  cardText,
  cardPlan1,
  cardPlan2,
  cardPlan3,
  cardPlan4,
  cardPlan5,
  cardPrice,
}: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-[283px] h-[312px] shadow-priceBoxSHadow bg-[white] rounded-t-md">
      <div className="flex flex-col justify-center w-full h-[52px] bg-[#028789] rounded-t-md pl-[22px]">
        <p className="font-Poppins font-semibold leading-7 text-lg text-[#ffffff]">
          {cardLabel}
        </p>
        <h6 className="font-Poppins font-normal text-ssx leading-4.5 text-[#ffffff]">
          {cardText}
        </h6>
      </div>
      <div className="flex flex-col w-full mt-[7px] pl-[22px]">
        <div className="flex flex-row gap-2 w-full mt-[7px]">
          <Image className="" src={CheckImg} alt="check" />
          <p className="font-Poppins font-normal text-xs leading-113 text-[#212121]">
            {cardPlan1}
          </p>
        </div>
        <div className="flex flex-row gap-2 w-full mt-[7px]">
          <Image className="" src={CheckImg} alt="check" />
          <p className="font-Poppins font-normal text-xs leading-113 text-[#212121]">
            {cardPlan2}
          </p>
        </div>
        <div className="flex flex-row gap-2 w-full mt-[7px]">
          <Image className="" src={CheckImg} alt="check" />
          <p className="font-Poppins font-normal text-xs leading-113 text-[#212121]">
            {cardPlan3}
          </p>
        </div>
        <div className="flex flex-row gap-2 w-full mt-[7px]">
          <Image className="" src={CheckImg} alt="check" />
          <p className="font-Poppins font-normal text-xs leading-113 text-[#212121]">
            {cardPlan4}
          </p>
        </div>
        <div className="flex flex-row gap-2 w-full mt-[7px]">
          <Image className="" src={CheckImg} alt="check" />
          <p className="font-Poppins font-normal text-xs leading-113 text-[#212121]">
            {cardPlan5}
          </p>
        </div>
        <Image className="mt-[14px]" src={ShortLineImg} alt="short line" />
        <label className="flex self-center font-Poppins font-medium text-2xl leading-9 tracking-tighter text-[#212121] mt-[7px]">
          {cardPrice}
        </label>
        <Image className="mt-[14px]" src={ShortLineImg} alt="short line" />
        <div
          onClick={() => {
            router.push(
              'https://tbh-dashboard-frontend-dev.sterlingapps.p.azurewebsites.net/signup'
            );
          }}
          className="flex flex-row items-center justify-center p-[8px] w-[242px] h-[38px] bg-[#768396] rounded-sm cursor-pointer"
        >
          <p className="font-Poppins font-bold text-xs leading-110 text-[#ffffff]">
            Get Started
          </p>
        </div>
      </div>
    </div>
  );
};

export default priceCard;
