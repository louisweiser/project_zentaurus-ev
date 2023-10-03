import { useEffect, useState } from "react";

import { headlines } from "../../../public/content/sections.js";
import styles from "./Navigation.module.css";

export default function NavigationMenu({
  isNavigationVisible,
  onClickHandler,
}) {
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    setIsInitialRender(false);
  }, []);

  const scrollToIntendedSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({ top: offsetTop + 7, behavior: "smooth" });
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
                className={styles.navigation__button}
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
