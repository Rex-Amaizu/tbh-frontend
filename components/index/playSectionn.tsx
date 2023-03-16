import Image from 'next/future/image';

//hooks
import { useMedia } from 'hooks/useResponsive';

// Images
import LoanCard from '../../public/assets/images/home/loanCard.svg';
import Support247 from '../../public/assets/images/home/247Support.svg';
import PayCard from '../../public/assets/images/home/payCard.svg';
import SmallLine from '../../public/assets/images/home/smallLine.svg';

// styles
import styles from '../../styles/PlaySection.module.css';

const PlaySection = () => {
  const smallDevice = useMedia('(max-width: 540px)');

  return (
    <div className={styles.jumbotron}>
      <div className={styles.firstDiv}>
        <h2 className="uppercase items-center font-Poppins font-semibold font-[22px] leading-107 text-[#028789]">
          A bouquet of offerings for your business.
        </h2>

        <p className="mt-3 font-Poppins font-normal font-[13px] w-[260] sm:w-[460] md:w-[740px] lg:w-[880px] leading-171 items-center text-sm text-darkBlack ">
          We are here to provide solutions to many of the challenges you will
          encounter and make things very easy for you. Even if your business is
          still an idea, we will help you take it from ideation to maturity! We
          promise to have your back every step of the way
        </p>
      </div>

      <div className={styles.secondDiv}>
        <div className={styles.secondDivFirstDiv}>
          <div className={styles.box}>
            <div className={styles.mobile}>
              <Image
                className={styles.mobileIcon}
                src={LoanCard}
                alt="speed icon"
              />
              <h3>Loans</h3>
            </div>
            <Image
              className="self-center mt-[2px] sm:mt-[5px] md:mt-[14.68px]"
              src={SmallLine}
              alt="small line"
            />

            <div className={styles.mobileP}>
              <span className=" font-Poppins">
                Access automated loans of up to five million naira in less than
                five minutes for business expansion, raw materials or growth at
                very competitive interest rates.
              </span>
            </div>
          </div>

          {smallDevice && (
            <hr
              style={{
                width: '20%',
                color: '#000000',
                borderTop: '3px solid #000000',
                marginBottom: '20px',
              }}
            />
          )}

          <div className={styles.box}>
            <div className={styles.mobile}>
              <Image
                className={styles.mobileIcon}
                src={Support247}
                alt="speed icon"
              />
              <h3>Support</h3>
            </div>
            <Image
              className="self-center mt-[2px] sm:mt-[5px] md:mt-[14.68px]"
              src={SmallLine}
              alt="small line"
            />
            <div className={styles.mobileP}>
              <span className="font-Poppins">
                Get help with business registration, domain creation,
                trademarking and taxation. Also enjoy free business advisory as
                well as access to market and Investors.
              </span>
            </div>
          </div>
        </div>
        {smallDevice && (
          <hr
            style={{
              width: '20%',
              color: '#000000',
              borderTop: '3px solid #000000',
              marginBottom: '20px',
            }}
          />
        )}

        <div className={styles.box}>
          <div className={styles.mobile}>
            <Image
              className={styles.mobileIcon}
              src={PayCard}
              alt="speed icon"
            />
            <h3>Payment</h3>
          </div>
          <Image
            className="self-center mt-[2px] sm:mt-[5px] md:mt-[14.68px]"
            src={SmallLine}
            alt="small line"
          />
          <div className={styles.mobileP}>
            <span className=" font-Poppins">
              Enjoy unique digital payment solutions to help increase your
              sales, no matter how you sell. You no longer have to shout to
              collect your money.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaySection;
