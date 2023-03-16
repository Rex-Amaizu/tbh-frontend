import React from 'react';
import Image from 'next/future/image';
import SliderContainer, { SliderItem } from './slider';

const ClientLogos: React.FC<{ images: string[] }> = ({
  images,
}: {
  images: string[];
}) => (
  <>
    <SliderContainer className="" contentWidth={922} initialOffsetX={0}>
      {images.map((image, index) => (
        <SliderItem key={index} width={150}>
          <Image className="object-contain h-20 w-40" src={image} alt="" />
        </SliderItem>
      ))}
    </SliderContainer>
  </>
);

export default ClientLogos;
