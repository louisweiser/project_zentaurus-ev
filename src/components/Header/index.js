import React, { useState, useContext, useEffect, useRef } from "react";
import Image from "next/image";

import { SectionRefsContext } from "@/pages/_app";
import HeaderMenu from "./Menu.js";
import ProgressBar from "./ProgressBar.js";

import styles from "./index.module.css";

export default function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const [headline, setHeadline] = useState("default Headline");
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const sectionRefs = useContext(SectionRefsContext);

  const onClickHandler = () => {
    setMenuVisible(!isMenuVisible);
  };

  const Headlines = [
    "",
    "Über uns",
    "Beratung",
    "Vorgehen",
    "Projekte",
    "Blog",
    "Spenden",
    "Kontakt",
  ];

  const currentSectionRef = useRef(currentSection);

  useEffect(() => {
    currentSectionRef.current = currentSection;
  }, [currentSection]);

  function setNewHeadline(newHeadline) {
    if (isAnimating) return;

    setIsAnimating(true);

    if (headline !== "") {
      setTimeout(() => {
        setHeadline("");
      }, 400);
    }

    if (timeoutId) clearTimeout(timeoutId);

    const id = setTimeout(() => {
      if (newHeadline !== currentSectionRef.current) {
        setIsAnimating(false);
        return;
      }
      const numStr = newHeadline.replace(/\D/g, "");
      const num = parseInt(numStr, 10);

      setHeadline(Headlines[num - 1]);
      setIsAnimating(false);
    }, 400); // Dauer der Fade-Out-Animation

    setTimeoutId(id);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Überprüfen, ob der oberste Rand des Elements den oberen Rand des Viewports erreicht hat
          if (entry.boundingClientRect.top <= 0 && entry.isIntersecting) {
            console.log(entry.target.id, "id");
            setCurrentSection(entry.target.id);
            setNewHeadline(entry.target.id);
          }
        });
      },
      {
        threshold: 0, // Auslösen, sobald das erste Pixel sichtbar wird
        rootMargin: "0px 0px -100% 0px", // Der Observer wird ausgelöst, wenn der Anfang des Elements den oberen Rand des Viewports erreicht
      }
    );

    sectionRefs.forEach((refObj) => {
      const ref = refObj.current;
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.forEach((refObj) => {
        const ref = refObj.current;
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [sectionRefs]);

  return (
    <header className={styles.header}>
      <div className={styles["header-content"]}>
        <Image
          src={"/images/logo.png"}
          alt="logo"
          height={64}
          width={64}
        ></Image>
        <h1
          className={`${styles.headline} ${
            isAnimating ? styles.fadeOut : styles.fadeIn
          }`}
          key={headline}
        >
          {headline}
        </h1>
      </div>

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
      <ProgressBar setNewHeadline={setNewHeadline} />
      <HeaderMenu
        onClickHandler={onClickHandler}
        isMenuVisible={isMenuVisible}
      />
    </header>
  );
}
