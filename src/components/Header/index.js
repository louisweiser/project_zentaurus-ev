import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useSectionDetection } from "@/contexts/SectionDetectionContext.js";

import Navigation from "./Navigation.js";
import ScrollProgressBar from "./ScrollProgressBar.js";
import Headline from "./Headline.js";

import styles from "./index.module.css";

export default function Header() {
  const { setSectionDetection } = useSectionDetection();
  const [isNavigationVisible, setNavigationVisible] = useState(false);
  const [isRotated, setRotated] = useState(false);
  const sectionDetectionTimeout = useRef(null);

  const onClickHandler = () => {
    setNavigationVisible((prev) => !prev);
    setRotated((prev) => !prev);
  };

  const scrollToSection = (sectionId) => () => {
    setSectionDetection(false);
    if (sectionDetectionTimeout.current) {
      clearTimeout(sectionDetectionTimeout.current);
    }
    sectionDetectionTimeout.current = setTimeout(() => {
      setSectionDetection(true);
    }, 800);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    return () => {
      if (sectionDetectionTimeout.current) {
        clearTimeout(sectionDetectionTimeout.current);
      }
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles["header__content"]}>
        <button
          onClick={scrollToSection("section0")}
          aria-label="Go to Beginning"
          role="button"
          className={styles["header__button-logo"]}
        >
          <Image
            src={"/images/logo.png"}
            alt="union-logo"
            height={54}
            width={54}
            priority
          />
        </button>
        <Headline />
      </div>
      <button
        className={styles["header__button"]}
        onClick={onClickHandler}
        aria-expanded={isNavigationVisible}
        aria-label="Toggle Navigation"
        role="button"
      >
        <Image
          src="/svgs/menu.svg"
          alt="navigation-item"
          className={
            isRotated ? styles["header__rotate"] : styles["header__rotate-back"]
          }
          width={100}
          height={24}
          priority
        />
      </button>
      <ScrollProgressBar />
      <Navigation
        onClickHandler={onClickHandler}
        isNavigationVisible={isNavigationVisible}
      />
    </header>
  );
}
