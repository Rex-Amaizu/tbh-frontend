/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Image from 'next/future/image';
import PlayButtonImg from '../../public/assets/images/businessPerks/playButton.svg';

interface Props {
  id: string;
  buttonText: string;
  isAll: boolean;
}

const cardButtons = ({ id, buttonText, isAll }: Props) => {
  const [isActive, setIsActive] = useState<string>('');
  const [isAllCardActive, setIsAllCardActive] = useState<boolean>(false);

  useEffect(() => {
    setIsAllCardActive(isAll);
  }, [isAll]);

  const otherServices = () => {
    setIsAllCardActive(false);
    setIsActive(id);

    const el = document.getElementById('all');
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className={`flex flex-row gap-1 items-center pl-5 pt-2.5 pb-2.5 rounded-smr ${
        isActive || isAllCardActive ? 'bg-[#fff2cc]' : 'bg-[#F7F7F8]'
      } w-[182px] h-[42px] cursor-pointer`}
      onClick={otherServices}
    >
      {isActive || isAllCardActive ? (
        <Image className="" src={PlayButtonImg} alt="play button" />
      ) : null}
      <p className="not-italic font-Poppins font-normal text-sm leading-5 text-[#212121]">
        {buttonText}
      </p>
    </div>
  );
};

export default cardButtons;
