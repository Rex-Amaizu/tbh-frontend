import React from 'react';
import Image from 'next/future/image';
import DropDownIcon from '../../public/assets/images/subscription/dropDownIcon.svg';

interface Props {
  inputLabel?: string;
  selectText: string;
  selected: boolean | undefined;
  optionsSelect: { label: string; value: string }[];
  inputWidth: string;
  selectHeight: string;
  borderColor?: string;
  borderRadius: string;
  bgColor?: string;
  textColor?: string;
  textSize?: string;
  lineHeight?: string;
  fontStyle?: string;
  fontFamily?: string;
  inputDivWidth?: string;
  iconImageMargin?: string;
  // iconImage?: { (): string | undefined };
}

const dropDownSelect = (props: Props) => {
  return (
    <div>
      <label className="font-normal text-lg text-[#666666] w-52 h-5">
        {props.inputLabel}
      </label>
      <div
        className={`flex flex-row relative box-border items-center ${props.inputDivWidth} h-12 bg-[#F0EFEF] border-0`}
      >
        <select
          className={`${props.inputWidth} ${props.bgColor} ${props.textColor} ${props.fontFamily} ${props.fontStyle} ${props.textSize} ${props.lineHeight} appearance-none ${props.selectHeight} ${props.borderColor} border outline-none pl-3 ${props.borderRadius}`}
        >
          <option selected={props.selected}>{props.selectText}</option>
          {props.optionsSelect.map((options) => (
            <option key={options.label} value={options.value}>
              {options.label}
            </option>
          ))}
        </select>
        <Image
          className={`absolute ${props.iconImageMargin} pointer-events-none`}
          src={DropDownIcon}
          alt="dropdown icon"
        />
      </div>
    </div>
  );
};

export default dropDownSelect;
