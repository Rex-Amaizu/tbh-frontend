import React from 'react';

// hooks
import { useMedia } from 'hooks/useResponsive';

// components
import Carousell from './carousel';

// styles sheet
import styles from '../../../styles/Testimonials.module.css';
import MobileCarousel from './mobile/mobile';

const Testiomonials = () => {
  const surfacePro7andAbove = useMedia('(min-width: 912px)');
  const tabToMobile = useMedia('(max-width: 900px)');

  return (
    <div className={styles.testimonialContainer}>
      <h3 className=" font-Poppins">
        You don&apos;t need to know it all. We are here to <br /> hold your hand
        and <br />
        <span>ensure you get it right</span>
      </h3>
      {surfacePro7andAbove && <Carousell />}
      {tabToMobile && <MobileCarousel />}
    </div>
  );
};

export default Testiomonials;
