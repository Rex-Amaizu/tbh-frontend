import React from 'react';
import Image from 'next/future/image';
import WorkSpaceClientImg from '../../public/assets/images/subscription/workSpaceClients.svg';
import WorkSpaceBalImg from '../../public/assets/images/subscription/workSpaceBal.svg';
// import DropDownIcon from '../../public/assets/images/subscription/dropDownIcon.svg';
import DropDownSelect from '@/components/global/dropDownSelect';

const spaceType = [
  { label: 'Office Space', value: 'office' },
  { label: 'Store Space', value: 'store' },
];

const town = [
  { label: 'Nyanya', value: 'ny' },
  { label: 'Ogba', value: 'og' },
];

const states = [
  { label: 'Abuja', value: 'abj' },
  { label: 'Lagos', value: 'lag' },
];

const price = [
  { label: '₦500,000', value: '500k' },
  { label: '₦250,000', value: '250k' },
];

const workingSpace = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-[white] mt-[113px]">
      <div className="flex flex-row justify-between w-10/12">
        <div className="flex flex-col w-[670px]">
          <div className="flex flex-row gap-2 items-center">
            <Image className="" src={WorkSpaceBalImg} alt="work space bal" />
            <p className="font-Poppins font-normal leading-100 text-base tracking-tight text-[#212121]">
              Co-Working Space
            </p>
          </div>
          <label className="font-Poppins font-semibold leading-119 text-2xl text-[#1E1E1E] mt-[15px]">
            Work in a serene environment and network
            <br /> with other community members.
          </label>
          <div className="flex flex-col w-[650px] mt-9">
            <p className="font-Poppins font-normal text-base leading-131 text-[#000000]">
              Select an option
            </p>
            <div className="flex flex-row gap-6 mt-[25px]">
              <div className="flex flex-row items-center justify-center w-[234px] h-[56px] bg-[#FFDF89] border-0.5 border-[#F8B400] shadow-spaceShadow rounded-mdx">
                <p className="font-Poppins font-normal text-base leading-115%">
                  I need a space to rent
                </p>
              </div>
              <div className="flex flex-row items-center justify-center w-[234px] h-[56px] bg-[#ffffff] border-0.5 border-[#E1E8F3] shadow-spaceShadow rounded-mdx">
                <p className="font-Poppins font-normal text-base leading-115%">
                  I need a space to rent
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 mt-[32px]">
              <div className="shadow-spaceShadow">
                <DropDownSelect
                  inputLabel=""
                  selectText="Space Type"
                  optionsSelect={spaceType}
                  selected={true}
                  textColor="text-[#768396]"
                  textSize="text-sm"
                  lineHeight="leading-107"
                  fontStyle="font-normal"
                  fontFamily="font-Poppins"
                  inputWidth="w-[234px]"
                  selectHeight="h-[56px]"
                  borderRadius="rounded-mdx"
                  borderColor="border-[#F8B400]"
                  bgColor="bg-[#ffffff]"
                  inputDivWidth="w-[234px]"
                  iconImageMargin="ml-52"
                  // iconImage={DropDownIcon}
                />
              </div>
              <div className="shadow-spaceShadow">
                <DropDownSelect
                  inputLabel=""
                  selectText="Preferred State"
                  optionsSelect={states}
                  selected={true}
                  textColor="text-[#768396]"
                  textSize="text-sm"
                  lineHeight="leading-107"
                  fontStyle="font-normal"
                  fontFamily="font-Poppins"
                  inputWidth="w-[234px]"
                  selectHeight="h-[56px]"
                  borderRadius="rounded-mdx"
                  borderColor="border-[#dddddd]"
                  bgColor="bg-[#ffffff]"
                  inputDivWidth="w-[234px]"
                  iconImageMargin="ml-52"
                  // iconImage={DropDownIcon}
                />
              </div>
            </div>
            <div className="flex flex-row gap-6 mt-[32px]">
              <div className="shadow-spaceShadow">
                <DropDownSelect
                  inputLabel=""
                  selectText="Town/LGA"
                  optionsSelect={town}
                  selected={true}
                  textColor="text-[#768396]"
                  textSize="text-sm"
                  lineHeight="leading-107"
                  fontStyle="font-normal"
                  fontFamily="font-Poppins"
                  inputWidth="w-[234px]"
                  selectHeight="h-[56px]"
                  borderRadius="rounded-mdx"
                  borderColor="border-[#dddddd]"
                  bgColor="bg-[#ffffff]"
                  inputDivWidth="w-[234px]"
                  iconImageMargin="ml-52"
                  // iconImage={DropDownIcon}
                />
              </div>
              <div className="shadow-spaceShadow">
                <DropDownSelect
                  inputLabel=""
                  selectText="Price Range"
                  optionsSelect={price}
                  selected={true}
                  textColor="text-[#768396]"
                  textSize="text-sm"
                  lineHeight="leading-107"
                  fontStyle="font-normal"
                  fontFamily="font-Poppins"
                  inputWidth="w-[234px]"
                  selectHeight="h-[56px]"
                  borderRadius="rounded-mdx"
                  borderColor="border-[#dddddd]"
                  bgColor="bg-[#ffffff]"
                  inputDivWidth="w-[234px]"
                  iconImageMargin="ml-52"
                  // iconImage={DropDownIcon}
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center p-[8px] mt-[25px] w-[221px] h-[34px] bg-[#028789] rounded-sm cursor-pointer">
              <p className="font-Poppins font-bold text-xs leading-110 text-[#ffffff]">
                Search Now
              </p>
            </div>
          </div>
        </div>
        <Image className="" src={WorkSpaceClientImg} alt="work space client" />
      </div>
    </div>
  );
};

export default workingSpace;
