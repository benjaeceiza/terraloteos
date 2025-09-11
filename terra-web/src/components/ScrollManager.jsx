// ScrollManager.jsx
import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP") {
      // si es atrás/adelante → no forzamos scroll
      return;
    }

    // navegación normal → scroll al top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location, navigationType]);

  return null;
}