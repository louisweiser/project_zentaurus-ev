import React, { useState } from "react";
import Image from "next/image";

import HeaderMenu from "./Menu.js";
import ProgressBar from "./ProgressBar.js";

import styles from "./index.module.css";

export default function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const [headline, setHeadline] = useState("default Headline");

  const onClickHandler = () => {
    setMenuVisible(!isMenuVisible);
  };

  const Headlines = ["headline1", "headline2", "headline3", "headline4"];

  const [isAnimating, setIsAnimating] = useState(false);

  function newHeadline(newHeadline) {
    setIsAnimating(true);
    setTimeout(() => {
      setHeadline(newHeadline);
      setIsAnimating(false);
    }, 500); // 1000ms = 1s, die Dauer der Fade-Out-Animation
  }

  return (
    <header className={styles.header}>
      <h1
        className={`${styles.headline} ${
          isAnimating ? styles.fadeOut : styles.fadeIn
        }`}
        key={headline}
      >
        {headline}
      </h1>
      <button className={styles.button} onClick={onClickHandler}>
        <Image
          src="/svgs/menu.svg"
          alt="open menu"
          className={styles.menuLogo}
          width={100}
          height={24}
          priority
        />
      </button>
      <ProgressBar newHeadline={newHeadline} />
      <HeaderMenu
        onClickHandler={onClickHandler}
        isMenuVisible={isMenuVisible}
      />
    </header>
  );
}
