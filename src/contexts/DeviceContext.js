import React, { createContext, useContext, useState, useEffect } from "react";

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(null);
  const [innerWidth, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile, innerWidth }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error("useDevice must be used within a DeviceProvider");
  }
  return context;
};
