import { useState } from "react";
import Image from "next/image";

import HeaderMenu from "./Menu.js";
import ProgressBar from "./ProgressBar.js";
import Headline from "./Headline.js";

import styles from "./index.module.css";

export default function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const onClickHandler = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <header className={styles.header}>
      <Headline />
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
      <ProgressBar />
      <HeaderMenu
        onClickHandler={onClickHandler}
        isMenuVisible={isMenuVisible}
      />
    </header>
  );
}
