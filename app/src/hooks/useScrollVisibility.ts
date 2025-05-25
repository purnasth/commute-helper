import { useEffect, useState } from 'react';

const useScrollVisibility = (bottomThreshold: number = 100) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      if (
        scrollPosition > 0 &&
        scrollPosition + windowHeight < documentHeight - bottomThreshold
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [bottomThreshold]);

  return isVisible;
};

export default useScrollVisibility;
