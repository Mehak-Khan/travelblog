import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation(); // Hook to get the current location (path)

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when location changes
  }, [location]); // Trigger effect on location change

  return null;
};

export default ScrollToTop;
