import { useContext, useEffect, useState, useCallback, useMemo } from "react";
import { SectionRefsContext } from "@/pages/_app";

import styles from "./ProgressBar.module.css";

export default function ProgressBar({ newHeadline }) {
  const sectionRefs = useContext(SectionRefsContext);

  const colors = useMemo(
    () => ["green", "orange", "green", "orange", "green", "orange"],
    []
  );

  const [bars, setBars] = useState([]);
  const [currentSection, setCurrentSection] = useState(null); // Neue State-Variable

  useEffect(() => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    setBars(
      sectionRefs.map((ref, index) => {
        const section = ref.current;
        const width = section ? (section.offsetHeight / totalHeight) * 100 : 0;
        return { width, color: colors[index] };
      })
    );
  }, [sectionRefs, colors]);

  const handleScroll = useCallback(() => {
    let scrolled = window.scrollY;

    let newCurrentSection = null;
    bars.forEach((bar, index) => {
      const section = sectionRefs[index].current;
      if (
        scrolled >= section.offsetTop &&
        scrolled < section.offsetTop + section.offsetHeight
      ) {
        newCurrentSection = section;
      }
    });

    if (newCurrentSection) {
      if (newCurrentSection.id !== currentSection) {
        setCurrentSection(newCurrentSection.id); // Setze die aktuelle Section
        console.log(newCurrentSection.id);
        newHeadline(newCurrentSection.id);
      }
    }

    setBars((bars) =>
      bars.map((bar, index) => {
        const section = sectionRefs[index].current;
        if (
          scrolled >= section.offsetTop &&
          scrolled < section.offsetTop + section.offsetHeight
        ) {
          const visibleHeight = scrolled - section.offsetTop;
          return {
            ...bar,
            filled: (visibleHeight / section.offsetHeight) * bar.width,
          };
        } else if (scrolled < section.offsetTop) {
          // Wenn der Benutzer über den Anfang der Section hinaus nach oben scrollt, setze filled auf 0
          return {
            ...bar,
            filled: 0,
          };
        }
        return bar;
      })
    );
  }, [sectionRefs, bars]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={styles.bar}>
      {bars.map((bar, index) => (
        <div
          key={index}
          style={{
            width: `${bar.filled || 0}%`,
            backgroundColor: bar.color,
            visibility: bar.filled > 0 ? "visible" : "hidden", // Setze visibility basierend auf bar.filled
          }}
        />
      ))}
    </div>
  );
}
