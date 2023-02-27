import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from '@/components/index/header/header';
import JoinCommunity from './joinCommunity';
import BusinessRegistration from './businessRegistration';
import BusinessPricing from './businessPricing';
import StartApplication from '@/pages/businessPerks/startApplication';
import LegalService from './legalService';
import BusinessAccountSection from './businessAccountsection';
import OnlineStoreSection from './onlineStoreSection';
import WorkingSpace from './workingSpace';
import EquipmentHire from './equipmentHire';
import Footer from '@/components/index/footer/footer';
// STYLES
import 'react-nice-scroll/dist/styles.css';
import styles from '../../styles/Home.module.css';

const index = () => {
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
          <JoinCommunity />
          <BusinessRegistration />
          <BusinessPricing />
          <BusinessAccountSection />
          <OnlineStoreSection />
          <WorkingSpace />
          <LegalService />
          <EquipmentHire />
          <StartApplication />
        </Fragment>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default index;
