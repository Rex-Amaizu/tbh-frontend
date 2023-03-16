import Image from 'next/future/image';
import styles from '../../../styles/BusinessResources.module.css';
import EcommerceImg from '../../../public/assets/images/businessResources/ecommerceCustomer.svg';
import BusinessImg from '../../../public/assets/images/businessResources/businessCustomer.svg';
import SmallBusinessImg from '../../../public/assets/images/businessResources/smallBusinessCustomer.svg';

const BusinessResources = () => {
  return (
    <div className={styles.businessResourcesContainer}>
      <label>Business Resources</label>
      <p>All You Need To Know</p>
      <div className={styles.mainBody}>
        <div className={styles.ecommerce}>
          <Image
            className={styles.divImage}
            src={EcommerceImg}
            alt="ecommerce img"
          />
          <div className={styles.textDivs}>
            <h1>
              How E-commerce supports entrepreneurship and growth of SMEs in
              Africa
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              viverra lacus sit amet pharetra scelerisque. Nunc semper vel
              turpis non tincidunt. Nunc eu pretium quam. Pellentesque orci ex,
              auctor eget mattis sed, condimentum a risus. Aliquam et dui sit
              amet neque suscipit lacinia eget vel libero. Proin non felis in
              odio lobortis maximus.
            </p>
            <div className={styles.buttonDiv}>
              <p>Read More</p>
            </div>
          </div>
        </div>
        <div className={styles.ecommerce}>
          <div className={styles.textDivs}>
            <h1>Building a Business From a Bedroom, $98,130 and 11-Months</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              viverra lacus sit amet pharetra scelerisque. Nunc semper vel
              turpis non tincidunt. Nunc eu pretium quam. Pellentesque orci ex,
              auctor eget mattis sed, condimentum a risus. Aliquam et dui sit
              amet neque suscipit lacinia eget vel libero. Proin non felis in
              odio lobortis maximus.
            </p>
            <div className={styles.buttonDiv}>
              <p>Read More</p>
            </div>
          </div>
          <Image
            className={styles.divImage}
            src={BusinessImg}
            alt="business img"
          />
        </div>
        <div className={styles.ecommerce}>
          <Image
            className={styles.divImage}
            src={SmallBusinessImg}
            alt="small business img"
          />
          <div className={styles.textDivs}>
            <h1>
              2022 KEY TO SMALL BUSINESS SOCIAL MEDIA MARKETING in boosting your
              business.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              viverra lacus sit amet pharetra scelerisque. Nunc semper vel
              turpis non tincidunt. Nunc eu pretium quam. Pellentesque orci ex,
              auctor eget mattis sed, condimentum a risus. Aliquam et dui sit
              amet neque suscipit lacinia eget vel libero. Proin non felis in
              odio lobortis maximus.
            </p>
            <div className={styles.buttonDiv}>
              <p>Read More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessResources;
