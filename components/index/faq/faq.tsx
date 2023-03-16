//import Image from 'next/future/image';

// components

import Accord from './accord';
//import Accordion from './accordion';
//import { data } from './data';

// images
//import ButtonArrow from '../../../public/assets/images/home/FAQarrow.svg';

// styles
import styles from '../../../styles/Faq.module.css';
const Faq = () => {
  return (
    <div className={styles.faqContainer}>
      {/* --------------------------- HEADER -------------------------------*/}
      <div className={styles.accordionHeader}>
        <h1 className="font-Poppins font-bold">
          We answered questions so you don&apos;t <br /> have to ask them.
        </h1>
      </div>

      <div className={styles.faqBox}>
        <div className={styles.accordionContainer}>
          {/* --------------------------- ACCORDION -------------------------------*/}

          {/*<div className={styles.accordion}>
              {data.map((item) => (
                <Accordion
                  key={item.id}
                  title={item.title}
                  description={item.description}
                />
              ))}
              </div> */}
          <Accord />
          {/* --------------------------- FOOTER -------------------------------
          <div className={`${styles.faqFooter} mt-8`}>
            <h1 className=" font-Poppins font-semibold">
              Want to register your business?
            </h1>
            <h3 className=" font-Poppins font-semibold">
              Get it done in 10 minutes
            </h3>
            <div className={styles.buttonBtn}>
              <button>
                <div
                  style={{ display: 'flex' }}
                  className=" font-Inter font-medium"
                >
                  <p
                    style={{
                      alignSelf: 'center',
                    }}
                  >
                    Start here
                  </p>
                </div>

                <Image
                  style={{
                    width: '19.8px',
                    height: '19.8px',
                  }}
                  src={ButtonArrow}
                  alt="arrow"
                />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
