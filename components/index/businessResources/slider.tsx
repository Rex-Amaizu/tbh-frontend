import {
  image1,
  image2,
  next,
  prev,
} from 'public/assets/images/businessResources';
import founderHub from '../../../public/assets/images/businessResources/founderHub.png';
import Canva from '../../../public/assets/images/businessResources/canva.png';
import Card from './card';
import styles from '../../../styles/BusinessResources.module.css';
import Image from 'next/future/image';

const ImageSlider = () => {
  const slides = [
    {
      title:
        'How training my brain to focus helped me to build two profitable businesses',
      image: founderHub,
      url: 'https://foundershub.startups.microsoft.com/signup',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus hendrerit commodo. Duis eu ipsum aliquet ien ac augue feugiat molestie.',
    },
    {
      title:
        'How training my brain to focus helped me to build two profitable businesses',
      url: 'https://www.canva.com/logos/',
      image: Canva,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus hendrerit commodo. Duis eu ipsum aliquet ien ac augue feugiat molestie.',
    },
    {
      title:
        'How training my brain to focus helped me to build two profitable businesses',
      url: 'https://foundershub.startups.microsoft.com/signup',
      image: image1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus hendrerit commodo. Duis eu ipsum aliquet ien ac augue feugiat molestie.',
    },
    {
      title:
        'How training my brain to focus helped me to build two profitable businesses',
      url: 'https://foundershub.startups.microsoft.com/signup',
      image: image2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus hendrerit commodo. Duis eu ipsum aliquet ien ac augue feugiat molestie.',
    },
    {
      title:
        'How training my brain to focus helped me to build two profitable businesses',
      url: 'https://foundershub.startups.microsoft.com/signup',
      image: image2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus hendrerit commodo. Duis eu ipsum aliquet ien ac augue feugiat molestie.',
    },
  ];

  const goToPrevious = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 320;
    }
  };
  const goToNext = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 320;
    }
  };
  return (
    <div className={styles.sliderContainer}>
      <div>
        <div
          onClick={goToPrevious}
          style={{
            fontSize: '45px',
            color: 'black',
            cursor: 'pointer',
          }}
        >
          <Image src={prev} alt="prev" style={{ minWidth: '25px' }} />
        </div>
      </div>
      <div className={styles.slider} id="slider">
        {slides.map((slide, slideIndex) => (
          <Card
            description={slide.description}
            image={slide.image}
            title={slide.title}
            key={slideIndex}
            url={slide.url}
          />
        ))}
      </div>
      <div
        onClick={goToNext}
        style={{
          fontSize: '45px',
          color: 'black',
          cursor: 'pointer',
        }}
      >
        <Image src={next} alt="next" style={{ minWidth: '25px' }} />
      </div>
    </div>
  );
};

export default ImageSlider;
