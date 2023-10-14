import React, { createContext, useContext, useState, useRef } from "react";

const SectionDetectionContext = createContext();

export const SectionDetectionProvider = ({ children }) => {
  const [sectionDetection, setSectionDetection] = useState(true);

  return (
    <SectionDetectionContext.Provider
      value={{ sectionDetection, setSectionDetection }}
    >
      {children}
    </SectionDetectionContext.Provider>
  );
};

export const useSectionDetection = () => {
  const context = useContext(SectionDetectionContext);
  if (!context) {
    throw new Error("useSectionDetection must be used within a DeviceProvider");
  }
  return context;
};
