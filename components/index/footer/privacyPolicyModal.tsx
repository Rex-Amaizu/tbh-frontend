import * as React from 'react';
import Image from 'next/future/image';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FocusOnce,
  ROLE,
  SIZE,
} from 'baseui/modal';

// hooks
import { useMedia } from 'hooks/useResponsive';

// Images
import GroupIcon from '../../../public/assets/images/tbh/tbh-white-logo.svg';
import { Button } from 'antd';

export default function PrivacyPolicy() {
  const [isOpen, setOpen] = React.useState(false);
  const tabDevice = useMedia('(max-width: 1024px)');

  // React.useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }
  // }, [isOpen]);

  return (
    <div className="privacyPolicy">
      <p
        className="font-normal; cursor-pointer not-italic font-Poppins text-xs leading-85 text-[#212121]"
        onClick={() => setOpen((s) => !s)}
      >
        Privacy Policy
      </p>
      <Modal
        animate
        autoFocus
        size={SIZE.full}
        role={ROLE.dialog}
        // onClose={() => setOpen(false)}
        isOpen={isOpen}
        overrides={{
          Root: {
            style: () => ({
              backgroundColor: '#F2C900',
            }),
          },
          Dialog: {
            style: () => ({
              outline: '#000000 solid',
              backgroundColor: '#000000',
            }),
          },
        }}
      >
        <FocusOnce>
          <ModalHeader>
            <Image
              style={{
                marginBottom: tabDevice ? '3rem' : '',
              }}
              className=" mb-7"
              src={GroupIcon}
              alt="TBH Logo"
            />
            <div
              style={{
                width: tabDevice ? '100%' : '25%',
                margin: '0 auto',
              }}
            >
              <h2 className="privacyHeader text-center font-Poppins text-[#ffffff] hover:bg-white hover:text-black">
                Privacy Policy
              </h2>
            </div>
          </ModalHeader>
        </FocusOnce>
        <ModalBody>
          <h3 className="privacy__item-title font-Poppins text-white">
            Effective from the 1st of March 2021.
          </h3>
          <hr className="tandcHr" />
          <p>
            For the purpose of this policy &quot;you&quot; or &quot;your&quot;
            means you as a user of the Business Hub website or mobile
            application or as a participant in the Services and/or a user of the
            Services on the Sites (as defined below). &quote;We&quot;,
            &quot;our&quote; or &quot;us&quot; means Sultan and Joanna Limited,
            the platform provider of The Business Hub (TBH) accessed via the
            website{' '}
            <a href="http://www.thebusinesshub.ng">
              <span className=" text-[#F2C900] hover:text-white">
                www.thebusinesshub.ng
              </span>
            </a>
            .
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            Application of this Privacy Policy
          </h3>
          <hr className="tandcHr" />
          <p>
            This privacy policy applies to all information we collect through
            our Services from current and former users, including you.
            “Services” means any products, services, content, features,
            technologies, or functions, and all related websites, applications
            and services we offer to you.{' '}
          </p>
          <p>
            By using our Services or continuing to visit the website, you accept
            and consent to the practices described in this policy.
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            Objectives of this Policy
          </h3>
          <hr className="tandcHr" />
          <p>
            We have developed this Privacy Statement to explain how we may
            collect, retain, process, share and transfer your Personal Data when
            you visit our website or use our Services.{' '}
          </p>
          <p>
            This Privacy Statement is designed to help you obtain information
            about our privacy practices and to help you understand your privacy
            choices when you use the websites and Services. It does not apply to
            online websites or services that we do not own or control, including
            websites or services which we may link.
          </p>
          <p>
            Please read the following carefully to understand our views and
            practices regarding your personal data and how we will treat it. We
            give you choices about the ways we use and share your personal
            information, and we&apos;ll respect the choices you make.
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            Why we collect Your information
          </h3>
          <hr className="tandcHr" />
          <p>
            To the extent permissible under applicable law, we use your
            information to:
          </p>
          <ul>
            <li>
              provide any information and services that you have requested or
              any applications or services that you have ordered;
            </li>
            <li>
              compare information for accuracy and to verify it with third
              parties;
            </li>
            <li>
              provide, maintain, protect and improve our website, applications,
              products, services and information that you may have requested
              from us;
            </li>
            <li>
              provide you with information regarding our products and services;
            </li>
            <li>
              manage risks and protect the Sites, the Services and you from
              fraud by verifying your identity;
            </li>
            <li>
              undertake internal testing of our website, applications, systems
              and services to test and improve their security, provision and
              performance, in which case, we would pseudonymise any information
              used for such purposes, and ensure is it only displayed at
              aggregated levels which will not be linked back to you or any
              living individual;
            </li>
            <li>
              enable the use of our or our Partner services and facilities
              securely and to enable us deliver the services you have requested;
            </li>
            <li>address issue(s) or concerns you have raised</li>
            <li>
              enable us take your suggestion on what you may be interested in;
            </li>
            <li>
              contact you to see if you would like to take part in our customer
              research (for example, feedback on your use of our applications,
              products and services);
            </li>
            <li>
              deliver targeted advertising, marketing (which may include
              in-product messaging) or information to you which may be useful to
              you, based on your use of our applications and services;
            </li>
          </ul>
          <p>
            Our website, mobile applications and Services may contain technology
            that enables us to:
          </p>
          <ul>
            <li>
              check specific information from your device or systems directly
              relevant to your use of the websites, applications or services
              against our records to make sure the websites, applications or
              services are being used in accordance with our end-user agreements
              and to troubleshoot any problems;
            </li>
            <li>
              obtain information relating to any technical errors or other
              issues with our website, applications and services;
            </li>
            <li>comply with our legal or regulatory obligations;</li>
            <li>
              collect information about how you and users use the functions of
              the features of our website, applications and services; and
            </li>
            <li>
              gather statistical information about the operating system and
              environment from which you access our applications or services.
            </li>
          </ul>

          <h3 className="privacy__item-title font-Poppins text-white">
            Who we share your personal data with
          </h3>
          <hr className="tandcHr" />
          <p>
            It is important that you share some personal data with us to enable
            you use our services and facilities securely and for us to deliver
            the services you have requested. To provide the services that you
            have requested from our platform, we may need to share your data
            with:
          </p>
          <ul>
            <li>
              our service partners and with third party platform and hosting
              service providers, including for the purposes of managing
              complaints or obtaining feedback from you.
            </li>
            <li>
              our affiliates (for example, to provide you with products or
              services, for marketing purposes, for internal reporting and where
              those companies provide services to us).
            </li>
            <li>
              third parties for marketing purposes (e.g. our partners and other
              third parties with whom we work and whose products or services we
              think will interest you in the operation of your business
              activities.
            </li>
            <li>
              any third party in order to meet our legal and regulatory
              obligations, including statutory or regulatory reporting or the
              detection or prevention of unlawful acts.
            </li>
          </ul>

          <h3 className="privacy__item-title font-Poppins text-white">
            Promotional messages
          </h3>
          <hr className="tandcHr" />
          <p>
            We may from time to time use your information to contact you with
            details about our applications, products and services which we feel
            may be of interest to you. We may also share your information with
            our affiliate companies and carefully selected third parties so that
            they (or we) may contact you with information about their products
            or services which we feel may be of interest to you. We or they may
            wish to contact you for this purpose by telephone, post, SMS or
            email. You have the right at any time to stop us from contacting you
            for marketing purposes. You may also request at any time that we do
            not share your information with third parties referred to in this
            paragraph. To opt-out from receiving such promotional messages,
            please send us an email to{' '}
            <a href="mailto: hello@thebusinesshub.ng">
              <span className=" text-[#F2C900] hover:text-white">
                hello@thebusinesshub.ng
              </span>
            </a>
            . You can also unsubscribe from any email marketing using the links
            provided in the emails we send to you.
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            How we use Cookies
          </h3>
          <hr className="tandcHr" />
          <p>
            {' '}
            When you visit the website, use our Services, or visit a third-party
            website for which we provide online Services, we and our business
            partners and vendors may use cookies and other tracking technologies
            (collectively, “Cookies”) to recognize you as a User and to
            customize your online experience, the Services you use, and other
            online content and advertising; measure the effectiveness of
            promotions and perform analytics; and to mitigate risk, prevent
            potential fraud, and promote trust and safety across the websites
            and Services. Certain aspects and features of our Services and Sites
            are only available through the use of Cookies, so if you choose to
            disable or decline Cookies, your use of the Sites and Services may
            be limited or not possible.
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            How We Protect Your Personal Data?
          </h3>
          <hr className="tandcHr" />
          <p>
            In order to protect your personal data, we maintain technical,
            physical, and administrative security measures designed to provide
            reasonable protection for your Personal Data against loss, misuse,
            unauthorized access, disclosure, and alteration. The security
            measures include firewalls, data encryption, physical access
            controls to our data centers, and information access authorization
            controls. While we are dedicated to securing our systems and
            Services, you are responsible for securing and maintaining the
            privacy of your password(s) and Account/profile registration
            information and verifying that the Personal Data we maintain about
            you is accurate and current. We are not responsible for protecting
            any Personal Data that we share with a third-party based on an
            account connection that you have authorized. If we learn of a
            system’s security breach, we may attempt to notify you
            electronically so that you can take appropriate protective steps.
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            Can Minors Use Our Services?
          </h3>
          <hr className="tandcHr" />
          <p>
            the website and Services are not directed to anyone under the age of
            18. We do not knowingly collect information, including Personal
            Data, from children or other individuals who are not legally able to
            use the website and Services. If we obtain actual knowledge that we
            have collected Personal Data from a child under the age of 18, we
            will promptly delete it, unless we are legally obligated to retain
            such data.{' '}
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            IP Address and traffic data
          </h3>
          <hr className="tandcHr" />
          <p>
            We keep a record of traffic data which is logged automatically by
            our servers, such as your Internet Protocol (IP) address, device
            information, the website that you visited before ours and the
            website you visit after leaving the website. We also collect some
            site, application and service statistics such as access rates, page
            hits and page views. We are not able to identify any individual from
            traffic data or site statistics.
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            How long do we keep your personal Data?
          </h3>
          <hr className="tandcHr" />
          <p>We will only keep your personal data for the following period:</p>
          <ul>
            <li>
              as long as we need it to deliver the services requested by you
              (including provision of information you have requested); or
            </li>
            <li>
              in order to comply with any legal or regulatory requirements.
            </li>
          </ul>

          <h3 className="privacy__item-title font-Poppins text-white">
            Your rights under this Policy
          </h3>
          <hr className="tandcHr" />
          <p>
            Under the Nigerian Data Protection Regulation, in certain
            circumstances you have the following rights:
          </p>
          <ul>
            <li>
              the right to be told how we use your information and obtain access
              to your information;
            </li>
            <li>
              the right to have your information rectified or erased or place
              restrictions on processing your information;
            </li>
            <li>
              the right to object to the processing of your information e.g. for
              direct marketing purposes or where the processing is based on our
              legitimate interests;
            </li>
            <li>
              the right to give and withdraw consent to the processing of your
              personal information. We may however be unable to provide some
              services that you may request unless your consent to process your
              personal Data is obtained.
            </li>
          </ul>

          <h3 className="privacy__item-title font-Poppins text-white">
            Changes to This Privacy Statement.
          </h3>
          <hr className="tandcHr" />
          <ul>
            <li>
              We may revise this Privacy Statement from time to time to reflect
              changes to our business, the Site or Services, or applicable laws.
              The revised Privacy Statement will be effective as of the
              published effective date.{' '}
            </li>
            <li>
              If the revised version includes a substantial change, we may
              provide you with 30 days prior notice by posting notice of the
              change our website or notify Users of the change using email or
              other means.
            </li>
            <li>
              Your continued use of the Platform after we post any modifications
              to the Privacy Policy on this page will constitute your
              acknowledgment of the modifications and your consent to abide and
              be bound by the modified Privacy Policy.
            </li>
          </ul>

          <h3 className="privacy__item-title font-Poppins text-white">
            Contact Us
          </h3>
          <hr className="tandcHr" />
          <p>
            If you would like more information on our Privacy Policy, your
            rights, or want to exercise them, please contact us via{' '}
            <a href="mailto: hello@thebusinesshub.ng">
              <span className=" text-[#F2C900] hover:text-white">
                hello@thebusinesshub.ng
              </span>
            </a>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setOpen(false)}
            style={{
              backgroundColor: 'red',
              right: '45%',
              width: '167px',
              height: '50px',
              border: '#ffffff',
              background: '#ffffff',
              borderRadius: '5px',
            }}
          >
            <p className=" font-Poppins font-medium text-md text-[#000000] hover:text-[#F2C900]">
              Okay, I Understand
            </p>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
