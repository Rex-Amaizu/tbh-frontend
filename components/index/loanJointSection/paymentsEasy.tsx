import Image from 'next/future/image';

// images
import LinePayEasy from '../../../public/assets/images/ourSolution/linePayEasy.svg';
import SocialPay from '../../../public/assets/images/ourSolution/socialPay.svg';
import PayOpt from '../../../public/assets/images/ourSolution/payOpt.svg';
import PaySpectra from '../../../public/assets/images/ourSolution/paySpectra.svg';
// import ArrowPay from '../../../public/assets/images/ourSolution/arrowPay.svg';

const paymentsEasy = () => {
  return (
    <div
      id="payments"
      className="flex flex-col gap-[49px] w-full h-auto justify-center items-center mb-10"
    >
      <div className="flex flex-row gap-2 md:gap-5 mt-20 items-center w-full justify-center">
        <Image src={LinePayEasy} alt="linePay" className="" />
        <p className="font-Poppins font-semibold  text-xs md:text-sm lg:text-lg leading-107 text-[#657285]">
          Payments Made Easy
        </p>
        <Image src={LinePayEasy} alt="linePay" className="" />
      </div>
      <div className="flex flex-col gap-[70px] sl:flex-row items-center">
        <div className="flex flex-col md:flex-row gap-[90px]">
          <div className="flex flex-col pl-[20px] pt-[20px] pb-[20px] rounded-[20px] w-[342px] h-[201px] bg-[#ffffff] items-start">
            <Image src={SocialPay} alt="socialPay" className="" />
            <p className="mt-[10px] font-Poppins not-italic font-semibold text-[15px] leading-107 text-[#000000]">
              Social Pay
            </p>
            <h6 className="font-Popping font-normal h-[88px] mt-3 text-xs leading-[19px] w-[300px] text-start text-[#000000]">
              Social Pay allows you receive payments easily using just a simple
              link. Whether you have a physical store or you sell, you no longer
              have to shout to collect your money
            </h6>
          </div>
          <div className="flex flex-col pl-[20px] pt-[20px] pb-[20px] rounded-[20px] w-[342px] h-[201px] bg-[#ffffff] items-start">
            <Image src={PaySpectra} alt="paySpectra" className="" />
            <p className="mt-[10px] font-Poppins not-italic font-semibold text-[15px] leading-107 text-[#000000]">
              PayWithSpecta
            </p>
            <h6 className="font-Popping font-normal h-[76px] mt-3 text-xs leading-[19px] w-[300px] text-start text-[#000000]">
              Customers can purchase from you and spread their payments for up
              to 12 months while you get paid in full instantly.
            </h6>
          </div>
        </div>
        <div className="flex flex-col pl-[20px] pt-[20px] pb-[20px] rounded-[20px] w-[342px] h-[201px] bg-[#ffffff] items-start">
          <Image src={PayOpt} alt="payOpt" className="" />
          <p className="mt-[10px] font-Poppins not-italic font-semibold text-[15px] leading-107 text-[#000000]">
            Other Payment Options
          </p>
          <h6 className="font-Popping font-normal h-[76px] mt-3 text-xs leading-[19px] w-[300px] text-start text-[#000000]">
            Create multiple payment options for customers, online and offline.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default paymentsEasy;
