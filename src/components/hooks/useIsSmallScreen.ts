import { useState, useEffect } from 'react';
import { device } from '../breakpoints';

const useIsSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmallScreen(window.matchMedia(device.md).matches);
    };

    checkWindowSize(); 

    window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return isSmallScreen;
};

export default useIsSmallScreen;
