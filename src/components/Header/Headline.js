import React, { useState, useContext, useEffect, useRef } from "react";

import { SectionRefsContext } from "@/pages/_app";

import styles from "./Headline.module.css";

const Headlines = [
  "Über uns",
  "Beratung",
  "Vorgehen",
  "Projekte",
  "Spenden",
  "Kontakt",
];

export default function Headline() {
  const [currentSection, setCurrentSection] = useState(null);
  const [headline, setHeadline] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const sectionRefs = useContext(SectionRefsContext);

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
    }, 500);

    setTimeoutId(id);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.boundingClientRect.top <= 0 && entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            setNewHeadline(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -100% 0px" }
    );

    sectionRefs.forEach((refObj) => {
      const ref = refObj.current;
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.forEach((refObj) => {
        const ref = refObj.current;
        if (ref) observer.unobserve(ref);
      });
    };
  }, [sectionRefs]);

  return (
    <h1
      className={`${styles["headline"]} ${
        isAnimating ? styles["headline--fadeOut"] : styles["headline--fadeIn"]
      }`}
      key={headline}
    >
      {headline}
    </h1>
  );
}
