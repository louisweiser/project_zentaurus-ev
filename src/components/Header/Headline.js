import React, { useState, useEffect, useRef } from "react";
import useCurrentSection from "@/hooks/useCurrentSection";

import styles from "./Headline.module.css";

export default function Headline() {
  const [headline, setHeadline] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const nextHeadlineRef = useRef("");
  const { title: newHeadline } = useCurrentSection();

  useEffect(() => {
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
  }, [newHeadline]);

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
