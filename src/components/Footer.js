import Link from "next/link";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <ul className={styles.list}>
      <li>
        <Link href={"impressum"} className={styles.color}>
          Impressum
        </Link>
      </li>
      <li className={styles.color}>Datenschutz</li>
      <li className={styles.color}>nach oben</li>
    </ul>
  );
}
