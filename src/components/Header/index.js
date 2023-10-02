import { useState } from "react";
import Image from "next/image";

import Navigation from "./Navigation.js";
import ScrollProgressBar from "./ScrollProgressBar.js";
import Headline from "./Headline.js";

import styles from "./index.module.css";

export default function Header() {
  const [isNavigationVisible, setNavigationVisible] = useState(false);
  const [isRotated, setRotated] = useState(false);

  const onClickHandler = () => {
    setNavigationVisible((prev) => !prev);
    setRotated((prev) => !prev);
  };

  const scrollToSection = (sectionId) => () => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.header}>
      <div className={styles["header__content"]}>
        <button
          onClick={scrollToSection("section1")}
          aria-label="Go to Beginning"
          role="button"
        >
          <Image
            src={"/images/logo.png"}
            alt="union-logo"
            height={64}
            width={64}
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
