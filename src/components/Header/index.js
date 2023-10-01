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
    setMenuVisible(!isMenuVisible);
    setRotated(!isRotated);
  };

  return (
    <header className={styles.header}>
      <Headline />
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
