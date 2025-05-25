import { useEffect } from 'react';

const useDisableScroll = () => {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      // Enable scrolling
      document.body.style.overflow = 'auto';
    };
  }, []);
};

export default useDisableScroll;
