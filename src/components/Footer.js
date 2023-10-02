import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToIntendedSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className={styles.list}>
      <li>
        <Link href={"impressum"} className={styles.color}>
          Impressum
        </Link>
      </li>
      <li>
        <Link href={"datenschutz"} className={styles.color}>
          Datenschutz
        </Link>
      </li>
      <li className={styles.parent}>
        <button
          onClick={() => {
            scrollToIntendedSection("section1");
          }}
          className={styles.button}
        >
          <Image
            src="/svgs/arrowUp.svg"
            alt="UP"
            width={30}
            height={30}
          ></Image>
        </button>
      </li>
    </ul>
  );
}
