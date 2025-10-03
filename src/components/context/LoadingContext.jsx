import { createContext, useContext, useState } from "react";
import LoadingScreen from "../LoadingScreen.jsx";

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const hideLoader = () => {
    setFadeOut(true);
    setTimeout(() => setIsLoading(false), 500); 
  };

  const showLoader = () => {
    setFadeOut(false);
    setIsLoading(true);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, hideLoader, showLoader }}>
      {children}
      {isLoading && <LoadingScreen fadeOut={fadeOut} />}
    </LoadingContext.Provider>
  );
};