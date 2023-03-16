import Image from 'next/future/image';
//import { useMedia } from '../../../hooks/useResponsive';

// images
import SterlingBankLogo from '../../../public/assets/images/home/sterlingLogo.svg';
import SmeLogo from '../../../public/assets/images/home/smeLogo.svg';
import MicrosoftLogo from '../../../public/assets/images/home/MicrosoftLogo.svg';
// import NafdacLogo from '../../../public/assets/images/home/nafdac.svg';
// import SonLogo from '../../../public/assets/images/home/son.svg';
// import FIRSlogo from '../../../public/assets/images/home/firs.svg';

// styles sheet
import styles from '../../../styles/LogoSection.module.css';

const images = [
  SterlingBankLogo, //NafdacLogo, SonLogo, FIRSlogo
  SmeLogo,
  MicrosoftLogo,
];

const LogoSection = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.headingContainer}>
        <h2>YOUR BUSINESS IS IN SAFE HANDS</h2>
      </div>
      <div className={styles.subText}>
        <p className="">Our Partners</p>
      </div>
      <div className={styles.imageContainer}>
        {images.map((f, i) => (
          <div key={i} className="">
            <Image className="" src={f} alt="supporters' logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
