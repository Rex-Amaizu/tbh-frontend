import { useState } from 'react';
// import Image from 'next/future/image';
import Link from 'next/link';
import Trail from 'utils/trail';
// import Subtract from '../../public/assets/images/home/Subtract.svg';
import styles from '../../styles/Banner.module.css';
import { useIpadAirMobileMedia, useMedia } from 'hooks/useResponsive';

const Banner = () => {
  const ipadAir = useIpadAirMobileMedia();
  const tablet2desktop = useMedia('(min-width: 821px)');
  // const scaleToBigScreens = useMedia('(min-width: 768px)');
  // const  = useMedia('(max-width: 393px)');

  const [open, set] = useState(true);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.bannerTtext}>
          <h2 className={`${styles.text} font-Poppins font-bold`}>
            A stack of offerings
          </h2>
          <h2 className="font-Poppins font-bold">
            designed to help
            <br /> you <span className={styles.message}></span>{' '}
            {ipadAir && <span className={styles.grow}>grow</span>}
          </h2>
        </div>

        {tablet2desktop && (
          <Trail open={open} onClick={() => set((state) => !state)}>
            <div className={`${styles.subText} font-Poppins font-normal`}>
              The Business Hub is a platform for start-ups {ipadAir && <br />}{' '}
              and growing
              <br /> businesses, we will help you scale and {ipadAir && (
                <br />
              )}{' '}
              provide solutions
              <br /> to the challenges you may face on this {ipadAir && (
                <br />
              )}{' '}
              journey.
            </div>
          </Trail>
        )}

        <div className={styles.bannerBtn}>
          <Link href="https://openaccountonline.sterling.ng">
            <button
              style={{
                display: 'inline-flex',
              }}
            >
              <span className={`${styles.btnText} font-Poppins mr-3`}>
                {ipadAir ? 'Open an Account' : 'Open Business Account'}
              </span>
              {/* <span className={styles.svgAnimate}>
                <Image src={Subtract} alt="arrow" />
              </span> */}
            </button>
          </Link>
        </div>
      </div>
      {ipadAir && (
        <div className={styles.mobileText}>
          <h3 className=" font-Poppins">
            The Business Hub is a platform for start-ups and growing businesses,
            we will help you scale and provide solutions to the challenges you
            may face on this journey.
          </h3>
        </div>
      )}
    </>
  );
};

export default Banner;
