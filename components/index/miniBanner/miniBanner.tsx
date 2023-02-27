import Image from 'next/image';
import React from 'react';
import styles from '../../../styles/MiniBanner.module.css';
import Arrow from '../../../public/assets/images/footer/contactUsArrow.svg';

const MiniBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className="pt-[45px] pb-[31px] text-center ">
        <h2 className="font-Poppins text-xl md:text-[27px] pb-3 font-semibold text-white ">
          Want To Register Your Business?
        </h2>
        <h3 className="font-Poppins text-base md:text-[22px] font-semibold text-white ">
          Get it done in 10 minutes
        </h3>
        <button className="bg-[#005555] py-3 px-14 mt-4 ">
          <a href="https://tbh-dashboard-frontend-dev.sterlingapps.p.azurewebsites.net/signup">
            <span
              style={{ marginRight: '10px' }}
              className="text-white font-Poppins text-sm font-medium "
            >
              Start Here{' '}
            </span>
          </a>
          <Image src={Arrow} alt="arrow" width={13} height={13} />
        </button>
      </div>
    </div>
  );
};

export default MiniBanner;
