import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { SectionRefsContext } from "@/pages/_app";

import HeaderMenu from "./Menu.js";
import ProgressBar from "./ProgressBar.js";

import styles from "./index.module.css";

export default function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const [headline, setHeadline] = useState("default Headline");

  const sectionRefs = useContext(SectionRefsContext);

  const onClickHandler = () => {
    setMenuVisible(!isMenuVisible);
  };

  const Headlines = ["headline1", "headline2", "headline3", "headline4"];

  const [isAnimating, setIsAnimating] = useState(false);

  function newHeadline(newHeadline) {
    setIsAnimating(true);
    setTimeout(() => {
      setHeadline(newHeadline);
      setIsAnimating(false);
    }, 500); // 1000ms = 1s, die Dauer der Fade-Out-Animation
  }

  useEffect(() => {
    console.log(sectionRefs);
    if (!sectionRefs.current || sectionRefs.current.length === 0) {
      console.log("fail");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Eintritt:", entry.target.id);
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sectionRefs.current.forEach(
      (ref) => ref.current && observer.observe(ref.current)
    );

    return () => {
      sectionRefs.current.forEach(
        (ref) => ref.current && observer.unobserve(ref.current)
      );
    };
  }, []);

  return (
    <header className={styles.header}>
      <h1
        className={`${styles.headline} ${
          isAnimating ? styles.fadeOut : styles.fadeIn
        }`}
        key={headline}
      >
        <Image
          src={"/images/logo.png"}
          alt="logo"
          height={64}
          width={64}
        ></Image>
      </h1>
      <button className={styles.button} onClick={onClickHandler}>
        <Image
          src="/svgs/menu.svg"
          alt="open menu"
          className={styles.menuLogo}
          width={100}
          height={24}
          priority
        />
      </button>
      <ProgressBar newHeadline={newHeadline} />
      <HeaderMenu
        onClickHandler={onClickHandler}
        isMenuVisible={isMenuVisible}
      />
    </header>
  );
}
