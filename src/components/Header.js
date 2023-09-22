import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image.js";

import styles from "./Header.module.css";

export default function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const onClickHandler = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h1>zentaurus-logo</h1>
        </Link>
        <button className={styles.button} onClick={onClickHandler}>
          <Image
            src="/menu.svg"
            alt="open menu"
            className={styles.menuLogo}
            width={100}
            height={24}
            priority
          ></Image>
        </button>
      </header>
      <div className={`${styles.menu} ${isMenuVisible ? styles.visible : ""}`}>
        <button className={styles.closeMenuButton} onClick={onClickHandler}>
          <Image
            src="/xmark.svg"
            alt="close menu"
            className={styles.menuLogo}
            width={100}
            height={24}
            priority
          ></Image>
        </button>
        <ul className={styles.menuList}>
          <li>Über uns</li>
          <li>Projekte</li>
          <li>Veranstaltungen</li>
          <li>Kontakt</li>
          <li>Spenden</li>
        </ul>
      </div>
    </>
  );
}
