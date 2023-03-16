import React from 'react';
import Image from 'next/future/image';
// import { useRouter } from 'next/router';
import BackgroundImg from '../../public/assets/images/price-section/priceBg.svg';
import PriceCard from '../../pages/subscribeScreens/priceCard';

// styles
import styles from '../../styles/PriceSection.module.css';

// const styleIcon = { border: '2.25px', color: '#229698' };

const PriceSection = () => {
  // const router = useRouter();
  return (
    <div id="pricing_section" className={`${styles.priceContainer}`}>
      <Image className="w-full" src={BackgroundImg} alt="bg img" />
      <label>Our Pricing</label>
      <p>Choose A Plan That Suits Your Business</p>
      <div className={styles.cardDiv}>
        <PriceCard
          cardLabel="Business Name"
          cardPlan1="Business Name Registration"
          cardPlan2="TIN Registration"
          cardPlan3="Free Banking For 3 Years"
          cardPlan4="Search Report"
          cardPlan5="Open An Account"
          cardPrice="₦23,000"
        />
        <PriceCard
          cardLabel="Limited Liability"
          cardText="Less than 1 million shares"
          cardPlan1="Register a Limited Liability Company"
          cardPlan2="TIN Registration"
          cardPlan3="Free Banking For 3 Years"
          cardPlan4="Search Report"
          cardPlan5="Open An Account"
          cardPrice="₦47,000"
        />
        <PriceCard
          cardLabel="Incorporated Trustess"
          cardText="for NGOs, Religious body, etc"
          cardPlan1="Register a Limited Liability Company"
          cardPlan2="TIN Registration"
          cardPlan3="Free Banking For 3 Years"
          cardPlan4="Search Report"
          cardPlan5="Open An Account"
          cardPrice="₦150,000"
        />
      </div>
      <div className={styles.buttonDiv}>
        <p>Compare all prices</p>
      </div>
    </div>
  );
};

export default PriceSection;
