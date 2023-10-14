import { useEffect, useState, useRef } from "react";
import { useDevice, MOBILE } from "@/contexts/DeviceContext.js";
import { useSectionDetection } from "@/contexts/SectionDetectionContext.js";
import useCurrentSection from "@/hooks/useCurrentSection";

import { headlines } from "../../../public/content/sections.js";

import styles from "./Navigation.module.css";

export default function NavigationMenu({
  isNavigationVisible,
  onClickHandler,
}) {
  const { device } = useDevice();
  const { title } = useCurrentSection();
  const { sectionDetection, setSectionDetection } = useSectionDetection();
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [clickedSection, setClickedSection] = useState(null);
  const sectionDetectionTimeout = useRef(null);

  const scrollPosition = device === MOBILE ? 7 : 1;

  useEffect(() => {
    setIsInitialRender(false);
  }, []);

  const scrollToIntendedSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({ top: offsetTop + scrollPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    return () => {
      if (sectionDetectionTimeout.current) {
        clearTimeout(sectionDetectionTimeout.current);
      }
    };
  }, []);

  return (
    <nav
      className={`${styles.navigation} ${
        isInitialRender ? styles.initial : ""
      } ${isNavigationVisible ? styles.visible : ""}`}
      aria-hidden={!isNavigationVisible}
    >
      <ul className={styles.navigation__list}>
        {headlines.map((item, index) => {
          if (index === 0) return null;
          return (
            <li key={index}>
              <button
                onClick={() => {
                  scrollToIntendedSection(item.ref);
                  onClickHandler();
                  setClickedSection(item.title);
                  setSectionDetection(false);
                  if (sectionDetectionTimeout.current) {
                    clearTimeout(sectionDetectionTimeout.current);
                  }
                  sectionDetectionTimeout.current = setTimeout(() => {
                    setSectionDetection(true);
                    setClickedSection(null);
                  }, 800);
                }}
                className={`${styles.navigation__button} ${
                  clickedSection
                    ? item.title === clickedSection
                      ? styles.active
                      : ""
                    : sectionDetection && item.title === title
                    ? styles.active
                    : ""
                }`}
                aria-label={`Go to ${item.title} section`}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
