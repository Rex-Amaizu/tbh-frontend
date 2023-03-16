import React from 'react';
import Image from 'next/future/image';
import OnlineCustomerImg from '../../public/assets/images/subscription/onlineCustomer.svg';
import StoreHouseImg from '../../public/assets/images/subscription/storeHouse.svg';
import GreenArrImg from '../../public/assets/images/subscription/greenArrow.svg';

const onlineStoreSection = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-[white] mt-[113px]">
      <div className="flex flex-row justify-between w-10/12">
        <Image className="" src={OnlineCustomerImg} alt="online customer" />
        <div className="flex flex-col w-[593px] mt-[45px]">
          <div className="flex flex-row gap-2 items-center">
            <Image className="" src={StoreHouseImg} alt="online house" />
            <p className="font-Poppins font-normal leading-100 text-base tracking-tight text-[#212121]">
              Online Store
            </p>
          </div>
          <label className="font-Poppins font-semibold leading-119 text-3xl text-[#1E1E1E] mt-[15px]">
            A <span className="text-[#028789]">personalized online store</span>{' '}
            that
            <br /> suits your business business
          </label>
          {/* first col */}
          <div className="flex flex-row gap-[60px] w-full h-[100px] mt-[39px]">
            <div className="flex flex-col w-[282px]">
              <div className="flex flex-row gap-2">
                <Image className="" src={GreenArrImg} alt="green arrow" />
                <label className="font-Poppins font-medium text-base leading-107 text-[#212121]">
                  Easy store setup
                </label>
              </div>
              <p className="w-[282px] font-Poppins font-normal text-xsx leading-5 text-[#000000] mt-[13px]">
                Curabitur sed fermentum mi. Cras
                <br /> sit amet justo erat. Curabitur ut
                <br /> massa enim.
              </p>
            </div>
            <div className="flex flex-col w-[282px]">
              <div className="flex flex-row gap-2">
                <Image className="" src={GreenArrImg} alt="green arrow" />
                <label className="font-Poppins font-medium text-base leading-107 text-[#212121]">
                  Easy Checkout Process
                </label>
              </div>
              <p className="w-[271px] font-Poppins font-normal text-xsx leading-5 text-[#000000] mt-[13px]">
                Curabitur sed fermentum mi. Cras
                <br /> sit amet justo erat. Curabitur ut
                <br /> massa enim.
              </p>
            </div>
          </div>
          {/* second col */}
          <div className="flex flex-row gap-[60px] w-full h-[100px] mt-[41px]">
            <div className="flex flex-col w-[282px]">
              <div className="flex flex-row gap-2">
                <Image className="" src={GreenArrImg} alt="green arrow" />
                <label className="font-Poppins font-medium text-base leading-107 text-[#212121]">
                  Multiple Payment
                  <br /> Options
                </label>
              </div>
              <p className="w-[282px] font-Poppins font-normal text-xsx leading-5 text-[#000000] mt-[13px]">
                Curabitur sed fermentum mi. Cras
                <br /> sit amet justo erat. Curabitur ut
                <br /> massa enim.
              </p>
              <div className="flex flex-r4 items-center mt-[50px]">
                <div className="flex flex-row items-center justify-center p-[8px] w-[221px] h-[34px] bg-[#028789] rounded-sm cursor-pointer">
                  <p className="font-Poppins font-bold text-xs leading-110 text-[#ffffff]">
                    Setup Store Now
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[282px]">
              <div className="flex flex-row gap-2">
                <Image className="" src={GreenArrImg} alt="green arrow" />
                <label className="font-Poppins font-medium text-base leading-107 text-[#212121]">
                  Good Customer Support
                </label>
              </div>
              <p className="w-[271px] font-Poppins font-normal text-xsx leading-5 text-[#000000] mt-[13px]">
                Curabitur sed fermentum mi. Cras
                <br /> sit amet justo erat. Curabitur ut
                <br /> massa enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default onlineStoreSection;
