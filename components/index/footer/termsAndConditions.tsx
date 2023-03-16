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

export default function TermsAndConditions() {
  const [isOpen, setOpen] = React.useState(false);
  const tabDevice = useMedia('(max-width: 1024px)');

  return (
    <div className="privacyPolicy">
      <p
        className="font-normal; cursor-pointer not-italic font-Poppins text-xs leading-85 text-[#212121]"
        onClick={() => setOpen((s) => !s)}
      >
        Terms and Conditions
      </p>
      <Modal
        animate
        autoFocus
        size={SIZE.full}
        role={ROLE.dialog}
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
                Terms and Conditions
              </h2>
            </div>
          </ModalHeader>
        </FocusOnce>
        <ModalBody>
          <h3 className="privacy__item-title font-Poppins text-white">
            Welcome to The Business Hub (TBH)
          </h3>
          <hr className="tandcHr" />
          <p className=" mb-3">
            The Business Hub (“Platform”, or “TBH”) is developed and operated by
            Sultan and Joanna Limited (“Us, We, Our”) as an initiative which
            supports individuals, businesses and corporates to innovate and grow
            across a broad range of different sectors, with varied capabilities.
            TBH helps drive innovation and transformation across industry
            sectors, through collaboration and by promoting creativity and
            entrepreneurship. Through our activities, we create opportunities
            for individuals and businesses of all sizes to access a broad range
            of skills and support to enable them upscale their businesses. The
            Platform is made available via web and mobile.
          </p>
          <p>
            Please read these Terms and Conditions (&quot;Terms&quot;) carefully
            before accessing or using the Platform. These terms govern and apply
            to your access and use of the suite of services (“Services”) on the
            Platform. By accessing and using the Platform, you agree to be bound
            by these Terms and all other terms and policies that are applicable
            to any account or service you can access using this Platform
            (collectively referred to as “Terms”). If you do not wish to be
            bound by any of these Terms, you may not use the Platform or the
            Services.{' '}
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            ACCESS AND USE OF THE PLATFORM
          </h3>
          <hr className="tandcHr" />
          <p>To be eligible to use the Platform you must be;</p>
          <ul>
            <li>
              18 years or above. If you are under 18 and you wish to access or
              use the Services, your parents or legal guardian must consent to
              our Terms, otherwise, you shall immediately discontinue its use.
              We also reserve the right to discontinue your use of the Site if
              you are less than 18 years and have not gotten the consent of your
              parents or legal guardian; and
            </li>
            <li>
              physically located or are a resident of the State or Country you
              have chosen as your current residency when creating your TBH
              Account.
            </li>
          </ul>

          <h3 className="privacy__item-title font-Poppins text-white">
            ACCOUNT ENROLLMENT
          </h3>
          <hr className="tandcHr" />
          <p>
            To access the Services on the Platform, firstly, you need to enroll
            to create an individual or corporate profile (“Account”), by
            providing certain information such as your name, email address,
            mobile device number, online credentials for your Bank Account, and
            such other information as we may request from time to time
            (collectively, &quot;User Information&quot;). In exchange for your
            use of the Services. You agree to:{' '}
          </p>
          <ul>
            <li>
              provide true, accurate, current and complete information about
              yourself as prompted by our Account enrolment form and
            </li>
            <li>
              each time you log on, maintain and promptly update such Account
              information to keep it true, accurate, current and complete. If
              you provide any information that is untrue, inaccurate, not
              current or incomplete, or we have reasonable grounds to suspect
              that such Account information is untrue, inaccurate, not current
              or incomplete, we reserve the right to refuse any future
              request(s) to use the Services.
            </li>
          </ul>

          <h3 className="privacy__item-title font-Poppins text-white">
            CONTENT
          </h3>
          <hr className="tandcHr" />
          <p>
            You understand and acknowledge that any content you submit on the
            Platform and/or provide to us, including but not limited to,
            questions, reviews, comments, and suggestions (collectively,
            &quot;Submissions&quot;) will become our sole and exclusive property
            and shall not be returned to you.
          </p>
          <p>
            In addition to the rights applicable to any Submission, when you
            post comments or reviews on the Platform, you also grant us the
            right to use the name that you submit, in connection with such
            review, comment, or other content.
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            WEBSITE USE
          </h3>
          <hr className="tandcHr" />
          <p>
            The website is not directed to, nor intended for distribution or use
            by, any person or entity in any jurisdiction or country where the
            publication or availability of the webite or such distribution or
            use would be contrary to local laws or regulations. If you choose to
            access information on the website, it is your responsibility to
            comply with the applicable laws.
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            OUR INTELLECTUAL PROPERTY
          </h3>
          <hr className="tandcHr" />
          <p>find below the following:</p>
          <ul>
            <li>
              Except for any user generated content that you upload on the
              platform, to which you retain all ownership rights, unless
              otherwise specified, we are the owner or the licensee of all
              intellectual property rights in or on the platform and its
              content, including but not limited to copyright, unregistered and
              registered trademark rights. All such rights are reserved and the
              benefit of any goodwill which arises through your use inures to
              us.
            </li>
            <li>
              You may print and/or download extracts of any page(s) from the
              platform for your personal use and you may draw the attention of
              others within your organisation to content posted on the website.
              You may not use any part of the content on the website for any
              other purposes without our prior permission.{' '}
            </li>
            <li>
              You must not modify any of the website materials you have printed
              off or downloaded in any way, or use any illustrations,
              photographs, video or audio sequences or any graphics separately
              from any accompanying text.
            </li>
            <li>
              Our status (and that of any identified contributors) as the
              authors of content on our Website must always be acknowledged.{' '}
            </li>
            <li>
              If you print off, copy or download any part of the website in
              breach of these Terms, your right to use the website will cease
              immediately and you must, at our option, return or destroy any
              copies of the materials you have made.
            </li>
          </ul>

          <h3 className="privacy__item-title font-Poppins text-white">
            PROHIBITED ACTIVITIES
          </h3>
          <hr className="tandcHr" />
          <p>You agree not to use the Platform:</p>
          <ul>
            <li>
              In any way that breaches any applicable local, national or
              international law or regulation.
            </li>
            <li>
              In any way that is unlawful or fraudulent, or has any unlawful or
              fraudulent purpose or effect
            </li>
            <li>
              For the purpose of harming or attempting to harm minors in any
              way.
            </li>
            <li>
              To send, knowingly receive, upload, download, use or re-use any
              material which does not comply with these Terms.
            </li>
            <li>
              To transmit, or procure the sending of, any unsolicited or
              unauthorised advertising or promotional material or any other form
              of similar solicitation (spam).
            </li>
            <li>
              In any way which undermines or negatively impacts the Platform or
              any of the interactive services made available on it.
            </li>
          </ul>
          <p>
            You also agree not to access without authority, interfere with,
            damage or disrupt:
          </p>
          <ul>
            <li>Any part of our Platform;</li>
            <li>Any equipment or network on which our Platform is stored;</li>
            <li>Any software used in the provision of our Platform; or</li>
            <li>
              Any equipment or network or software owned or used by any third
              party.
            </li>
          </ul>
          <p>
            When you contribute to any interactive aspect of the Platform, you
            agree that your contribution shall not:
          </p>
          <ul>
            <li>
              be defamatory of any person, inappropriate, rude, obscene,
              offensive, age-restricted, threatening, abusive, hateful or
              inflammatory or promote discrimination based on race, sex,
              religion, nationality, disability, sexual orientation or age, or
              otherwise contain anything that could damage our reputation (such
              as pornography, gambling, smoking and vaping, or toxic
              substances).
            </li>
            <li>
              advocate, promote or incite violence, terrorism or any other
              illegal activity, including without limitation copyright
              infringement or computer misuse.
            </li>
            <li>
              be likely to deceive any person, impersonate any person, or
              misrepresent your identity or affiliation with any person,
              including us.
            </li>
            <li>
              be likely to harass, upset, embarrass, alarm or annoy any other
              person.
            </li>
            <li>
              Infringe any copyright, database right or trademark of any person.
            </li>
            <li>
              breach any legal duty owed to a third party, such as a contractual
              duty or a duty of confidence.
            </li>
            <li>
              give the impression that the contribution emanates from or is
              endorsed by or associated with us, if this is not the case.
            </li>
          </ul>
          <p>
            When we consider, in our discretion, that a breach of this Terms has
            occurred, we may take such action as we deem appropriate, including
            without limitation:{' '}
          </p>
          <ul>
            <li>
              Immediate, temporary or permanent withdrawal of your right to use
              our Platform.
            </li>
            <li>
              Immediate, temporary or permanent removal of any content or
              information uploaded by you on our Platform.
            </li>
            <li>Issue a warning to you.</li>
            <li>
              Legal proceedings against you for reimbursement of all costs on an
              indemnity basis (including, but not limited to, reasonable
              administrative and legal costs) resulting from the breach.
            </li>
            <li>Further legal action against you.</li>
            <li>
              Disclosure of such information to law enforcement authorities as
              we reasonably feel is necessary or as required by law
            </li>
          </ul>

          <h3 className="privacy__item-title font-Poppins text-white">
            THIRD PARTY LINKS
          </h3>
          <hr className="tandcHr" />
          <p>
            You may be redirected to other webpages from our Platform, or social
            media platform, you agree to do so in a way that is fair and legal
            and does not in our reasonable opinion damage our reputation or take
            advantage of it.
          </p>
          <p>
            You must not establish a link in such a way, which in our reasonable
            opinion, will likely deceive any person or suggest any form of
            association, approval or endorsement on our part where none exists.
          </p>
          <p>
            We reserve the right to withdraw linking permission without notice
            at any time and for any reason, in which case you must remove any
            links to our Platform within 24 hours of notification.
          </p>
          <p>
            The website from which you are linking to our Website must be owned
            and controlled by you (and not a third-party website) and comply in
            all respects with the Community Guidelines set out in these Terms of
            Use.{' '}
          </p>
          <p>
            We accept no liability for any loss or damage, howsoever arising,
            from your failure to comply with these Rules about linking to this
            Site.
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            No Warranty
          </h3>
          <hr className="tandcHr" />
          <p>
            You accept that the information contained on this Platform is
            provided “as is, where is”, is intended for information purposes
            only and that it is subject to change without notice. Although we
            take reasonable steps to ensure the accuracy of information and we
            believe the information to be reliable when posted, it should not be
            relied upon and it does not in any way constitute either a
            representation or a warranty or a guarantee.
          </p>
          <p>
            Some product and service representations expressed on this Site are
            those of the solution provider and are not made by us. Submissions
            or opinions expressed on this Site are those of the individual
            posting such content and may not reflect our opinions.
          </p>
          <p>
            Unless otherwise stated, information and content that you share or
            post may be seen by other users of the Platform. Where we have made
            settings available, we will honour the choices you make about who
            can see content or information.{' '}
          </p>
          <p>
            You agree that we shall not be under any obligation of
            confidentiality to you regarding any information or content uploaded
            to our Platform, unless agreed otherwise between us in writing or as
            required by law, therefore you should not upload any information
            which is confidential or sensitive in nature.
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            Availability of Services
          </h3>
          <hr className="tandcHr" />
          <p>
            Whilst we use our best endeavor to ensure the Platform and Services
            are available optimally, we make no warranty that any part of the
            Platform will operate uninterrupted or error free and we accept no
            liability for loss or damage caused from any interruption or error
            on any part of the Platform.
          </p>
          <p>
            We do not guarantee secure, continuous, uninterrupted access to any
            part of the services, software, or systems, including any networks
            and servers used to provide any of the services stated herein.
            Accordingly, we are not responsible for the matters, which include
            actions of hackers and other unauthorized third parties that breach
            our reasonable security procedure. No method of electronic
            transmission or storage is 100% secure, therefore, we cannot
            guarantee absolute security of the Platform.
          </p>
          <p>
            We will also not be liable for any failure to provide Services, in
            part or full, due to abnormal or unforeseen circumstances beyond our
            control, the consequences of which would have been unavoidable
            despite all efforts to the contrary. This includes but is not
            limited to network failures, or in the case of mobile networks, when
            you are in not in an area of mobile coverage.
          </p>
          <p>
            We reserve the right to remove a service from the Platform with no
            obligation to give advance notice, and we shall not be liable for
            losses, costs or expenses arising from any such refusal or removal.
            You assume the risks associated with the use of the Platform.
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            INTELLECTUAL PROPERTY
          </h3>
          <hr className="tandcHr" />
          <p>
            You agree that all intellectual property rights and database rights,
            whether registered or unregistered, in the Platform, information
            content on the Platform and all the website designs, including, but
            not limited to, text, graphics, software, photos, video, music,
            sound, and their selection and arrangement, and all software
            compilations, underlying source code and software shall remain at
            all times vested in us or our licensors. Use of such material will
            only be permitted as expressly authorized by us or our licensors.
          </p>
          <p>
            Any unauthorized use of the material and content of this Platform is
            strictly prohibited, and you agree not to, or facilitate any third
            party to, copy, reproduce, transmit, publish, display, distribute,
            commercially exploit or create derivative works of such material and
            content.
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            NO WARRANTY
          </h3>
          <hr className="tandcHr" />
          <p>
            Whilst we have taken all reasonable care to ensure that the
            information provided on our Platform is accurate, we give no
            warranties of any kind, express or implied, with regard to the
            accuracy, timeliness or completeness of any such information.
          </p>
          <p>All information contained on the Platform:</p>
          <ul>
            <li>
              is made available for information purposes only, on a non-reliance
              basis and is subject to change without notice;
            </li>
            <li>
              is general in nature and does not take into account any specific
              commercial, investment or financial objectives, financial
              situation or particular needs of any particular person accessing
              our Website;
            </li>
            <li>
              is not intended to amount to advice on which you should rely;
            </li>
            <li>
              Is not intended to form the basis of any business decision and we
              are not responsible for assessing the knowledge and experience or
              suitability of the information provided to those accessing our
              Website, nor are we providing or arranging for the provision of
              any specialist advice, including legal, regulatory, structuring,
              actuarial, accounting, model auditing or taxation advice or
              services in relation to any information made available on our
              Website;
            </li>
            <li>
              has not been verified where provided by third parties and has been
              accepted as complete, true, fair, accurate and not misleading (in
              hosting such information on our Website neither us, nor any of our
              directors, officers, employees, representatives or agents, accepts
              any liability whatsoever for any direct, indirect or consequential
              losses (in contract, tort or otherwise) arising from the use or
              reliance on the information contained on our Website); and
            </li>
          </ul>

          <h3 className="privacy__item-title font-Poppins text-white">
            DISCONTINUATION OF SERVICES OR YOUR ACCOUNT
          </h3>
          <hr className="tandcHr" />
          <p>
            We reserve the right to suspend your usage of the Site or any of the
            Services immediately and without advance notice;
          </p>
          <ul>
            <li>In order to maintain security</li>
            <li>You have breached the terms and conditions</li>
            <li>You give us false information at any time</li>
            <li>We suspect fraud or an attempt at fraud</li>
            <li>If there is suspicious activity on your account</li>
            <li>
              You have not satisfied any anti-money laundering requirements
            </li>
            <li>You have broken the law or attempt to break the law</li>
            <li>
              We receive notice of your mental incapacity, bankruptcy or death
            </li>
            <li>
              There are system maintenance issues which need to be addressed
              promptly
            </li>
            <li>New upgrades are being introduced to the Site</li>
            <li>We have legal obligations to do so</li>
          </ul>
          <p>
            We will attempt to notify you, except it would compromise our
            security measures, or it is unlawful to do so, or impracticable
            within the circumstances.
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            CLOSING YOUR ACCOUNT
          </h3>
          <hr className="tandcHr" />
          <p>
            You can deactivate or close your account any time you want. If
            you&apos;d like to, please contact us (see how to contact us
            section). We will not charge you for cancellation and if you chose
            to stop using the Site, you should ensure you delete the Site from
            your Electronic Access Device.{' '}
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            DISCLAIMERS
          </h3>
          <hr className="tandcHr" />
          <p>Kindly note the following:</p>
          <ul>
            <li>
              The Site may be under constant upgrades, and some functions and
              features may not be fully operational during periods of upgrade or
              software maintenance.
            </li>
            <li>
              We disclaim any liability arising due to the vagaries that can
              occur in the electronic distribution of information.
            </li>
            <li>
              You acknowledge that third party services are available on the
              Site. We may have formed partnerships or alliances with some of
              these third parties from time to time in order to facilitate the
              provision of certain services to you. However, you acknowledge and
              agree that at no time are we making any representation or warranty
              regarding any third party&apos;s services nor will we be liable to
              you or any third party for any consequences or claims arising from
              or in connection with such third party including, and not limited
              to, any liability or responsibility for, death, injury or
              impairment experienced by you or any third party. You hereby
              disclaim and waive any rights and claims you may have against us
              with respect to third party&apos;s services.
            </li>
            <li>
              We do not, in any way, endorse any information or service offered
              or described on the Site. In no event shall we be liable to you or
              any third party for any decision made or action taken in reliance
              on such information
            </li>
            <li>
              You assume all responsibility and risk with respect to your use of
              the Site. The services are provided and available “as is,” and “as
              available”. You understand and agree that, to the fullest extent
              permitted by law, we disclaim all warranties, representations and
              endorsements, express or implied, with regard to the Site,
              including, without limitation, implied warranties of title,
              merchantability, non-infringement and fitness for a particular
              purpose
            </li>
            <li>
              We do not warrant use of the Site will be uninterrupted or
              error-free or that errors will be detected or corrected. We do not
              assume any liability or responsibility for any computer viruses,
              bugs, malicious code or other harmful components, delays,
              inaccuracies, errors or omissions, or the accuracy, completeness,
              reliability or usefulness of the information disclosed or accessed
              through the services.
            </li>
            <li>
              In no event, under no legal or equitable theory (whether tort,
              contract, strict liability or otherwise), shall we or any of our
              respective employees, directors, officers, agents or affiliates,
              be liable hereunder or otherwise for any loss or damage of any
              kind, direct or indirect, in connection with or arising from the
              use of the Site / services or our agreement with you concerning
              the services, including, but not limited to,
              <ul className="disclaimers">
                <li>
                  the use of or inability to use the Site, the service, or the
                  content,
                </li>
                <li>
                  any transaction conducted through or facilitated by the Site;
                </li>
                <li>
                  any claim attributable to errors, omissions, or other
                  inaccuracies in the Site, the service and/or the content,{' '}
                </li>
                <li>
                  unauthorized access to or alteration of your transmissions or
                  data, or{' '}
                </li>
                <li>
                  any other matter relating to the Site, the service, or the
                  content, and any compensatory, direct, consequential,
                  incidental, indirect, special or punitive damages, lost
                  anticipated profits, loss of goodwill, loss of data, business
                  interruption, accuracy of results, or computer failure or
                  malfunction, even if we have been advised of or should have
                  known of the possibility of such damages.
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="privacy__item-title font-Poppins text-white">
            OUR FINANCIAL PARTNERS
          </h3>
          <hr className="tandcHr" />
          <p>
            All financial services, products or offerings made available on the
            Platform, are provided by our financial partner, Sterling Bank Plc
            and/or any other licensed third party that we may from time-to-time
            partner with. We have also integrated to our financial
            partners&apos; payment gateway and other financial solutions,
            ensuring that you have access to seamless, secure and reliable
            payment and financial solutions on the platform.{' '}
          </p>

          <h3 className="privacy__item-title font-Poppins text-white">
            MODIFICATIONS TO THE TERMS
          </h3>
          <hr className="tandcHr" />
          <p>modifications are stipulated as follows:</p>
          <ul>
            <li>
              We may change these terms from time to time. This is solely at our
              discretion and changes will be effective when posted on the Site
              with no other notice provided. Please check the Terms regularly
              for updates as changes shall be effective immediately, and we may
              indicate the date of such revision.
            </li>
            <li>
              In addition, we may change, suspend or discontinue any aspect of
              the Services at any time, including the availability of any
              feature, or content. We may also impose limits on certain features
              and service or restrict your access to parts or all of the Site or
              the Services provided without notice or liability.
            </li>
            <li>
              You are free to decide whether or not to accept a revised version
              of these Terms, but accepting these Terms, as revised, is required
              for you to continue accessing or using the Site and Services. If
              you do not agree to these Terms or any revised version of these
              Terms, your sole recourse is to terminate your access or use of
              the Services. Except as otherwise expressly stated by us, your
              access and use of the Services are subject to, and constitute your
              acceptance of, the version of these Terms in effect at the time of
              your access or use.
            </li>
          </ul>

          <h3 className="privacy__item-title font-Poppins text-white">
            ADDITIONAL TERMS
          </h3>
          <hr className="tandcHr" />
          <h4 className="terms-title">Acceptance of Electronic Documents</h4>
          <p>
            You agree that all agreements, notices, disclosures, records, and
            other communications for all services provided to you under these
            Terms and in connection with your relationship with us
            (collectively, &quot;Communications&quot;) that we provide to you
            electronically satisfy any legal requirement that such
            communications be in writing.
          </p>

          <h4 className="terms-title">Force Majeure</h4>
          <p>
            To the fullest extent permitted under Sitelicable law, we will be
            excused from performance under these Terms for any period that we
            are prevented from or delayed in performing any obligations pursuant
            to this Terms, in whole or in part, as a result of a Force Majeure
            Event. For purposes of this section, “Force Majeure Event” means an
            event or series of events caused by or resulting from any of the
            following:
          </p>
          <ul className="force-majeure">
            <li>
              weather conditions or other elements of nature or acts of God;
            </li>
            <li>
              acts of war, acts of terrorism, insurrection, riots, civil
              disorders or rebellion;{' '}
            </li>
            <li>quarantines or embargoes,</li>
            <li> labor strikes;</li>
            <li>
              unauthorized access to our information technology systems by third
              parties; or{' '}
            </li>
            <li>
              other causes beyond our reasonable controland contemplation.
            </li>
          </ul>

          <h4 className="terms-title">Indemnity</h4>
          <p>
            You agree to defend, indemnify, and hold us harmless, our employees,
            officers, directors, agents, affiliates and third-party service
            providers from and against any and all claims, suits, liabilities,
            damages (actual and consequential), losses, fines, penalties, costs,
            and expenses (including reasonable attorneys&apos; fees) arising
            from or in any way related to any claims relating to your use of the
            Services, violation of these Terms, Sitelicable law or any
            third-party rights or claims, or your fraud or willful misconduct.
            Such indemnified parties reserve the right to assume the exclusive
            defense and control of any matter subject to indemnification by you,
            in which event you will cooperate in asserting any available
            defenses.
          </p>

          <h4 className="terms-title">Limitation of Liability</h4>
          <p>
            Under no circumstances shall we, our licensors or any third party
            content/ service provider be liable for any punitive, exemplary,
            consequential, incidental, indirect or special damages (including,
            without limitation, any personal injury, loss profits, business
            interruption, loss data or otherwise) arising from or in connection
            with the performance of the services, your use of or inability to
            use the services, whether by a breach of contract, negligence,
            strict liability, malpractice or otherwise, even if such party has
            been advised of the possibility of such damages.
          </p>

          <h4 className="terms-title">Waiver</h4>
          <p>
            No waiver by us of any term or condition set forth in these Terms
            shall be deemed a further or continuing waiver of such term or
            condition or a waiver of any other term or condition, and any
            failure by us to assert a right or provision under these Terms shall
            not constitute a waiver of such right or provision.
          </p>

          <h4 className="terms-title">Severability</h4>
          <p>
            If any provision in these terms is judicially determined to be
            illegal, unenforceable, or invalid in whole or in part for any
            reason, such illegal, unenforceable, or invalid provisions or
            part(s) of the same shall be stricken from this terms, and such
            provision shall not affect the legality, enforceability, or validity
            of the remainder of this terms. The stricken provision maybe
            replaced, to the extent possible, with a legal, enforceable, and
            valid provision that is as similar in term to the stricken provision
            as is legally possible.
          </p>

          <h4 className="terms-title">Dispute Resolution</h4>
          <p>
            We will use our best efforts to resolve any issue that may arise
            from the use of the Site. However, we realize that there may be rare
            cases where we may not be able to resolve an issue to your
            satisfaction. In the event we cannot resolve a dispute between us,
            you agree that all matters related to any use or access to the
            Platform or the services shall be referred to Mediation.
          </p>

          <h4 className="terms-title">Governing Law</h4>
          <p>
            These Terms and your use of the Site shall be governed by the laws
            of the Federal Republic of Nigeria, without giving effect to the
            principles of conflict of laws.
          </p>

          <h4 className="terms-title">Contact Us</h4>
          <p>
            We will be pleased if you notify us of any inquiries or issues
            regarding these Terms, because this gives us the opportunity to seek
            a suitable solution. It also gives us the opportunity to improve the
            service/products offered to you and other customers. We also have an
            internal complaints procedure to effectively and promptly address
            any complaints. You may reach us by sending a mail to
            <a href="mailto: hello@thebusinesshub.ng">
              {' '}
              <span className=" text-[#F2C900] hover:text-white">
                hello@thebusinesshub.ng
              </span>
            </a>{' '}
            and include the following information: your name, telephone number
            and a description of your concern or calling us on{' '}
            <a href="tel:+23417004271">
              <span className=" text-[#F2C900] hover:text-white">
                +23417004271
              </span>
            </a>
            ,{' '}
            <a href="tel:+2347066913606">
              <span className=" text-[#F2C900] hover:text-white">
                +2347066913606
              </span>
              .
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
              Okay, I Agree
            </p>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
