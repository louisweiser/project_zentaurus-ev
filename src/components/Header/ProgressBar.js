import React, { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css"; // Importieren Sie den CSS-Modul

const ProgressBar = () => {
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
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar} style={{ width: `${scroll}%` }} />
    </div>
  );
};

export default ProgressBar;
