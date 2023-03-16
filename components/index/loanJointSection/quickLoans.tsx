import Image from 'next/future/image';
import Link from 'next/link';

// images
// import Subtract from '../../../public/assets/images/home/Subtract.svg';
import QuickLoanLeft from '../../../public/assets/images/home/quickLoanLeft.svg';
import QuickLoanRight1 from '../../../public/assets/images/home/quickLoanRight1.svg';
import SecondRowCam from '../../../public/assets/images/home/secondRowCam.svg';
import WalletLoan from '../../../public/assets/images/home/walletLoan.svg';

// styles sheet
import styles from '../../../styles/jointLoanPayment.module.css';

const QuickLoans = () => {
  return (
    <div id="loans" className={styles.quickLoansSubContainer}>
      <div className="flex flex-col w-full items-center">
        <div className={styles.textDiv}>
          <Image className="mt-[50px]" src={QuickLoanLeft} alt="QuickLeft" />
          <div className={styles.secondRow}>
            <Image className="mt-[10px]" src={SecondRowCam} alt="QuickLeft" />
            <h1 className={`${styles.textDivhOne} font-Poppins font-semibold`}>
              Enjoy Quick Loans on the go
            </h1>
            <p
              className={`${styles.textDivParagraph} font-Poppins font-normal`}
            >
              Get up to five million naira within minutes to expand your
              business
            </p>
            <div className={styles.bannerBtn}>
              <button
                style={{
                  display: 'inline-flex',
                }}
              >
                <a href="https://tbh-dashboard-frontend-dev.sterlingapps.p.azurewebsites.net/signup">
                  <span className={`${styles.btnText} mr-3`}>apply now</span>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.textDiv2} mt-[74px]`}>
          <div className={styles.secondRow}>
            <Image className="mt-[10px]" src={WalletLoan} alt="wallet loan" />
            <h1 className={`${styles.textDivhOne2} font-Poppins font-semibold`}>
              Personalized Payment Solutions
            </h1>
            <p
              className={`${styles.textDivParagraph} pt-3 font-Poppins font-normal`}
            >
              Enjoy digital payment solutions whether you sell online or
              offline.
            </p>
            <div className={styles.bannerBtn}>
              <button
                style={{
                  display: 'inline-flex',
                }}
                className="mt-[10px]"
              >
                <Link href="mailto:hello@thebusinesshub.ng">
                  <span className={`${styles.btnText} mr-3`}>get started</span>
                </Link>
              </button>
            </div>
          </div>
          <Image className="mt-[50px]" src={QuickLoanRight1} alt="QuickLeft" />
        </div>
      </div>
    </div>
  );
};

export default QuickLoans;
