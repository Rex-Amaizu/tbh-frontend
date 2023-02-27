/* eslint-disable */
import React, { useState, Fragment } from 'react';
import Head from 'next/head';
import Header from '@/components/index/header/header';
import Image from 'next/future/image';
import BundleBanner from './bundleBanner';
import QuestionSection from './questionSection';
import StartApplication from './startApplication';
import SubscriptionCards from './subscriptionCards';
import SearchIconImg from 'public/assets/images/businessPerks/searchInputIcon.svg';
import PlayButtonImg from 'public/assets/images/businessPerks/playButton.svg';
import { is } from '@react-spring/shared';
import Footer from '@/components/index/footer/footer';
// STYLES
import 'react-nice-scroll/dist/styles.css';
import styles from '../../styles/Home.module.css';

type TDummy = {
  iconImage: string;
  desc: string;
  id: string;
  buttonText: string;
};

type TDummyCardData = TDummy[];

const dummyCardData: TDummyCardData = [
  {
    iconImage: '/assets/images/businessPerks/sterlingImg.svg',
    desc: 'Business Account/Digital Wallets',
    id: 'sterling1',
    buttonText: 'Banking/Financial',
  },
  {
    iconImage: '/assets/images/businessPerks/sterlingImg.svg',
    desc: 'POS requisition',
    id: 'sterling2',
    buttonText: 'Book-keeping/Accounting',
  },
  {
    iconImage: '/assets/images/businessPerks/sterlingImg.svg',
    desc: 'QR code generation',
    id: 'sterling3',
    buttonText: 'Business Loans',
  },
  {
    iconImage: '/assets/images/businessPerks/socialPayImg.svg',
    desc: 'Generate links and start receiving payments',
    id: 'socialPay1',
    buttonText: 'Business SetUp',
  },
  {
    iconImage: '/assets/images/businessPerks/tbhImg.svg',
    desc: 'Business Registrations and Post Incorporation services',
    id: 'tbh1',
    buttonText: 'Connectivity Services',
  },
  {
    iconImage: '/assets/images/businessPerks/seamlessImg.svg',
    desc: 'Business Registrations and Post Incorporation services',
    id: 'seamless1',
    buttonText: 'Payment Solutions',
  },
  {
    iconImage: '/assets/images/businessPerks/bsfImg.svg',
    desc: 'Grow your business with quick access to loan',
    id: 'bsf1',
    buttonText: 'Human Resource Services',
  },
  {
    iconImage: '/assets/images/businessPerks/simpleBeksImg.svg',
    desc: 'Accounting software helps you record your business ',
    id: 'simpleBeks1',
    buttonText: 'Engagement/CR services',
  },
  {
    iconImage: '/assets/images/businessPerks/airtelImg.svg',
    desc: 'Connectivity services provider of prepaid, postpaid mobile',
    id: 'airtel1',
    buttonText: 'Internet Services',
  },
];

const index = (props: any) => {
  const [isAllActive, setIsAllActive] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<string>('');

  const allServices = () => {
    setIsAllActive(true);
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
            <div className="flex flex-row w-[622px] h-[62px] bg-[white] mt-11 rounded-xxl pl-0.5 shadow-smWhite">
              <input
                className="h-[62px] w-[550px] rounded-xxl pl-12 outline-none"
                placeholder="Search for startups"
              />
              <Image className="" src={SearchIconImg} alt="search icon" />
            </div>
            <div className="flex flex-row gap-20 h-auto mt-12 bg-offWhite w-11/12 justify-center">
              <div className="flex flex-col gap-2 pt-6 pl-1.5 rounded-mdx w-[196px] h-auto bg-[white] mt-12 pb-8">
                {/* All services */}

                <div
                  className={`flex flex-row gap-1 items-center pl-5 pt-2.5 pb-2.5 rounded-smr ${
                    isAllActive ? 'bg-[#fff2cc]' : 'bg-[#F7F7F8]'
                  } w-[182px] h-[54px] cursor-pointer`}
                  onClick={allServices}
                >
                  {isAllActive ? (
                    <Image className="" src={PlayButtonImg} alt="play button" />
                  ) : null}
                  <p className="not-italic font-Poppins font-normal text-sm leading-5 text-[#212121]">
                    All Services
                  </p>
                </div>

                {dummyCardData.map((card) => (
                  <div
                    className={`flex flex-row gap-1 items-center pl-5 pt-2.5 pb-2.5 rounded-smr ${
                      isActive === card.id || isAllActive
                        ? 'bg-[#fff2cc]'
                        : 'bg-[#F7F7F8]'
                    } w-[182px] h-[54px] cursor-pointer`}
                    onClick={() => {
                      setIsAllActive(false);
                      setIsActive(card.id);
                    }}
                  >
                    {isActive === card.id || isAllActive ? (
                      <Image
                        className=""
                        src={PlayButtonImg}
                        alt="play button"
                      />
                    ) : null}
                    <p className="not-italic font-Poppins font-normal text-sm leading-5 text-[#212121]">
                      {card.buttonText}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-row gap-5 flex-wrap w-[809px] h-auto bg-offWhite mt-12">
                {dummyCardData.map((cardData) => (
                  <SubscriptionCards
                    iconImage={cardData.iconImage}
                    desc={cardData.desc}
                    id={cardData.id}
                    isCardId={isActive}
                    isAllCardActive={isAllActive}
                  />
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
