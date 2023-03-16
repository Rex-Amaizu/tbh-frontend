import {
  // img12,
  img13,
  imgEquip,
  img15,
  img16,
  img17,
  img40,
} from 'public/assets/images/ourSolution';
import React from 'react';
import styles from '../../../styles/OurSolution.module.css';
import Card from './card';

type TProps = {
  active: number;
};

// const arrowImage = <Image src=ArrowBlack alt="speed icon" />;
const Slider = ({ active }: TProps) => {
  const slides = [
    {
      title: 'Business Registration',
      image: img17,
      description: 'Register your business in ten (10) minutes',
      furtherAction: 'Learn More',
    },
    {
      title: 'Online Store',
      image: img40,
      description:
        'Set up a retail store, reach more customers and collect payments seamlessly',
      furtherAction: 'Learn More',
    },
    {
      title: 'Business Account',
      image: img15,
      description:
        'Open an account for your business and enjoy free banking for three years',
      furtherAction: 'Create Now',
    },
    {
      title: 'Co-working space',
      image: img13,
      description:
        'Work in a serene environment and network with other community members.',
      furtherAction: 'Book a space',
    },

    {
      title: 'Legal Service',
      image: img16,
      description:
        'Enjoy value added legal services to help you on this journey',
      furtherAction: 'Contact Us',
    },

    {
      title: 'Equipment & factory rentals',
      image: imgEquip,
      description:
        'On The Business Hub, you can rent equipments at affordable prices, for all your business needs.',
      furtherAction: 'Learn More',
    },
  ];

  const slides_ = slides.filter((_, index) => index !== active);
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <Card
          description={slides[active].description}
          image={slides[active].image}
          title={slides[active].title}
          furtherAction={slides[active].furtherAction}
          first
        />
        {slides_.map((slide, slideIndex) => (
          <Card
            description={slide.description}
            image={slide.image}
            title={slide.title}
            furtherAction={slide.furtherAction}
            key={slideIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
