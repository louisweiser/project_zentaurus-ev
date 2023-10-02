import Link from "next/link";
import Image from "next/image";

import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    document.getElementById("section0")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      <ul className={styles.footer__list}>
        <li className={styles.item}>
          <Link href={"impressum"} className={styles.footer__link}>
            Impressum
          </Link>
        </li>
        <li className={styles.item}>
          <Link href={"datenschutz"} className={styles.footer__link}>
            Datenschutz
          </Link>
        </li>
        <li className={styles.footer__item}>
          <button
            onClick={scrollToTop}
            className={styles.footer__button}
            aria-label="Scroll to top"
          >
            <Image
              src="/svgs/arrowUp.svg"
              alt="Scroll to top"
              width={30}
              height={30}
            />
          </button>
        </li>
      </ul>
    </footer>
  );
}
