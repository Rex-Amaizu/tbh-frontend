import { useState } from 'react';
import Image from 'next/future/image';

import ArrowIcon from '../../../public/assets/images/home/accordionIcon.svg';
import ArrowIconUp from '../../../public/assets/images/home/accordionIconDown.svg';

import styles from '../../../styles/Faq.module.css';

type TProps = {
  title: string;
  description: string;
};

const Accordion = ({ title, description }: TProps) => {
  const [open, setOpen] = useState(false);

  let openHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionTitle} onClick={openHandler}>
        <div className={styles.titleText}>{title}</div>
        <div>
          <Image src={open ? ArrowIcon : ArrowIconUp} alt="icon" />
        </div>
      </div>
      {open && (
        <div
          style={{
            borderTop: open ? '1px solid #ffffff' : '',
          }}
          className={styles.accordionContent}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default Accordion;
