import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Image, { StaticImageData } from 'next/future/image';

// hooks
import { useMedia } from 'hooks/useResponsive';

// images
import TailorGirl from '../../../public/assets/images/testimonials/tailorGirl.png';
import Underline from '../../../public/assets/images/testimonials/carouselUnderline.svg';
import TailorGirlLarge from '../../../public/assets/images/testimonials/pics.png';

// stylesn sheet
import styles from '../../../styles/Testimonials.module.css';

function Item({
  item,
}: {
  item: {
    image: StaticImageData;
    description: string;
    summary: string;
    underline: StaticImageData;
    whoAreYou: string;
    job: string;
  };
}) {
  return (
    <div className={styles.carouselItemContainer}>
      <div
        style={{
          width: '100%',
          height: 'auto',
          // backgroundColor: 'tomato', use to debugg
        }}
      >
        <Image
          src={item.image}
          alt="customer's image"
          style={{ width: '640px', backgroundRepeat: 'no-repeat' }}
        />
      </div>
      <div className={styles.textCorner}>
        <h3 className=" font-Inter mb-5">{item.summary}</h3>
        <p className=" font-Poppins mb-5">{item.description}</p>
        <Image src={item.underline} alt="underline" />
        <div className="flex flex-col ">
          <span className=" font-Poppins mt-5">{item.whoAreYou}</span>
          <h6>{item.job}</h6>
        </div>
      </div>
    </div>
  );
}

export default function Carousell() {
  const largeDesktop = useMedia('(min-width: 1380px)');

  var items = [
    {
      name: 'Ore #1',
      underline: Underline,
      description:
        'My business started out very small, but when i applied and got the loan from The Business Hub, it helped my business grow tremendously. From producing blocks out of 50 bags of cement weekly, I now produce blocks with a trailer of cements weekly.',
      image: largeDesktop ? TailorGirlLarge : TailorGirl,
      summary: '“Extraordinary Services”',
      whoAreYou: 'Mrs. Adebimpe Agboola',
      job: 'MD, Divine Integrated Blocks Service.',
    },
    // {
    //   underline: Underline,
    //   description:
    //     'My business started out very small, but when i applied and got the loan from The Business Hub, it helped my business grow tremendously. From producing blocks out of 50 bags of cement weekly, I now produce blocks with a trailer of cements weekly.',
    //   image: largeDesktop ? TailorGirlLarge : TailorGirl,
    //   summary: '“Extraordinary Services”',
    //   whoAreYou:
    //     '— Mrs. Adebimpe Agboola, MD, Divine Integrated Blocks Service.',
    // },
    // {
    //   name: 'Random Name #3',
    //   underline: Underline,
    //   description:
    //     'My business started out very small, but when i applied and got the loan from The Business Hub, it helped my business grow tremendously. From producing blocks out of 50 bags of cement weekly, I now produce blocks with a trailer of cements weekly.',
    //   image: largeDesktop ? TailorGirlLarge : girlInRed,
    //   summary: '“Extraordinary Services”',
    //   whoAreYou:
    //     '— Mrs. Adebimpe Agboola, MD, Divine Integrated Blocks Service.',
    // },
    // {
    //   name: 'Random Name #4',
    //   underline: Underline,
    //   description:
    //     'My business started out very small, but when i applied and got the loan from The Business Hub, it helped my business grow tremendously. From producing blocks out of 50 bags of cement weekly, I now produce blocks with a trailer of cements weekly.',
    //   image: largeDesktop ? TailorGirlLarge : computerBoy,
    //   summary: '“Extraordinary Services”',
    //   whoAreYou:
    //     '— Mrs. Adebimpe Agboola, MD, Divine Integrated Blocks Service.',
    // },
  ];

  const [index, setIndex] = React.useState(0);

  // eslint-disable-next-line no-unused-vars
  const handleChange: any = (cur: number, prev: number) => {
    setIndex(cur);
    // console.log(cur, prev);
  };

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        index={index}
        onChange={handleChange}
        interval={4000}
        animation="slide"
        indicators={false}
        stopAutoPlayOnHover
        swipe
        className={styles.carousel}
      >
        {items.map((item: any, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      {/* <div className={styles.btn}>
        {items.map((item, i) => (
          <button key={i} onClick={() => setIndex(i)}>
            <Image
              style={{
                borderRadius: '50px',
                marginRight: '10px',
                background: i === index ? '#005555' : '',
              }}
              src={Circle}
              alt="circle"
            />
          </button>
        ))}
      </div> */}
    </div>
  );
}
