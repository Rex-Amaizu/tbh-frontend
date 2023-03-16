const Fade = require('react-reveal/Fade');

// components
import QuickLoans from './quickLoans';
import PaymentsEasy from './paymentsEasy';

// styles sheets
import styles from '../../../styles/jointLoanPayment.module.css';

const Index = () => {
  return (
    <div id="solutions" className={styles.mainContainer}>
      <div className={styles.textIntroDiv}>
        <p className={`${styles.textIntroDivP} font-Poppins mt-3`}>
          OUR SOLUTIONS
        </p>
        <Fade bottom cascade>
          <p className={`${styles.pMobile} font-Poppins font-normal`}>
            Designed to make things easier for you
          </p>
        </Fade>
      </div>

      <div className={styles.subContainer}>
        <QuickLoans />
        <PaymentsEasy />
      </div>
    </div>
  );
};

export default Index;
