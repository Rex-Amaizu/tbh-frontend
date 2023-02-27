import Image from 'next/future/image';

import styles from '../../../styles/Testimonials.module.css';
import Underline from '../../../public/assets/images/home/testimonialLine.svg';
import TestimonialText from './testimonialText';
import {
  carouselImg1,
  carouselImg2,
  carouselImg3,
  carouselImg4,
} from 'public/assets/images/testimonials';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      imageSrc: carouselImg1,
      businessName: 'BankyFashion',
      name: 'Bankole Mays',
      testimony:
        'The ease of opening an account completely won me over. The app is very easy to navigate and it’s obvious they have the best interests of SMEs at heart. I’m proud to call them my business hub.',
    },
    {
      imageSrc: carouselImg2,
      businessName: 'BankyFashion2',
      name: 'Bankole Mays2',
      testimony:
        'The ease of opening an account completely won me over. The app is very easy to navigate and it’s obvious they have the best interests of SMEs at heart. I’m proud to call them my business hub.',
    },
    {
      imageSrc: carouselImg3,
      businessName: 'BankyFashion3',
      name: 'Bankole Mays3',
      testimony:
        'The ease of opening an account completely won me over. The app is very easy to navigate and it’s obvious they have the best interests of SMEs at heart. I’m proud to call them my business hub.',
    },
    {
      imageSrc: carouselImg4,
      businessName: 'BankyFashion4',
      name: 'Bankole Mays4',
      testimony:
        'The ease of opening an account completely won me over. The app is very easy to navigate and it’s obvious they have the best interests of SMEs at heart. I’m proud to call them my business hub.',
    },
  ];

  //console.log(activeIndex);
  const delay = 6000;
  useEffect(() => {
    setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [activeIndex, testimonials.length]);
  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.topTextContainer}>
        <div className={styles.topText}>
          <p
            className={`${styles.topTextParagraph} font-Poppins font-semibold`}
            style={{
              fontSize: '20px',
              lineHeight: '21.4px',
              color: '#000000',
              marginBottom: '0.9rem',
            }}
          >
            You don&apos;t need to know it all. We are here to hold your hand
            and
          </p>
          <div className={`${styles.headerAbove} font-Inter font-black`}>
            ensure you get it right
          </div>
          <div className={styles.underlineImage}>
            <Image src={Underline} alt="underline" />
          </div>
        </div>
      </div>
      <div className={styles.testimonialCarousel}>
        <div className={styles.imageSection}>
          <Image
            src={testimonials[activeIndex].imageSrc}
            alt="img1"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className={styles.carouselMain}>
          <p>CUSTOMER&apos;S TESTIMONIALS</p>
          <div
            className={styles.carouselSlider}
            style={{ transform: `translate3d(${-activeIndex * 100}%, 0, 0)` }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialText
                key={index}
                businessName={testimonial.businessName}
                name={testimonial.name}
                testimony={testimonial.testimony}
              />
            ))}
          </div>

          <div className={styles.slideshowDots}>
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={[
                  styles.slideshowDot,
                  activeIndex === idx
                    ? 'bg-[#F8B400] w-[40px]'
                    : 'bg-[#FFFFFF] w-[20px]',
                ].join(' ')}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
