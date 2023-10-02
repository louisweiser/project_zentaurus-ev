import React, { useEffect, useState } from "react";

import styles from "./ScrollProgressBar.module.css";

export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    setScroll(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles["progress-bar__container"]}>
      <div className={styles["progress-bar"]} style={{ width: `${scroll}%` }} />
    </div>
  );
}
