import React from 'react';

const startApplication = () => {
  return (
    <div className="flex flex-row justify-between pl-24 pr-24 items-center mt-[200px] mb-[70px] w-full h-[230px] bg-startAppBg font-Poppins not-italic font-medium leading-131 text-basex">
      <div className="felx flex-col gap-3">
        <p className="not-italic font-Poppins font-normal leading-131 text-lg text-[#ffffff]">
          Business Support Facility
        </p>
        <h1 className="not-italic font-Poppins font-semibold leading-131 text-xlz text-[#ffffff]">
          Start your loan application
          <br /> in just 3o minutes
        </h1>
      </div>
      <div className="flex flex-row gap-[8.2px] justify-center items-center w-[166px] h-[38px] p-[8.2px] bg-[#005555] rounded-sm outline-none cursor-pointer">
        <p className="not-italic font-Poppins font-bold leading-110 text-xs text-[#ffffff]">
          Apply Now
        </p>
      </div>
    </div>
  );
};

export default startApplication;
