/* eslint-disable */
import React, { useState, Fragment, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/index/header/header';
import Image from 'next/future/image';
import BundleBanner from './bundleBanner';
import QuestionSection from './questionSection';
import StartApplication from './startApplication';
import SubscriptionCards from './subscriptionCards';
import SearchIconImg from 'public/assets/images/businessPerks/searchInputIcon.svg';
import PlayButtonImg from 'public/assets/images/businessPerks/playButton.svg';
import DropDownArrImg from 'public/assets/images/businessPerks/dropDownArr.svg';
import { is } from '@react-spring/shared';
import Footer from '@/components/index/footer/footer';
import { useTabMedia, useMedia } from 'hooks/useResponsive';
// STYLES
import 'react-nice-scroll/dist/styles.css';
import styles from '../../styles/Home.module.css';
import cardButtons from './cardButtons';
import { CarFilled } from '@ant-design/icons';

type TDummy = {
  iconImage: string;
  desc: string;
  id: string;
  buttonText?: string;
  cardButtonText: string;
  cardUrl: string;
};

type TDummyCardData = TDummy[];

const dummyCardData: TDummyCardData = [
  {
    iconImage: '/assets/images/businessPerks/sterlingImg.svg',
    desc: 'Business Account/Digital Wallets',
    id: 'Banking/Financial',
    buttonText: 'Banking/Financial',
    cardButtonText: 'Subscribe',
    cardUrl: '',
  },
  {
    iconImage: '/assets/images/businessPerks/sterlingImg.svg',
    desc: 'POS requisition',
    id: 'Banking/Financial',
    // buttonText: '',
    cardButtonText: 'Subscribe',
    cardUrl: '',
  },
  {
    iconImage: '/assets/images/businessPerks/sterlingImg.svg',
    desc: 'QR code generation',
    id: 'Banking/Financial',
    // buttonText: '',
    cardButtonText: 'Subscribe',
    cardUrl: '',
  },
  {
    iconImage: '/assets/images/businessPerks/tbhImg.svg',
    desc: 'Business Registrations and Post Incorporation services',
    id: 'Business Registration',
    buttonText: 'Business Registration',
    cardButtonText: 'Subscribe',
    cardUrl: '',
  },
  {
    iconImage: '/assets/images/businessPerks/tbhImg.svg',
    desc: 'Co-working spaces',
    id: 'Working Spaces',
    buttonText: 'Working Spaces',
    cardButtonText: 'Book a space',
    cardUrl:
      'https://eur02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fbit.ly%2FTBHMeetingRoom&data=05%7C01%7CUfuoma.Afe%40sterling.ng%7Cfd43d2e360b34cb2bd8108db0a930e0c%7C4c8a9f7a11fc4fc290990b68f72a197e%7C0%7C0%7C638115398928987375%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=na2aANbQd3RoQyVN7JL5v%2B186lqo%2FAezXDdK04NYUQg%3D&reserved=0',
  },
  {
    iconImage: '/assets/images/businessPerks/tbhImg.svg',
    desc: 'Boardroom/ Meeting room',
    id: 'Working Spaces',
    // buttonText: 'Working Spaces-Boardroom',
    cardButtonText: 'Book a space',
    cardUrl:
      'https://eur02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fbit.ly%2FTBHMeetingRoom&data=05%7C01%7CUfuoma.Afe%40sterling.ng%7Cfd43d2e360b34cb2bd8108db0a930e0c%7C4c8a9f7a11fc4fc290990b68f72a197e%7C0%7C0%7C638115398928987375%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=na2aANbQd3RoQyVN7JL5v%2B186lqo%2FAezXDdK04NYUQg%3D&reserved=0',
  },
  {
    iconImage: '/assets/images/businessPerks/tbhImg.svg',
    desc: 'Fashion space',
    id: 'Working Spaces',
    // buttonText: 'Working Spaces-Fashion',
    cardButtonText: 'Book a space',
    cardUrl:
      'https://eur02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fbit.ly%2FTBHMeetingRoom&data=05%7C01%7CUfuoma.Afe%40sterling.ng%7Cfd43d2e360b34cb2bd8108db0a930e0c%7C4c8a9f7a11fc4fc290990b68f72a197e%7C0%7C0%7C638115398928987375%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=na2aANbQd3RoQyVN7JL5v%2B186lqo%2FAezXDdK04NYUQg%3D&reserved=0',
  },
  // {
  //   iconImage: '/assets/images/businessPerks/seamlessImg.svg',
  //   desc: 'Business Registrations and Post Incorporation services',
  //   id: 'seamless1',
  //   buttonText: 'Human Resource Services',
  //   cardButtonText: 'Subscribe',
  // },
  {
    iconImage: '/assets/images/businessPerks/simpleBeks.svg',
    desc: 'Accounting software helps you record your business ',
    id: 'Book-keeping/Accounting',
    buttonText: 'Book-keeping/Accounting',
    cardButtonText: 'Subscribe',
    cardUrl:
      'https://eur02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fapp.simplebks.com%2Fsign-up%3FreferralCode%3Dtbh&data=05%7C01%7CUfuoma.Afe%40sterling.ng%7C464b2f95730b46b630dd08db0f36919b%7C4c8a9f7a11fc4fc290990b68f72a197e%7C0%7C0%7C638120503591240613%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000%7C%7C%7C&sdata=WwE0rLp4hVlna7YEqWRG8GA36PT3rh%2Fljo%2B%2BxpCwoaM%3D&reserved=0',
  },
  // {
  //   iconImage: '/assets/images/businessPerks/socialPayImg.svg',
  //   desc: 'Generate links and start receiving payments',
  //   id: 'socialPay1',
  //   buttonText: 'Payment Solutions',
  //   cardButtonText: 'Subscribe',
  // },

  {
    iconImage: '/assets/images/businessPerks/bsfImg.svg',
    desc: 'Grow your business with quick access to loan',
    id: 'Business Loans',
    buttonText: 'Business Loans',
    cardButtonText: 'Subscribe',
    cardUrl: '',
  },

  // {
  //   iconImage: '/assets/images/businessPerks/airtelImg.svg',
  //   desc: 'Connectivity services provider of prepaid, postpaid mobile',
  //   id: 'airtel1',
  //   buttonText: 'Connectivity Services',
  //   cardButtonText: 'Subscribe',
  // },
  // {
  //   iconImage: '/assets/images/businessPerks/cafeOneImg.svg',
  //   desc: 'Co-working space and the best coffee',
  //   id: 'cafe1',
  //   buttonText: 'Working Spaces-Cafe',
  //   cardButtonText: 'Book a space',
  //   cardUrl: '',
  // },
];

const index = (props: any) => {
  const [isAllActive, setIsAllActive] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<string>('');
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isAllActiveDep, setIsAllActiveDep] = useState<boolean>(true);
  const [isOneActiveService, setIsOneActiveService] =
    useState<string>('kalsowejbsketosd');

  const belowTabDevice = useTabMedia();

  const allServices = () => {
    setIsAllActive(true);
    setIsAllActiveDep(true);
    setSearchTerm('');
    setIsOneActiveService('kalsowejbsketosd');
  };

  const setDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const subscribe = () => {
    props.subscription();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>TBH - The Business Hub</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#229698" />
        <meta name="msapplication-TileColor" content="#229698" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          property="og:title"
          content="TBH - The Business Hub"
          key="title"
        />
        <meta name="description" content="TBH - The Business Hub by Sterling" />
        <meta name="theme-color" content="#229698" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Fragment>
          <div className="flex flex-col bg-offWhite h-auto items-center justify-center">
            <BundleBanner />
            <div
              id="showAll"
              className="flex flex-row w-[255px] sm:w-[480px] ms:w-[622px] h-[62px] bg-[white] mt-11 rounded-xxl pl-0.5 pr-[24px] ms-pr-[0px] shadow-smWhite"
            >
              <input
                className="h-[62px] w-[360px] sm:w-[550px] rounded-xxl pl-6 ms:pl-12 outline-none"
                placeholder="Search for startups"
                value={searchTerm}
                onChange={(event) => {
                  if (event.target.value === '') {
                    setIsAllActive(true);
                    setSearchTerm('');
                    setIsActive('');
                    setIsAllActiveDep(true);
                    setIsOneActiveService('kalsowejbsketosd');
                  } else {
                    setIsAllActive(true);
                    setSearchTerm(event.target.value);
                    setIsActive(event.target.value);
                    setIsAllActiveDep(false);
                    setIsOneActiveService(event.target.value);
                  }
                }}
              />
              <Image className="" src={SearchIconImg} alt="search icon" />
            </div>
            <div className="flex flex-col md:flex-row gap-10 lg:gap-20 h-auto mt-12 bg-offWhite w-11/12 md:justify-center items-center md:items-start">
              {belowTabDevice ? (
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center w-[255px] sm:w-[480px] ms:w-[622px] h-[62px] mt-4 rounded-lg pl-6 pr-6 bg-[#E8E8E8]">
                    <label className="font-Poppins font-normal text-[17px] leading-110 text-[#212121]">
                      All services
                    </label>
                    <Image
                      onClick={setDropDown}
                      className="cursor-pointer"
                      src={DropDownArrImg}
                      alt="drop icon"
                    />
                  </div>

                  {isDropDown ? (
                    <div className="flex flex-col gap-[20px] justify-center items-start pt-9 pl-7 pb-10 bg-[#ffffff] w-[255px] sm:w-[480px] ms:w-[622px] h-auto">
                      <p
                        onClick={allServices}
                        className="font-Poppins font-normal text-xs sm:text-[17px] leading-[26px] text-[#000000] cursor-pointer"
                      >
                        All Services
                      </p>
                      {dummyCardData.map((card) => (
                        <p
                          onClick={() => {
                            setSearchTerm('');
                            setIsAllActive(false);
                            setIsActive(card.id);
                          }}
                          className="font-Poppins font-normal text-xs sm:text-[17px] leading-[26px] text-[#000000] cursor-pointer"
                        >
                          {card.buttonText}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="flex flex-col gap-2 pt-6 items-center rounded-mdx w-[180px] lg:w-[20%] h-full bg-[#ffffff] mt-12 pb-[24px]">
                  {/* All services */}

                  <div
                    className={`flex flex-row gap-1 items-center ms:pl-5 md:pl-2.5 lg:pl-5 pt-2.5 rounded-smr ${
                      isAllActive && isAllActiveDep
                        ? 'bg-[#fff2cc]'
                        : 'bg-[#F7F7F8]'
                    } ms:w-[120px] md:w-[120px] lg:w-[95%] h-[54px] cursor-pointer`}
                    onClick={allServices}
                  >
                    {isAllActive && isAllActiveDep ? (
                      <Image
                        className=""
                        src={PlayButtonImg}
                        alt="play button"
                      />
                    ) : null}
                    <p className="not-italic font-Poppins font-normal text-ss lg:text-sm leading-5 text-[#212121]">
                      All Services
                    </p>
                  </div>

                  {dummyCardData.map((card) => (
                    <div
                      className={`${
                        card.buttonText === undefined ? 'hidden' : 'flex'
                      } flex-row gap-1 items-center ms:pl-5 md:pl-2.5 lg:pl-5 pt-2.5 rounded-smr ${
                        (isActive === card.id && !isAllActive) ||
                        (searchTerm === card.id && !isAllActive) ||
                        (searchTerm === isActive && !isAllActive) ||
                        card.id
                          ?.toLowerCase()
                          .includes(isOneActiveService.toLowerCase())
                          ? 'bg-[#fff2cc]'
                          : 'bg-[#F7F7F8]'
                      } ms:w-[120px] md:w-[120px] lg:w-[95%] h-[54px] cursor-pointer`}
                      onClick={() => {
                        setSearchTerm('');
                        setIsAllActive(false);
                        setIsOneActiveService('kalsowejbsketosd');

                        setIsActive(card.id);
                      }}
                    >
                      {(isActive === card.id && !isAllActive) ||
                      (searchTerm === card.id && !isAllActive) ||
                      (searchTerm === isActive && !isAllActive) ||
                      card.id
                        ?.toLowerCase()
                        .includes(isOneActiveService.toLowerCase()) ? (
                        <Image
                          className=""
                          src={PlayButtonImg}
                          alt="play button"
                        />
                      ) : null}
                      <p className="not-italic font-Poppins font-normal text-ss lg:text-sm leading-5 text-[#212121]">
                        {card.buttonText}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div
                className={`flex flex-row justify-center md:justify-start gap-5 lg:gap-12 flex-wrap w-[255px] sm:w-[500px] ms:w-[600px] md:w-[80%] h-auto bg-offWhite mt-0 ms:mt-12`}
              >
                {dummyCardData
                  .filter((cardData) => {
                    if (searchTerm == '') {
                      return cardData;
                    } else if (
                      cardData.id
                        ?.toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return cardData;
                    }
                  })
                  .map((cardData) => (
                    <div
                      className={`${
                        isActive === cardData.id ||
                        isAllActive ||
                        searchTerm === isActive
                          ? 'flex'
                          : 'hidden'
                      }`}
                    >
                      <SubscriptionCards
                        iconImage={cardData.iconImage}
                        desc={cardData.desc}
                        id={cardData.id}
                        cardButtonText={cardData.cardButtonText}
                        cardUrl={cardData.cardUrl}
                        isCardId={isActive}
                        isAllCardActive={isAllActive}
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex items-center w-11/12 justify-center">
              <QuestionSection />
            </div>
            <StartApplication />
          </div>
        </Fragment>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default index;
