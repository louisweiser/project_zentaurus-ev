import React, { useState, useContext, useEffect, useRef } from "react";

import { SectionRefsContext } from "@/pages/_app";

import styles from "./Headline.module.css";

export default function Headline() {
  const [currentSection, setCurrentSection] = useState(null);
  const [headline, setHeadline] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const sectionRefs = useContext(SectionRefsContext);

  const Headlines = [
    "",
    "Über uns",
    "Beratung",
    "Vorgehen",
    "Projekte",
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

    setTimeout(() => {
      setHeadline("");
      setIsAnimating(false);
    }, 500);

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
    }, 500); // Dauer der Fade-Out-Animation

    setTimeoutId(id);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Überprüfen, ob der oberste Rand des Elements den oberen Rand des Viewports erreicht hat
          if (entry.boundingClientRect.top <= 0 && entry.isIntersecting) {
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
    <h1
      className={`${styles.headline} ${
        isAnimating ? styles.fadeOut : styles.fadeIn
      }`}
      key={headline}
    >
      {headline}
    </h1>
  );
}
