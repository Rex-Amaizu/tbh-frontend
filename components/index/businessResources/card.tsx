import Image from 'next/future/image';
import { BsArrowRight } from 'react-icons/bs';
//import { arrow } from 'public/assets/images/businessResources';

type TProps = {
  image: string;
  title: string;
  description: string;
  url: string;
};
const Card = ({ description, image, title, url }: TProps) => {
  return (
    <div className="w-[300px] lg:w-[350px] inline-block mr-[20px] md:mr-[50px]">
      <Image
        style={{
          width: '325px',
          height: '200px',
        }}
        src={image}
        alt="hr"
      />
      <p className='whitespace-normal font-["Poppins"] font-[600] font-[14px] leading-[22px] text-[#005555] my-4'>
        {title}
      </p>
      <div className='whitespace-normal font-["Poppins"] font-[400] font-[12px] leading-[18px] h-[84px] text-ellipsis overflow-hidden text-[#000000] mb-[15px]'>
        {description}
      </div>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="flex gap-3 cursor-pointer items-center font-Poppins font-[500] text-[13px] leading-[19.5px] text-[#000000] mr-2">
          Read more
          <BsArrowRight
            style={{
              color: '#000000',
              width: '27px',
              height: '30px',
            }}
          />
        </div>
      </a>
    </div>
  );
};

export default Card;
