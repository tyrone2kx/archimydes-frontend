import { useEffect, useState } from 'react';

interface ISize {
  width: number;
  height: number;
}

export const useWindowSize = (): ISize => {
  const [windowSize, setWindowSize] = useState<ISize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth || 0,
        height: window.innerHeight || 0,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
