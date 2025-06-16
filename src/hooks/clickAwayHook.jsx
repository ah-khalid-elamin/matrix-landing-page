import { useRef, useEffect } from 'react';

// Custom hook
const useClickAway = callback => {
  const ref = useRef(null);
  const savedCallback = useRef(callback);

  // Update callback ref if callback changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        savedCallback.current();
      }
    };

    // Using capture phase for better performance
    document.addEventListener('mousedown', handleClick, true);
    document.addEventListener('touchstart', handleClick, true);

    return () => {
      document.removeEventListener('mousedown', handleClick, true);
      document.removeEventListener('touchstart', handleClick, true);
    };
  }, []);

  return ref;
};

export default useClickAway;

