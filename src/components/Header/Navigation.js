import { useEffect, useState } from "react";
import { useDevice, MOBIL } from "@/contexts/DeviceContext.js";

import { headlines } from "../../../public/content/sections.js";
import styles from "./Navigation.module.css";

import useCurrentSection from "@/hooks/useCurrentSection";

export default function NavigationMenu({
  isNavigationVisible,
  onClickHandler,
}) {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const { device, innerWidth } = useDevice();
  const { title, id } = useCurrentSection();
  const scrollPosition = device === MOBIL ? 7 : 0.11 * innerWidth;

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
                }}
                className={`${styles.navigation__button} ${
                  item.title === title ? styles.active : ""
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
