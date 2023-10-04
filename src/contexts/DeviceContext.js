import React, { createContext, useContext, useState, useEffect } from "react";

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [device, setDevice] = useState(null);
  const [innerWidth, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth <= 1024) {
        setDevice("mobile");
      } else {
        setDevice("desktop");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DeviceContext.Provider value={{ device, innerWidth }}>
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

export const MOBIL = "mobile";
export const DESKTOP = "desktop";
