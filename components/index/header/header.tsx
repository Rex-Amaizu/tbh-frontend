import React from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
// import { Dropdown } from 'antd';
import Logo from '../../../public/assets/images/tbh/tbhLogo.svg';
import { useRouter } from 'next/router';
// import DownArrow from '../../../public/assets/images/home/downArrow.svg';
// import { FirstMenu, SecondMenu } from './menu';
import styles from '../../../styles/Header.module.css';
import { useNearDesktopMedia, useMedia } from 'hooks/useResponsive';
import MobileMenu from './mobileMenu';

const Header = () => {
  const confusedDevice = useNearDesktopMedia();
  const mobileDevice = useMedia('(max-width: 541px)');

  const { pathname } = useRouter();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div
        style={{
          height: 'auto',
          alignSelf: 'center',
        }}
      >
        <Link href="/">
          <Image
            className={`${styles.logo} cursor-pointer`}
            src={Logo}
            alt="logo"
            style={{ width: mobileDevice ? '150px' : '167px', height: '53px' }}
          />
        </Link>
      </div>
      <div className={styles.navContainer}>
        {confusedDevice && (
          <div className={`${styles.item} `}>
            <div
              className=" cursor-pointer"
              onClick={() => {
                router.push('/businessPerks');
              }}
            >
              <h3 className=" font-Poppins mr-2">Business Perks</h3>
            </div>
          </div>
        )}
        {confusedDevice && (
          <div className={`${styles.item} `}>
            <div
              className=" cursor-pointer"
              onClick={() => {
                if (pathname === '/subscribeScreens') {
                  localStorage.removeItem('idName');
                  localStorage.setItem('idName', 'services');
                  router.push('/');
                }

                if (pathname === '/businessPerks') {
                  localStorage.removeItem('idName');
                  localStorage.setItem('idName', 'services');
                  router.push('/');
                }

                const el = document.getElementById('services');
                if (el) {
                  el.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
            >
              <h3 className=" font-Poppins mr-2">Services</h3>
            </div>
          </div>
        )}
        {confusedDevice && (
          <div className={`${styles.item} `}>
            <div
              className=" cursor-pointer"
              onClick={() => {
                if (pathname === '/subscribeScreens') {
                  localStorage.removeItem('idName');
                  localStorage.setItem('idName', 'solutions');
                  router.push('/');
                }

                if (pathname === '/businessPerks') {
                  localStorage.removeItem('idName');
                  localStorage.setItem('idName', 'solutions');
                  router.push('/');
                }

                const el = document.getElementById('solutions');
                if (el) {
                  el.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
            >
              <h3 className=" font-Poppins mr-2">Solutions</h3>
            </div>
          </div>
        )}
        {confusedDevice && (
          <div className={`${styles.item} `}>
            <div
              className=" cursor-pointer"
              onClick={() => {
                if (pathname === '/subscribeScreens') {
                  localStorage.removeItem('idName');
                  localStorage.setItem('idName', 'payments');
                  router.push('/');
                }

                if (pathname === '/businessPerks') {
                  localStorage.removeItem('idName');
                  localStorage.setItem('idName', 'payments');
                  router.push('/');
                }

                const el = document.getElementById('payments');
                if (el) {
                  el.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
            >
              <h3 className=" font-Poppins mr-2">Payments</h3>
            </div>
          </div>
        )}
        {confusedDevice && (
          <div className={`${styles.item} `}>
            <div
              className=" cursor-pointer"
              onClick={() => {
                if (pathname === '/subscribeScreens') {
                  localStorage.removeItem('idName');
                  localStorage.setItem('idName', 'pricing_section');
                  router.push('/');
                }

                if (pathname === '/businessPerks') {
                  localStorage.removeItem('idName');
                  localStorage.setItem('idName', 'pricing_section');
                  router.push('/');
                }

                const el = document.getElementById('pricing_section');
                if (el) {
                  el.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
            >
              <h3 className=" font-Poppins mr-2">Pricing</h3>
            </div>
          </div>
        )}
        {/*confusedDevice && (
          <div className={`${styles.item} `}>
            <h3 className="mr-2">Developer</h3>
          </div>
        )*/}

        <div className={styles.itembtn}>
          <a
            type="button"
            href="https://tbh-dashboard-frontend-dev.sterlingapps.p.azurewebsites.net/"
          >
            <h3 className=" font-Poppins">Login</h3>
          </a>
          {/* <a
            type="button"
            href="https://tbh-user-dashboard-61wk-o714g1qpc-awka-man.vercel.app"
          >
            Log in
      </a> */}
        </div>
        <div className={styles.itembtnOne}>
          <button type="button" className=" font-Poppins">
            <a href="https://tbh-dashboard-frontend-dev.sterlingapps.p.azurewebsites.net/signup">
              Join the community
            </a>
          </button>
          {/* <button type="button" className=" font-Poppins">
            <a href="https://tbh-user-dashboard-61wk-o714g1qpc-awka-man.vercel.app/signup">
              Open an Account
            </a>{' '} 
    </button> */}
        </div>
        <div className={styles.itemMobileMenu}>
          {!confusedDevice && <MobileMenu />}
        </div>
      </div>
    </div>
  );
};

export default Header;
