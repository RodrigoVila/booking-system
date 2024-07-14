import { useState, useEffect } from "react";

export const useScreenWidth = () => {
  const [isOver768px, setIsOver768px] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    setIsOver768px(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsOver768px(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return { isOver768px };
};
