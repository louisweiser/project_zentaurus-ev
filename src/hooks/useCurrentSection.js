import { useState, useEffect } from "react";

const Headlines = [
  "",
  "Über uns",
  "Beratung",
  "Vorgehen",
  "Projekte",
  "Spenden",
  "Kontakt",
];

export default function useCurrentSection() {
  const [currentSection, setCurrentSection] = useState({ title: "", id: null });

  useEffect(() => {
    const handleScroll = () => {
      let newHeadline = "";

      if (window.scrollY === 0) {
        newHeadline = { title: Headlines[0], id: 0 };
      } else {
        for (let i = 0; i < Headlines.length; i++) {
          const section = document.querySelector(`#section${i}`);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom > 0) {
              newHeadline = { title: Headlines[i], id: i };
              break;
            }
            if (i === 1 && rect.top > 0) {
              newHeadline = { title: Headlines[0], id: 0 };
              break;
            }
          }
        }
      }

      setCurrentSection(newHeadline);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return currentSection;
}
