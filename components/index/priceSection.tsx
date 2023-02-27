import React from 'react';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import linePrice from '../../public/assets/images/price-section/linePrice.svg';
import checkImg from '../../public/assets/images/price-section/checkImg.svg';
import moneyCard from '../../public/assets/images/price-section/naira.svg';
import priceArrowIcon from '../../public/assets/images/price-section/priceArrowIcon.svg';
import * as AiIcons from 'react-icons/ai';

// styles
import styles from '../../styles/TrustedPartner.module.css';

const styleIcon = { border: '2.25px', color: '#229698' };

const PriceSection = () => {
  const router = useRouter();
  return (
    <div
      id="pricing_section"
      className="flex flex-col gap-y-12 h-auto w-full bg-[#F6F6F6] items-center"
    >
      <div className="flex flex-col gap-y-2.5 w-full items-center pt-10">
        <p className="font-Poppins font-medium not-italic leading-100 items-center xl:text-xl md:text-lg sm:text-xs text-[#F8B400]">
          Our Pricing
        </p>
        <label className="font-Poppins font-medium not-italic leading-[16px] text-sm md:text-base items-center uppercase text-[#028789]">
          Choose A Business Registration Plan
        </label>
      </div>
      <div className="flex flex-col items-center sl:flex-row gap-y-9 md:gap-x-1 lg:gap-x-9 mb-8">
        <div className="flex flex-col items-center ms:flex-row gap-y-9 ms:gap-x-9 lg:gap-x-9">
          {/* FIRST CARD */}
          <div
            className={`${styles.cardShadow} flex flex-col gap-y-2.2 w-61 h-auto pl-6 pt-3 pb-3 bg-[#ffffff] border-1.5 border-[#DDDDDD] hover:border-[#F8B400]  rounded-md`}
          >
            <div className="flex flex-col -mb-1">
              <label className="font-Poppins not-italic font-semibold leading-5 text-xsx text-[#229698]">
                Business Registration
              </label>
              <p className="font-Poppins not-italic font-normal leading-4 text-fxs text-[#000000]">
                Register A Business Name
              </p>
            </div>
            <Image
              src={linePrice}
              alt="linePrice"
              className="w-52 h-0.5 mt-1.5"
            />
            <div className="flex flex-col gap-y-1.7 mt-0.6 mb-4">
              <div className="flex flex-row gap-x-2">
                <Image src={checkImg} alt="checkImg" className="" />
                <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                  Register A Business Name
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <Image src={checkImg} alt="checkImg" className="" />
                <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                  TIN Registration
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <Image src={checkImg} alt="checkImg" className="" />
                <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                  Free Banking for 3 years
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <Image src={checkImg} alt="checkImg" className="" />
                <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                  Search Report
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <Image src={checkImg} alt="checkImg" className="" />
                <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                  Open an Account
                </p>
              </div>
            </div>
            <Image src={linePrice} alt="linePrice" className="w-52 h-0.5" />
            <div
              style={{ display: 'flex', justifyContent: 'center' }}
              className="flex flex-row gap-x-1.5"
            >
              <Image src={moneyCard} alt="money" className="" />
              <p className="flex items-center tracking-tighter text-[#212121] font-Poppins not-italic font-medium leading-7 text-lg">
                23,000
              </p>
            </div>
            <Image
              src={linePrice}
              alt="linePrice"
              className="w-52 h-0.5  mb-3"
            />
            <div className="flex flex-row items-center justify-center mb-3 cursor-pointer">
              <label
                onClick={() => {
                  router.push(
                    'https://tbh-dashboard-frontend-dev.sterlingapps.p.azurewebsites.net/signup'
                  );
                }}
                className="font-Poppins not-italic font-semibold text-xsx leading-5 text-[#229698] cursor-pointer"
              >
                GET STARTED
              </label>
              <AiIcons.AiOutlineArrowRight style={styleIcon} />
            </div>
          </div>

          {/* SECOND CARD */}
          <div
            className={`${styles.cardShadow} flex flex-col gap-y-2.2 w-61 h-auto pl-3 pt-3 pb-3 bg-[#ffffff] border-1.5 border-[#DDDDDD] hover:border-[#F8B400]  rounded-md`}
          >
            <div className="flex flex-col -mb-1">
              <label className="font-Poppins not-italic font-semibold leading-5 text-xsx text-[#229698]">
                Limited Liability
              </label>
              <p className="font-Poppins not-italic font-normal leading-4 text-fxs text-[#000000]">
                Less than 1 million shares
              </p>
            </div>
            <Image
              src={linePrice}
              alt="linePrice"
              className="w-52 h-0.5 mt-1.5"
            />
            <div className="flex flex-col gap-y-1.7 mt-0.6 mb-4">
              <div className="flex flex-row gap-x-2">
                <Image src={checkImg} alt="checkImg" className="" />
                <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                  Register a Limited Liability Company
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <Image src={checkImg} alt="checkImg" className="" />
                <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                  TIN Registration
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <Image src={checkImg} alt="checkImg" className="" />
                <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                  Free Banking for 3 years
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <Image src={checkImg} alt="checkImg" className="" />
                <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                  Search Report
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <Image src={checkImg} alt="checkImg" className="" />
                <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                  Open an Account
                </p>
              </div>
            </div>
            <Image src={linePrice} alt="linePrice" className="w-52 h-0.5" />
            <div
              style={{ display: 'flex', justifyContent: 'center' }}
              className="flex flex-row gap-x-1.5"
            >
              <Image src={moneyCard} alt="money" className="" />
              <p className="flex items-center tracking-tighter text-[#212121] font-Poppins not-italic font-medium leading-7 text-lg">
                47,000
              </p>
            </div>
            <Image
              src={linePrice}
              alt="linePrice"
              className="w-52 h-0.5  mb-3"
            />
            <div className="flex flex-row items-center justify-center mb-3 cursor-pointer">
              <label className="font-Poppins not-italic font-semibold text-xsx leading-5 text-[#e6e6e6]">
                COMING SOON...
              </label>
              {/* <AiIcons.AiOutlineArrowRight style={styleIcon} /> */}
            </div>
          </div>
        </div>
        {/* THIRD CARD */}
        <div
          className={`${styles.cardShadow} flex flex-col gap-y-2.2 w-61 h-auto pl-3 pt-3 pb-3 bg-[#ffffff] border-1.5 border-[#DDDDDD] hover:border-[#F8B400]  rounded-md`}
        >
          <div className="flex flex-col -mb-1">
            <label className="font-Poppins not-italic font-semibold leading-5 text-xsx text-[#229698]">
              Incorporated Trustee
            </label>
            <p className="font-Poppins not-italic font-normal leading-4 text-fxs text-[#000000]">
              NGOs, Clubs, Religious Bodies, Associations
            </p>
          </div>
          <Image
            src={linePrice}
            alt="linePrice"
            className="w-52 h-0.5 mt-1.5"
          />
          <div className="flex flex-col gap-y-1.7 mt-0.6 mb-4">
            <div className="flex flex-row gap-x-2">
              <Image src={checkImg} alt="checkImg" className="" />
              <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                Register an Incorporated trustee
              </p>
            </div>
            <div className="flex flex-row gap-x-2">
              <Image src={checkImg} alt="checkImg" className="" />
              <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                TIN Registration
              </p>
            </div>
            <div className="flex flex-row gap-x-2">
              <Image src={checkImg} alt="checkImg" className="" />
              <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                Free Banking for 3 years
              </p>
            </div>
            <div className="flex flex-row gap-x-2">
              <Image src={checkImg} alt="checkImg" className="" />
              <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                Search Report
              </p>
            </div>
            <div className="flex flex-row gap-x-2">
              <Image src={checkImg} alt="checkImg" className="" />
              <p className="font-Poppins not-italic font-normal text-ssx leading-4 text-[#212121]">
                Open an Account
              </p>
            </div>
          </div>
          <Image src={linePrice} alt="linePrice" className="w-52 h-0.5" />
          <div
            style={{ display: 'flex', justifyContent: 'center' }}
            className="flex flex-row gap-x-1.5"
          >
            <Image src={moneyCard} alt="money" className="" />
            <p className="flex items-center tracking-tighter text-[#212121] font-Poppins not-italic font-medium leading-7 text-lg">
              150,000
            </p>
          </div>
          <Image src={linePrice} alt="linePrice" className="w-52 h-0.5  mb-3" />
          <div className="flex flex-row items-center justify-center mb-3 cursor-pointer">
            <label className="font-Poppins not-italic font-semibold text-xsx leading-5 text-[#e6e6e6]">
              COMING SOON...
            </label>
            {/* <AiIcons.AiOutlineArrowRight style={styleIcon} /> */}
          </div>
        </div>
      </div>
      {/* <div
        className={`${styles.priceButton} flex flex-row items-center justify-center gap-x-1 w-52 h-8.1 rounded-smr mb-8.2`}
      >
        <label className="font-Inter not-italic font-semibold leading-110 text-[#ffffff] uppercase text-ssx">
          Compare Plans & Features
        </label>
        <Image src={priceArrowIcon} alt="linePrice" className="w-3.5 h-3.5" />
      </div> */}
    </div>
  );
};

export default PriceSection;
