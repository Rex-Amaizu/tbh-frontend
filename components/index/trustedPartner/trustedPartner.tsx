/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Image from 'next/future/image';

// hooks
//import { useMedia } from 'hooks/useResponsive';

// components
import BusinessResources from '../businessResources/businessResources';

// images
//import underline from '../../../public/assets/images/home/Rectangle136.svg';
// import mobileUnderline from '../../../public/assets/images/home/Rectangle154.svg';
import Subtract from '../../../public/assets/images/home/Subtract.svg';
import SmallBusinessIcon from '../../../public/assets/images/home/smallBusiness.svg';
import Organization from '../../../public/assets/images/home/enterprizeOrganiztions.svg';
import Freelancers from '../../../public/assets/images/home/freelancers.svg';
import PriceSection from '../priceSection';
import TrustedLine from '../../../public/assets/images/home/trustedLine.svg';
import TrustedCardLine from '../../../public/assets/images/home/trustedCardLine.svg';
import TrustedCardLineActive from '../../../public/assets/images/home/trustedCardLineActive.svg';
import GroupArrRight from '../../../public/assets/images/home/groupArrRight.svg';
import GroupArrLeft from '../../../public/assets/images/home/groupArrLeft.svg';
import FaqArrow from '../../../public/assets/images/home/FAQarrow.svg';
import cards from './cards';

// styles sheet
import styles from '../../../styles/TrustedPartner.module.css';
import { data } from '../faq/data';

type TProps = {
  index: number;
  active: number;
};

const TrustedPartner = ({ index, active }: TProps) => {
  const [cardIndex, setCardIndex] = useState(cards[1]);
  const [cardLeft, setCardLeft] = useState(cards[0]);
  const [cardRight, setCardRight] = useState(cards[2]);

  const next = () => {
    setCardIndex(cards[cardIndex.id + 1]);
    setCardLeft(cards[cardIndex.id]);
    setCardRight(cards[cardIndex.id + 2]);
    if (cardIndex.id === cards.length - 1) {
      setCardIndex(cards[0]);
      setCardLeft(cards[cardIndex.id]);
      setCardRight(cards[0 + 1]);
    }
    if (cardIndex.id === cards.length - 2) {
      setCardIndex(cards[cardIndex.id + 1]);
      setCardLeft(cards[cardIndex.id]);
      setCardRight(cards[0]);
    }
  };
  const prev = () => {
    setCardIndex(cards[cardIndex.id - 1]);
    setCardLeft(cards[cardIndex.id - 2]);
    setCardRight(cards[cardIndex.id]);
    if (cardIndex.id === 0) {
      setCardIndex(cards[cards.length - 1]);
      setCardLeft(cards[cards.length - 2]);
      setCardRight(cards[0]);
    }
    if (cardIndex.id === 1) {
      setCardIndex(cards[0]);
      setCardLeft(cards[cards.length - 1]);
      setCardRight(cards[1]);
    }
  };
  return (
    <>
      <div className={styles.trustedPartnerContainer}>
        {/*  ---------------------------- TEXT  HEADING ------------------------------- */}
        <div className={styles.textContainer}>
          <p className={`${styles.textContainerParagraph} font-Poppins`}>
            No matter where you are on your journey ,
          </p>
          <div className={`${styles.textContainerHeading} font-Poppins`}>
            we are <span className=" font-Poppins">your trusted partner</span>
          </div>
          <Image
            className="h-[4px] sm:h-[2px] w-[180px] sm:w-[230px] ms:w-[355px]"
            src={TrustedLine}
          />
        </div>
        {/*  ---------------------------- CARDS  SECTION ------------------------------- */}

        <div className={styles.cardsContainer}>
          {/* -----------------------------   MOBILE CARDS -----------------------------------  */}
          {cards.map((card, i) => (
            <div className={styles.trustedPartnerCard}>
              <div className={styles.cardHeader}>
                <p>
                  {card.pHeader}
                  <br /> {card.brHeader}
                </p>
                <Image className="h-[4px] mt-[15px]" src={TrustedCardLine} />
                <h1>
                  {card.h1Body}
                  <br /> {card.brBody1}
                  <br /> {card.brBody2}
                  <br /> {card.brBody3}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* -----------------------------   TABLET AND DESKTOP CARDS -----------------------------------  */}
        <div className={styles.cardCarousel}>
          <div className={styles.inActiveCard}>
            <div key={cardLeft.id} className={styles.trustedPartnerCard}>
              <div className={styles.cardHeader}>
                <p>
                  {cardLeft.pHeader}
                  <br /> {cardLeft.brHeader}
                </p>
                <Image className="h-[4px] mt-[15px]" src={TrustedCardLine} />
                <h1>
                  {cardLeft.h1Body}
                  <br /> {cardLeft.brBody1}
                  <br /> {cardLeft.brBody2}
                  <br /> {cardLeft.brBody3}
                </h1>
              </div>
            </div>

            <div key={cardRight.id} className={styles.trustedPartnerCard}>
              <div className={styles.cardHeader}>
                <p>
                  {cardRight.pHeader}
                  <br /> {cardRight.brHeader}
                </p>
                <Image className="h-[4px] mt-[15px]" src={TrustedCardLine} />
                <h1>
                  {cardRight.h1Body}
                  <br /> {cardRight.brBody1}
                  <br /> {cardRight.brBody2}
                  <br /> {cardRight.brBody3}
                </h1>
              </div>
            </div>
          </div>

          <div key={cardIndex.id} className={styles.activeCard}>
            <Image
              className={styles.arrowRight}
              src={GroupArrRight}
              onClick={next}
            />
            <Image
              className={styles.arrowLeft}
              src={GroupArrLeft}
              onClick={prev}
            />
            <div className={styles.cardHeaderActive}>
              <p>
                {cardIndex.pHeader}
                <br /> {cardIndex.brHeader}
              </p>
              <Image
                className="h-[4px] mt-[40px]"
                src={TrustedCardLineActive}
              />
              <h1>
                {cardIndex.h1Body}
                <br /> {cardIndex.brBody1}
                <br /> {cardIndex.brBody2}
                <br /> {cardIndex.brBody3}
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.startHere}>
          <p className="font-Inter not-italic font-normal font-[13px] leading-110 text-[#ffffff]">
            Start here
          </p>
          <Image className="w-[14px] h-[14px]" src={FaqArrow} />
        </div>
      </div>
      {/* <PriceSection />/
      <BusinessResources /> */}
    </>
  );
};

export default TrustedPartner;
