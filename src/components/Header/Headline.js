import React, { useState, useEffect } from "react";

import styles from "./Headline.module.css";

const Headlines = [
  "",
  "Über uns",
  "Beratung",
  "Vorgehen",
  "Projekte",
  "Spenden",
  "Kontakt",
];

export default function Headline() {
  const [headline, setHeadline] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setHeadline(Headlines[0]);
        return;
      }

      for (let i = 0; i < Headlines.length; i++) {
        const section = document.querySelector(`#section${i}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom > 0) {
            setHeadline(Headlines[i]);
            break;
          }
          if (i === 1 && rect.top > 0) {
            setHeadline(Headlines[0]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <h1 className={styles["headline"]}>{headline}</h1>;
}
