import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

export const useScrollPosition = (throttleMilliseconds: number = 100) => {
  const [isScrollOverHalfScreen, setIsScrollOverHalfScreen] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const screenHeightLimit = window.innerHeight / 2 - 60;
      setIsScrollOverHalfScreen(window.scrollY > screenHeightLimit);
    }, throttleMilliseconds);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call it initially in case the page is already scrolled past half screen

    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [throttleMilliseconds]);

  return { isScrollOverHalfScreen };
};
