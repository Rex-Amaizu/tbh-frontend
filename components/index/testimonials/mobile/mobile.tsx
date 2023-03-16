import Image from 'next/future/image';
import { clientCarouselItems as clients } from './data';

import SizeObserver from 'utils/sizeObserver';
import SliderContainer, { SliderItem } from '../slider';

// styles sheet
import styles from '../../../../styles/Testimonials.module.css';

const MobileCarousel: React.FC = () => {
  return (
    <div className={styles.background}>
      {/* <div className={styles.wrapper}>
        {clients.map((f, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.item}>mobile</div>
          </div>
        ))}
        </div> */}
      <SizeObserver>
        <SliderContainer className="" contentWidth={821} initialOffsetX={0}>
          {clients.map((f, i) => (
            <SliderItem key={i} width={550}>
              <div className={styles.cardContainer}>
                <div className={styles.imgFrame}>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.actualImage}
                      src={f.image}
                      alt="client image"
                    />
                  </div>
                  <div className={styles.frameTextDiv}>
                    <h6 className=" font-Inter">{f.name}</h6>
                    <p className=" font-Poppins">{f.job}</p>
                  </div>
                </div>
                <div className={styles.description}>
                  <p className=" font-Poppins">{f.content}</p>
                </div>
              </div>
            </SliderItem>
          ))}
        </SliderContainer>
      </SizeObserver>
    </div>
  );
};

export default MobileCarousel;
