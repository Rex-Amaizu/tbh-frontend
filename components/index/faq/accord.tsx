import React from 'react';
import Image from 'next/future/image';
import styles from '../../../styles/Faq.module.css';
import { data } from './data';
import Up from '../../../public/assets/images/home/up.svg';
import Down from '../../../public/assets/images/home/down.svg';

const Accord = () => {
  const [selected, setSelected] = React.useState(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.accord}>
        {data.map((f, i) => (
          <>
            <div
              key={f.id}
              // key={i}
              className={
                selected !== i ? styles.accordItem : styles.accordItem2
              }
            >
              <div className={styles.accordTitle} onClick={() => toggle(i)}>
                <h2 className=" font-Poppins font-medium">{f.title}</h2>
                <span>
                  <Image src={selected === i ? Up : Down} alt="up arrow icon" />
                </span>
              </div>
              {/* <div
              className={
                selected === i
                  ? styles.accordContent && styles.show
                  : styles.accordContent
              }
            >
              <p className=" font-Poppins font-normal">{f.description}</p>
            </div> */}
            </div>
            {selected === i && (
              <div className={styles.faqContent}>
                <span className=" font-Poppins font-normal text-xs text-[#212121]">
                  {f.link ? (
                    <a href={f.link}>{f.description}</a>
                  ) : (
                    f.description
                  )}
                </span>
                <ul className=" mt-4">
                  {f.list?.map((f, i) => (
                    <li
                      key={i}
                      className="font-Poppins font-normal text-xs text-[#212121]"
                    >
                      &#10003; {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Accord;
