import Image from 'next/future/image';
import { Modal } from 'antd';
// import WhiteSpace from './whiteSpace';

// images
import ContactImage from '../../../public/assets/images/footer/contactImage.svg';
// import Arrow from '../../../public/assets/images/footer/contactUsArrow.svg';
//import Line from '../../../public/assets/images/footer/greenLine.svg';

// styles sheet
import styles from '../../../styles/ContactCenter.module.css';

const info = () => {
  Modal.info({
    title: 'Hi, welcome to the business hub',
    content: (
      <div>
        <p className=" font-Poppins text-white">Dear Esteemed Customer,</p>
        <p className=" font-Poppins text-white">
          To connect with us, kindly send an email to{' '}
          <a href="mailto:hello@thebusinesshub.ng">
            <span className={styles.email}>hello@thebusinesshub.ng</span>
          </a>{' '}
          and one of our agents will get back to you. Thanks.
        </p>
      </div>
    ),
    onOk() {},
  });
};

const ContactCenter = () => {
  return (
    <>
      {/* <WhiteSpace /> */}
      <div className={styles.contactContainer}>
        <div className="flex flex-col gap-[20px] lg:gap[0px] lg:flex-row justify-between items-center w-[85%]">
          <Image src={ContactImage} alt="image" className={styles.imageDiv} />

          <div className="flex flex-col items-center lg:items-start">
            <label className="font-Poppins w-[280px] ms:w-[521px] font-bold text-[43px] leading-[120%] text-[#028789]">
              Let’s Help Grow Your Business
            </label>

            <p className="mt-[18px] w-[270px] ms:w-[439px] font-Poppins font-medium text-[20px] leading-[139%] text-[#212121]">
              Talk to us by filling the contact page and we will be in touch!
            </p>

            <div
              onClick={info}
              className="mt-[72px] flex flex-row items-center justify-center rounded-sm w-[166px] h-[38px] bg-[#028789] cursor-pointer"
            >
              <p className="font-Poppins font-bold text-[12px] leading-110 text-[#ffffff]">
                Contact us
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCenter;
