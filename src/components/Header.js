import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

import { SectionRefsContext } from "@/pages/_app";

export default function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const sectionRefs = useContext(SectionRefsContext);

  const colors = ["red", "blue", "green", "orange", "yellow", "cyan"];
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const newBars = sectionRefs.map((ref, index) => {
      const section = ref.current;
      if (section) {
        const width = (section.offsetHeight / totalHeight) * 100;
        return { width, color: colors[index] };
      }
      return { width: 0, color: colors[index] };
    });

    setBars(newBars);
  }, [sectionRefs]);

  const onClickHandler = () => {
    setMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      let scrolled = window.scrollY;

      setBars((bars) =>
        bars.map((bar, index) => {
          const section = sectionRefs[index].current;
          if (scrolled >= section.offsetTop) {
            const visibleHeight = Math.min(
              section.offsetHeight,
              scrolled - section.offsetTop
            );
            return {
              ...bar,
              filled: (visibleHeight / section.offsetHeight) * bar.width,
            };
          }
          return bar;
        })
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  return (
    <header className={styles.header}>
      <h1 className={styles.headline}>Headline</h1>
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
      <div className={styles.bar}>
        {bars.map((bar, index) => (
          <div
            key={index}
            style={{ width: `${bar.filled || 0}%`, backgroundColor: bar.color }}
          />
        ))}
      </div>
      <div className={`${styles.menu} ${isMenuVisible ? styles.visible : ""}`}>
        <ul className={styles.menuList}>
          <li>
            <a href="#section2" onClick={onClickHandler}>
              Über uns
            </a>
          </li>
          <li>
            <a href="#section3" onClick={onClickHandler}>
              Beratung
            </a>
          </li>
          <li>
            <a href="#section4" onClick={onClickHandler}>
              Vorgehen
            </a>
          </li>
          <li>
            <a href="#section5" onClick={onClickHandler}>
              Projekte
            </a>
          </li>
          <li>
            <a href="#section6" onClick={onClickHandler}>
              Blog
            </a>
          </li>
          <li>
            <a href="#section7" onClick={onClickHandler}>
              Kontakt
            </a>
          </li>
          <li>
            <a href="#section7" onClick={onClickHandler}>
              Spenden
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
