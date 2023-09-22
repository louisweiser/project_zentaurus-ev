import Link from "next/link";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <ul className={styles.list}>
      <li>
        <Link href={"impressum"}>Impressum</Link>
      </li>
    </ul>
  );
}
