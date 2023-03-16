import { useState } from 'react';
import Slider from './slider';
import styles from '../../../styles/OurSolution.module.css';
// import Image from 'next/image';
//import { solutionLine } from 'public/assets/images/ourSolution';

const OurSolution = () => {
  const [active, setActive] = useState(0);
  const tabs = [
    'Business Registration',
    'Online store setup',
    'Business Account',
    'Co-working space',
    'Legal Services',
    'Equipment & factory rentals',
    // 'See all services',
  ];
  return (
    <div id="services" className={`${styles.solCont} my-[100px]`}>
      <div className="text-center uppercase font-[500] text-[22px] leading-[22px] text-[#000000] my-3 font-[Poppins]">
        OUR SERVICES
      </div>
      <div className="text-center font-[400] text-[22px] leading-[107%] text-[#028789] font-[Poppins] px-[5px]">
        Everything your Business needs
      </div>
      <div className={styles.tabsContainer}>
        <div
          className={[styles.slider, 'flex flex-row gap-[5px] my-[50px]'].join(
            ' '
          )}
        >
          {tabs.map((tab, index) => (
            <div key={index}>
              <div
                className={[
                  'font-[400] text-[18px] leading-[100%] tracking-[-0.02em] text-[#000000] font-[Poppins] px-4 py-2 cursor-pointer',
                  active === index && styles.activeTab,
                ].join(' ')}
                onClick={() => setActive(index)}
              >
                {tab}
              </div>
              {/* <div className="flex justify-center mt-3">
                {active === index && (
                  <Image src={solutionLine} alt="line.png" />
                )}
                </div> */}
            </div>
          ))}
        </div>
      </div>
      <Slider active={active} />
    </div>
  );
};

export default OurSolution;
