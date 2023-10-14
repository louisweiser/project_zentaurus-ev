import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSectionDetection } from "@/contexts/SectionDetectionContext.js";

import styles from "./Footer.module.css";

export default function Footer() {
  const { setSectionDetection } = useSectionDetection();
  const sectionDetectionTimeout = useRef(null);

  const scrollToTop = () => {
    setSectionDetection(false);
    if (sectionDetectionTimeout.current) {
      clearTimeout(sectionDetectionTimeout.current);
    }
    sectionDetectionTimeout.current = setTimeout(() => {
      setSectionDetection(true);
    }, 800);
    document.getElementById("section0")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    return () => {
      if (sectionDetectionTimeout.current) {
        clearTimeout(sectionDetectionTimeout.current);
      }
    };
  }, []);

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
