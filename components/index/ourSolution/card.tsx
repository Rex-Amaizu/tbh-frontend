import Image, { StaticImageData } from 'next/future/image';
import { useRouter } from 'next/router';
import { arrow4 } from 'public/assets/images/ourSolution';
import styles from '../../../styles/OurSolution.module.css';
type TProps = {
  image: StaticImageData;
  title: string;
  description: string;
  furtherAction: string;
  first?: boolean;
};
const Card = ({ furtherAction, description, image, title, first }: TProps) => {
  const router = useRouter();
  return (
    <div className={[first && styles.activeCardDiv, styles.cardDiv].join(' ')}>
      <div
        className={[
          'w-[320px] lg:w-[345px] inline-block mr-[20px] relative',
          first ? styles.activeCard : 'h-[212.1px] lg:h-[212.1px] opacity-50',
          styles.card,
        ].join(' ')}
      >
        <Image src={image} alt="hr" className="w-[100%] h-[100%] rounded" />
        <div className={styles.overlay}>
          <p className='whitespace-normal font-["Poppins"] font-[500] text-[16px] leading-[28px] text-[#000000] mt-[21px] mb-[4px]'>
            {title}
          </p>
          <div className='whitespace-normal font-["Poppins"] font-[400] text-[11.5918px] leading-[140%] h-[50px] text-ellipsis overflow-hidden text-[#000000] mb-[5px] pr-4'>
            {description}
          </div>

          <div className={styles.readMore}>
            <div
              onClick={() => {
                if (furtherAction === 'Create Now') {
                  router.push('https://openaccountonline.sterling.ng');
                }
              }}
              className="text-[#028789] font-Inter not-italic font-semibold font-[9.821px] leading-110 cursor-pointer"
            >
              {furtherAction}
            </div>
            <Image
              className="border-[1.5px] text-[#028789]"
              src={arrow4}
              alt="readmore.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
