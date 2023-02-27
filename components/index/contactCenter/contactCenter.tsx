import Image from 'next/future/image';
import { Modal } from 'antd';
// import WhiteSpace from './whiteSpace';

// images
import ContactImage from '../../../public/assets/images/footer/contactImage.jpg';
import Arrow from '../../../public/assets/images/footer/contactUsArrow.svg';
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
        <div className={styles.leftSide}>
          <div
            style={{
              width: '100%',
              height: 'auto',
            }}
            className="flex items-center justify-center"
          >
            <Image
              src={ContactImage}
              alt="image"
              className="w-full object-contain h-max "
            />
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textDiv}>
            <p className=" font-Poppins font-normal">Let&apos;s help</p>
            <span className=" font-Poppins font-bold">grow your business.</span>
          </div>
          <div className={styles.talkToUs}>
            <span className=" font-Poppins font-semibold">Talk to us</span>
            <p className=" font-Poppins font-normal">
              Fill the contact page and we will be in touch!
            </p>
            <div className={styles.btnTalkToUs}>
              <button onClick={info}>
                <span style={{ marginRight: '10px' }}>contact us</span>
                <Image src={Arrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <WhiteSpace /> */}
    </>
  );
};

export default ContactCenter;
