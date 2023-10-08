import React, { useState, useEffect, useRef } from "react";

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
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const nextHeadlineRef = useRef("");

  const handleScroll = () => {
    let newHeadline = "";

    if (window.scrollY === 0) {
      newHeadline = Headlines[0];
    } else {
      for (let i = 0; i < Headlines.length; i++) {
        const section = document.querySelector(`#section${i}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom > 0) {
            newHeadline = Headlines[i];
            break;
          }
          if (i === 1 && rect.top > 0) {
            newHeadline = Headlines[0];
            break;
          }
        }
      }
    }

    if (newHeadline !== nextHeadlineRef.current) {
      setIsAnimating(true);
      nextHeadlineRef.current = newHeadline;

      if (timeoutId) clearTimeout(timeoutId);

      const id = setTimeout(() => {
        setHeadline(nextHeadlineRef.current);
        setIsAnimating(false);
      }, 500);

      setTimeoutId(id);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headline, isAnimating, timeoutId]);

  return (
    <h1
      className={`${styles["headline"]} ${
        isAnimating ? styles["headline--fadeOut"] : styles["headline--fadeIn"]
      }`}
    >
      {headline}
    </h1>
  );
}
