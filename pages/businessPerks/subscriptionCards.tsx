/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import type { TDummy, TDummyCardData } from '../../utils/type';

interface Props {
  iconImage: string;
  desc: string;
  id: string;
  cardButtonText: string;
  cardUrl: string;
  isCardId: string;
  isAllCardActive: boolean;
}
const subscriptionCards = (
  {
    iconImage,
    desc,
    id,
    cardButtonText,
    cardUrl,
    isCardId,
    isAllCardActive,
  }: Props,
  props: any
) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [cardId, setCardId] = useState<string>('');
  const [isAllActive, setIsAllActive] = useState<boolean>(false);

  useEffect(() => {
    if (isAllCardActive === true) {
      setIsActive(true);
      setIsAllActive(true);
    } else {
      setCardId(isCardId);
      setIsActive(true);
      setIsAllActive(false);
      const el = document.getElementById('showAll');
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [isCardId, isAllCardActive]);

  return (
    <div
      className={`${
        (isActive && cardId === id) || (isActive && isAllActive)
          ? 'flex flex-col w-[320px] h-[220px] bg-[white] rounded-xlx pl-8 pt-4 shadow-smBoxWhite'
          : 'flex flex-col w-[320px] h-[220px] bg-[white] rounded-xlx pl-8 pt-4 shadow-smBoxWhite opacity-20'
      }`}
      id={id}
    >
      <img className="w-[115px] h-[35px]" src={iconImage} alt="sterling icon" />
      <p className="w-[175px] h-[40px] font-DMSANS font-normal not-italic text-sm leading-125 text-[#000000] mt-[35px]">
        {desc}
      </p>
      <Link
        href={`${
          (isActive && cardId === id) || (isActive && isAllActive)
            ? cardUrl
            : '#'
        }`}
      >
        <div
          className={`flex flex-row items-center justify-center p-2 h-[38px] w-[166px] rounded-sm border-1 border-secondGreen mt-[25px] ${
            (isActive && cardId === id) || (isActive && isAllActive)
              ? 'cursor-pointer'
              : 'cursor-default  pointer-events-none'
          }`}
        >
          <p className="not-italic font-Poppins font-semibold leading-110 text-xs text-[#028789]">
            {cardButtonText}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default subscriptionCards;
