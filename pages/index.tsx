import React, { Fragment, useEffect } from 'react';
// import type { NextPage } from 'next';
import Head from 'next/head';
// import { useRouter } from 'next/router';
// import { ScrollContainer } from 'react-nice-scroll';
import Header from '@/components/index/header/header';
import Banner from '@/components/index/banner';
import PlaySection from '@/components/index/playSectionn';
import LogoSection from '@/components/index/logoSection/logoSection';
import Footer from '@/components/index/footer/footer';
import Testimonials from '@/components/index/testimonials/testimonials';
// import TrustedPartner from '@/components/index/trustedPartner/trustedPartner';
import Faq from '@/components/index/faq/faq';
import ContactCenter from '@/components/index/contactCenter/contactCenter';
import OurSolution from '@/components/index/ourSolution/ourSolution';
import BusinessResources from '@/components/index/businessResources/businessResources';
import Index from '@/components/index/loanJointSection';
import MiniBanner from '@/components/index/miniBanner/miniBanner';
import PriceSection from '@/components/index/priceSection';

// STYLES
import 'react-nice-scroll/dist/styles.css';
import styles from '../styles/Home.module.css';

const Home = () => {
  useEffect(() => {
    const idName = localStorage.getItem('idName');
    localStorage.removeItem('idName');

    if (idName === 'solutions') {
      const el = document.getElementById('solutions');
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }

    if (idName === 'payment_section') {
      const el = document.getElementById('payment_section');
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }

    if (idName === 'pricing_section') {
      const el = document.getElementById('pricing_section');
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, []);

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
          <Banner />
          <PlaySection />
          <OurSolution />
          <Index />
          <LogoSection />
          <Testimonials />
          {/* <TrustedPartner index={0} active={0} /> */}
          <PriceSection />
          <BusinessResources />
          <Faq />
          <MiniBanner />
          <ContactCenter />
        </Fragment>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
