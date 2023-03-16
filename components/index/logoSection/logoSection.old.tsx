import Image from 'next/future/image';
import { useMedia } from '../../../hooks/useResponsive';
import SterlingBankLogo from '../../../public/assets/images/home/sterlingLogo.svg';
import NafdacLogo from '../../../public/assets/images/home/nafdac.svg';
import SonLogo from '../../../public/assets/images/home/son.svg';
import FIRSlogo from '../../../public/assets/images/home/firs.svg';
import styles from '../../../styles/LogoSection.module.css';
// import SizeObserver from 'utils/sizeObserver';
// import ClientLogos from './clientLogos';

// const images = [
//   SterlingBankLogo,
//   NafdacLogo,
//   SonLogo,
//   FIRSlogo,
//   SterlingBankLogo,
//   NafdacLogo,
//   SonLogo,
//   FIRSlogo,
// ];

const LogoSection = () => {
  const desktop = useMedia('(min-width: 1024px)');
  return (
    <>
      {desktop ? (
        <div className={styles.logoContainer}>
          <div
            className={styles.leftSide}
            style={{
              width: '25%',
              height: '68px',
              textAlign: 'left',
              marginBottom: '0.7rem',
            }}
          >
            <h1 className=" font-Poppins font-semibold">
              Your Business is Secured with us
            </h1>
          </div>
          <div
            className={styles.rightSide}
            style={{
              width: '72%',
              borderLeft: '2px solid #000000',
              height: '250px',
              display: 'flex',
              flexDirection: 'row',
              padding: '1.5rem 2rem 0',
              marginLeft: '3%',
            }}
          >
            <div
              style={{ width: '35%', display: 'flex', flexDirection: 'column' }}
            >
              <p className={styles.poweredBy}>powered by</p>
              <div className="mr-4 mt-4 mb-2">
                <Image src={SterlingBankLogo} alt="sterling bank logo" />
              </div>
            </div>
            <div
              style={{ width: '65%', display: 'flex', flexDirection: 'column' }}
            >
              <p className={styles.regulatory}>Regulatory Partners</p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div className="mt-3">
                  <Image src={NafdacLogo} alt="nafdac logo" />
                </div>
                <div>
                  <Image src={SonLogo} alt="son logo" />
                </div>
                <div>
                  <Image src={FIRSlogo} alt="firs logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.logoMobileContainer}>
          <div className={styles.logoHeader}>
            <p>Your Business is Secured with us</p>
          </div>
          <hr className={styles.hr} />
          {/* <div
            style={{
              marginTop: '1.7rem',
              display: 'flex',
              alignSelf: 'flex-start',
            }}
          >
            <SizeObserver>
              <div className="grid place-items-center">
                <ClientLogos images={images} />
              </div>
            </SizeObserver>
          </div> */}
          <div className={styles.firstContainer}>
            <div className={styles.poweredby}>
              <p className=" font-Inter">powered by</p>
              <div className={styles.imgCont}>
                <Image src={SterlingBankLogo} alt="sterling logo" />
              </div>
            </div>
          </div>
          <div className={styles.secondContainer}>
            <p className=" font-Inter">Regulatory Partners</p>
            <div className={styles.secondContainerSub}>
              <Image src={NafdacLogo} alt="nafdac logo" />
              <Image src={FIRSlogo} alt="nafdac logo" />
              <Image src={SonLogo} alt="nafdac logo" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoSection;
