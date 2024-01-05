import React, {useCallback, useEffect, useState} from "react";
import { animateScroll as scroll } from 'react-scroll';

const useHandleWheel = () => {

  const [isScrolling, setIsScrolling] = useState(false);

  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {

    if (isScrolling) return;

    setIsScrolling(true);

    const windowHeight = window.innerHeight;

    const currentScroll = window.scrollY;

    const targetScroll = e.deltaY > 0
      ? (Math.round(currentScroll / windowHeight) + 1) * windowHeight
      : (Math.round(currentScroll / windowHeight) - 1) * windowHeight

    scroll.scrollTo(targetScroll, {
      duration: 618,
      smooth: 'easeInQuint',
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 500);

  }, [isScrolling]);

  useEffect(() => {
    const handleWheelWithPreventDefault = (e: WheelEvent) => e.preventDefault();

    window.addEventListener('wheel', handleWheelWithPreventDefault, { passive: false });

    return () => window.removeEventListener('wheel', handleWheelWithPreventDefault);
  }, [handleWheel]);


  return {
    handleWheel,
  };
};

export default useHandleWheel;
