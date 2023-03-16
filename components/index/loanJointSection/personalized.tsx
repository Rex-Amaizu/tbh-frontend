import Image from 'next/future/image';
import Link from 'next/link';
import YoungLady from '../../../public/assets/images/home/personalizedPayment.png';

// images
import Subtract from '../../../public/assets/images/home/Subtract.svg';

// styles sheet
import styles from '../../../styles/jointLoanPayment.module.css';

const Personalized = () => {
  return (
    <div className={styles.personalizedContainer}>
      <div className={styles.personalizedImageDiv}>
        <Image className={styles.ladyImage} src={YoungLady} alt="Lady" />
      </div>
      <div className={styles.personalizedTextDiv}>
        <h1 className={`${styles.textDivhOne} font-Poppins font-semibold`}>
          Personalized Payment <br /> Solution
        </h1>
        <p className={`${styles.textDivParagraph} font-Poppins font-normal`}>
          Enjoy digital payment solutions whether <br />
          you sell online or offline
        </p>
        <div
          // style={{ paddingTop: `${ipadAir && '7rem'}` }}
          className={styles.bannerBtn}
        >
          <Link href="https://tbh-dashboard-frontend-dev.sterlingapps.p.azurewebsites.net/signup">
            <button
              style={{
                display: 'inline-flex',
              }}
            >
              <span className={`${styles.btnText} mr-3`}>apply now</span>

              <span className={styles.svgAnimate}>
                <Image src={Subtract} alt="arrow" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Personalized;
