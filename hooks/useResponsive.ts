import { useState, useEffect } from 'react';

// test for multiple media queries
export const useMedia = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener();
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
  return matches;
};

// test for desktop media
export const useSmallDesktopMedia = (): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  useEffect(() => {
    const media: MediaQueryList = window.matchMedia('(max-width: 1280px)');
    const listener = () => setIsDesktop(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);
  return isDesktop;
};

export const useNearDesktopMedia = (): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  useEffect(() => {
    const media: MediaQueryList = window.matchMedia('(min-width: 1025px)');
    const listener = () => setIsDesktop(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);
  return isDesktop;
};

export const useTabletMedia = (): boolean => {
  const [isTablet, setIsTablet] = useState<boolean>(false);
  useEffect(() => {
    const media: MediaQueryList = window.matchMedia('(min-width: 768px)');
    const listener = () => setIsTablet(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isTablet]);
  return isTablet;
};

export const useMobileMedia = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const media: MediaQueryList = window.matchMedia('(max-width: 760px)');
    const listener = () => setIsMobile(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isMobile]);
  return isMobile;
};

export const useTabMedia = (): boolean => {
  const [isTab, setIsTab] = useState<boolean>(false);
  useEffect(() => {
    const media: MediaQueryList = window.matchMedia('(max-width: 767.5px)');
    const listener = () => setIsTab(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isTab]);
  return isTab;
};

export const useIpadAirMobileMedia = (): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  useEffect(() => {
    const media: MediaQueryList = window.matchMedia('(max-width: 821px)');
    const listener = () => setIsDesktop(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);
  return isDesktop;
};

export const useSmallMobileMedia = (): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  useEffect(() => {
    const media: MediaQueryList = window.matchMedia('(max-width: 450px)');
    const listener = () => setIsDesktop(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);
  return isDesktop;
};

export const useLogoSectionMobileMedia = (): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  useEffect(() => {
    const media: MediaQueryList = window.matchMedia('(max-width: 922px)');
    const listener = () => setIsDesktop(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);
  return isDesktop;
};
