import React, { createContext, useContext, useRef } from "react";

import "@/styles/globals.css";

export const SectionRefsContext = createContext();

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);
  if (!context) {
    throw new Error("useSectionRefs must be used within a SectionRefsProvider");
  }
  return context;
};

const SectionRefsProvider = ({ children }) => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  return (
    <SectionRefsContext.Provider value={sectionRefs}>
      {children}
    </SectionRefsContext.Provider>
  );
};

export default function App({ Component, pageProps }) {
  return (
    <SectionRefsProvider>
      <Component {...pageProps} />
    </SectionRefsProvider>
  );
}
