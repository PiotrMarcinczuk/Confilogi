import React from "react";
import { useEffect, useRef, useState } from "react";

const useMousePosition = () => {
  const mousePosition = useRef(null);
  const [isCursorOnTop, setIsCursorOnTop] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      mousePosition.current = e.clientY;
      if (mousePosition.current < 250) {
        setIsCursorOnTop(true);
        return;
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return isCursorOnTop;
};

export default useMousePosition;
