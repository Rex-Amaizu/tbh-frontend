import styles from '../../../styles/BusinessResources.module.css';
import ImageSlider from './slider';

const BusinessResources = () => {
  return (
    <div className={styles.businessResourcesContainer}>
      <div className="w-[90%]">
        <p className="text-center font-Poppins font-[500] text-[22px] leading-[100%] text-[#F8B400]">
          BUSINESS RESOURCES
        </p>

        <p className="text-center font-Poppins font-[500] text-green text-[15px] leading-[16.5px] mt-4 mb-11">
          All You Need To Know
        </p>

        <div className="w-[100%] flex justify-center">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default BusinessResources;
