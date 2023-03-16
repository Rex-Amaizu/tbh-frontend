import Image from 'next/future/image';
import Link from 'next/link';

// components
import PrivacyPolicy from './privacyPolicyModal';
import TermsAndConditions from './termsAndConditions';

//images
import FaceBookImg from '../../../public/assets/images/footer/facebookFooterIcon.svg';
import InstagramImg from '../../../public/assets/images/footer/instagramFooterIcon.svg';
import GroupIcon from '../../../public/assets/images/footer/tbhLogo.svg';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full  overflow-hidden h-auto sl:h-96.5 bg-[#ffffff] p-6 md:pt-16 md:pl-24 md:pr-24 flex flex-col gap-2">
      {/* Main Footer Body First Col */}
      <div className="flex pb-6  border-b border-t border-[#768396]  overflow-hidden flex-col gap-2 md:flex-row ms:gap-4 lg:gap-16 xl:gap-36">
        {/* Row 1   -   Icon Row */}
        <div className="flex  gap-2.5">
          <Image
            style={{
              width: '176px',
              height: 'auto',
            }}
            src={GroupIcon}
            alt="linePrice"
            className="mt-9 w-80"
          />
          {/* <p className="text-[#028789] text-sms not-italic font-Poppins font-normal leading-110 mt-9">
            Subscribe to our Newsletter
          </p>
          <div>
            <form className="flex flex-row">
              <input
                type="text"
                placeholder="Email here"
                className="py-3 px-4 border-none outline-none bg-[#F1F1F1] text-black "
              />
              <button
                style={{
                  background:
                    'linear-gradient(111.09deg, #028789 11.48%, #6BB47B 95.74%',
                }}
                className="py-3 px-4 border-none outline-none text-white bg-[linear-gradient(111.09deg, #028789 11.48%, #6BB47B 95.74%]"
                type="button"
              >
                Send
              </button>
            </form>
          </div> */}
        </div>

        {/* Row 2 - Comp/hel/legal */}
        <div className="flex flex-col gap-2 ms:flex-row ms:gap-4 lg:gap-17">
          {/* Company */}
          <div className="flex flex-col gap-6.5">
            <p className="text-[#028789] text-sms not-italic font-Poppins font-normal leading-110 mt-9">
              Services
            </p>
            <div className="flex flex-col gap-3">
              <p className="font-normal pb-4 cursor-pointer not-italic w-[127px] font-Poppins text-xs leading-85 text-[#212121]">
                <Link href="#services">Business Registration</Link>
              </p>
              {/* <p className="font-normal cursor-pointer not-italic font-Poppins text-xs leading-85 text-[white]">
                <Link href="">Careers</Link>
          </p> */}
              <p className="font-normal pb-4 cursor-pointer w-[127px] not-italic font-Poppins text-xs leading-85 text-[#212121]">
                <Link href="#services">Business Diagnostic</Link>
              </p>
              <p className="font-normal pb-4 cursor-pointer not-italic font-Poppins text-xs leading-85 text-[#212121]">
                <Link href="#services">Co-working space</Link>
              </p>
              <p className="font-normal pb-4 cursor-pointer not-italic font-Poppins text-xs leading-85 text-[#212121]">
                <Link href="#services">Equipment leasing</Link>
              </p>
            </div>
          </div>

          {/* Help and Support */}
          <div className="flex flex-col gap-6.5">
            <p className="text-[#028789] text-sms not-italic font-Poppins font-normal leading-110 mt-9">
              Solutions
            </p>
            <div className="flex flex-col gap-3">
              <p className="font-normal pb-4 cursor-pointer not-italic font-Poppins text-xs leading-85 text-[#212121]">
                <Link href="#loans">Loans</Link>
              </p>
              <p className="font-normal pb-4 cursor-pointer not-italic font-Poppins text-xs leading-85 text-[#212121]">
                <Link href="#payments">Payments</Link>
              </p>
              <p className="font-normal cursor-pointer not-italic font-Poppins text-xs leading-85 text-[#212121]">
                <Link href="mailto:hello@thebusinesshub.ng">Support</Link>
              </p>
            </div>
          </div>
          {/* Legal */}
          <div className="flex flex-col gap-6.5">
            <p className="text-[#028789] text-sms not-italic font-Poppins font-normal leading-110 mt-9">
              Get in touch
            </p>
            <div className="flex flex-col gap-3">
              <p className="font-normal pb-4 cursor-pointer not-italic font-Poppins text-xs leading-85 text-[#212121] ">
                Email:
                <span className="hover:text-[#028789]">
                  {' '}
                  <Link href="mailto:hello@thebusinesshub.ng">
                    hello@thebusinesshub.ng
                  </Link>{' '}
                </span>
              </p>

              {/* <p className="font-normal; cursor-pointer not-italic font-Poppins text-xs leading-85 text-[white]">
                <Link href="">Terms and Conditions</Link>
                </p> */}
              {/* <TermsAndConditions /> */}
              {/* <p className="font-normal cursor-pointer not-italic font-Poppins text-xs leading-85 text-[white]">
                <Link href="">Privacy Policy</Link>
                  </p> */}
              {/* <PrivacyPolicy /> */}
            </div>
          </div>
          <div className="flex flex-col gap-6.5">
            <p className="text-[#028789] text-sms not-italic font-Poppins font-normal leading-110 mt-9">
              Legal
            </p>
            <div className="flex flex-col gap-3">
              {/* <p className="font-normal; cursor-pointer not-italic font-Poppins text-xs leading-85 text-[white]">
                <Link href="">Terms and Conditions</Link>
                </p> */}
              <div className="pb-4">
                <TermsAndConditions />
              </div>
              {/* <p className="font-normal cursor-pointer not-italic font-Poppins text-xs leading-85 text-[white]">
                <Link href="">Privacy Policy</Link>
                  </p> */}
              <div className="pb-4">
                <PrivacyPolicy />
              </div>
            </div>
            {/* Follow Us */}
            <div className="flex flex-col gap-3 w-80">
              <p className="text-[#028789] text-sms not-italic font-Inter font-semibold leading-110 ">
                Follow us
              </p>
              <div className="flex flex-row gap-3.5">
                <div className="flex flex-row items-center gap-2">
                  <Link href="https://www.instagram.com/tbh.nigeria/?hl=en">
                    <Image
                      src={InstagramImg}
                      alt="instagram"
                      className="w-7 h-7 cursor-pointer hover:bg-[#F2C900] hover:rounded-lg"
                    />
                  </Link>
                  <p className="font-Poppins font-norma w-[63px] text-xs leading-110 text-[#000000]">
                    Instagram
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <Link href="https://web.facebook.com/tbh.nigeria/?_rdc=1&_rdr">
                    <Image
                      src={FaceBookImg}
                      alt="facebook"
                      className="w-7 h-7 cursor-pointer hover:bg-[#F2C900] hover:rounded"
                    />
                  </Link>
                  <p className="font-Poppins font-normal w-[63px] text-xs leading-110 text-[#000000]">
                    Facebook
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body Footer Second Col */}
      <div className=" md:pr-[120px] gap-6 md:flex-row ms:gap-4 lg:gap-16 xl:gap-36">
        <p className="text-[#028789] text-sms not-italic font-Poppins font-normal leading-110 mt-5 md:mt-9">
          Disclaimer
        </p>
        <div className="md:flex justify-between items-center gap-6">
          <div>
            <p className="font-normal pt-[8px] cursor-pointer not-italic font-Poppins text-xs leading-197 text-[#212121] ms:w-72 lg:w-[575px]">
              The Business Hub (TBH) is a technology platform - it is not a bank
              and does not hold or claim to hold a banking license. The banking
              services/financial services offered on The Business Hub platform
              are provided by partner CBN-licensed bank(s) and financial
              institution(s)
            </p>
          </div>
          <p className="font-Poppins  not-italic mt-4 font-normal text-xs leading-197 text-[#212121]">
            {year} TheBusinessHub. All Rights Reserved.
          </p>
        </div>
      </div>
      {/* Main Body Footer Second Col */}
    </div>
  );
};

export default Footer;
