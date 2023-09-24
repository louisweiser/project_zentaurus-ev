import React, { useContext, useEffect, useState } from "react";
import { SectionRefsContext } from "@/pages/_app";

import styles from "./ProgressBar.module.css";

export default function ProgressBar() {
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
    <div className={styles.bar}>
      {bars.map((bar, index) => (
        <div
          key={index}
          style={{ width: `${bar.filled || 0}%`, backgroundColor: bar.color }}
        />
      ))}
    </div>
  );
}
