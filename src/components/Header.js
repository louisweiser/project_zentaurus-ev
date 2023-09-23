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
          <h1>logo</h1>
        </Link>
        <button className={styles.button} onClick={onClickHandler}>
          <Image
            src="/svgs/menu.svg"
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
            src="/svgs/xmark.svg"
            alt="close menu"
            className={styles.menuLogo}
            width={100}
            height={24}
            priority
          ></Image>
        </button>
        <ul className={styles.menuList}>
          <li>
            <Link href="/ueberuns">Über uns</Link>
          </li>
          <li>
            <Link href="/beratung">Beratung</Link>
          </li>
          <li>
            <Link href="/projekte">Projekte</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
          <li>
            <Link href="/spenden">Spenden</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
