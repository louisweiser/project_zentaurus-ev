import { useState } from "react";
import Image from "next/image";

import Navigation from "./Navigation.js";
import ProgressBar from "./ProgressBar.js";
import Headline from "./Headline.js";

import styles from "./index.module.css";

export default function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isRotated, setRotated] = useState(false);

  const onClickHandler = () => {
    setMenuVisible((prev) => !prev);
    setRotated((prev) => !prev);
  };

  const scrollToIntendedSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-content"]}>
        <button
          onClick={() => {
            scrollToIntendedSection("section1");
          }}
        >
          <Image
            src={"/images/logo.png"}
            alt="logo"
            height={64}
            width={64}
          ></Image>
        </button>
        <Headline />
      </div>
      <button className={styles.button} onClick={onClickHandler}>
        <Image
          src="/svgs/menu.svg"
          alt="open menu"
          className={isRotated ? styles.rotate : styles.rotateBack}
          width={100}
          height={24}
          priority
        />
      </button>
      <ProgressBar />
      <Navigation
        onClickHandler={onClickHandler}
        isMenuVisible={isMenuVisible}
      />
    </header>
  );
}
