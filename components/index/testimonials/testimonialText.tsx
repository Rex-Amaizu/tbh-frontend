/* eslint-disable react/no-unescaped-entities */
import Image from 'next/future/image';
import { testimonialLine } from 'public/assets/images/testimonials';
import styles from '../../../styles/Testimonials.module.css';

type TProps = {
  testimony: string;
  name: string;
  businessName: string;
};

const TestimonialText = ({ name, testimony, businessName }: TProps) => {
  return (
    <div
      style={{
        height: '100%',
        padding: '50px',
        marginTop: '10px',
        whiteSpace: 'normal',
        display: 'inline-block',
      }}
    >
      <div className={styles.testimonyContainer}>
        <div className='flex flex-row justify-center font-[500] text-[27px] font-["Poppins"] text-[#FFFFFF] leading-[135%] text-center'>
          <p className="my-[10px] w-[80%]">{testimony}</p>
        </div>
        <div className="flex flex-row justify-center">
          <Image src={testimonialLine} alt="hr" />
        </div>
        <div className='flex flex-row justify-center mt-3 font-["Poppins"] font-[700] text-[20px] leading-[128%] text-[#F8B400]'>
          <p>{name}</p>
        </div>
        <div className='flex flex-row justify-center mt-1 font-["Poppins"] font-[300] text-[16px] leading-[128%] text-[#FFFFFF]'>
          <p>{businessName}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialText;
