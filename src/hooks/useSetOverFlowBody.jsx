import { useState, useEffect } from "react";
export function useSetOverFlowBody() {
  const [width, setWidth] = useState(window.screen.width);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.screen.width);
    });
    if (width <= 992) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "visible";
    }
    return window.removeEventListener("resize", () => {
      setWidth(window.screen.width);
    });
  }, [width]);
}
