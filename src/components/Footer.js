import React from "react";
import Link from "next/link";

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
      <li className={styles.color}>Datenschutz</li>
      <li className={styles.color}>
        <button
          onClick={() => {
            scrollToIntendedSection("section1");
          }}
        >
          nach oben
        </button>
      </li>
    </ul>
  );
}
