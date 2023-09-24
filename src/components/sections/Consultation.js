import { counselingText } from "../../../public/content/counseling.js";

import styles from "./Consultation.module.css";

import { useSectionRefs } from "@/pages/_app.js";

export default function ConsultationContent() {
  const sectionRefs = useSectionRefs();

  const content = counselingText.map((subArray, index) => (
    <div key={index}>
      {subArray.map((text, subIndex) => {
        if (subIndex === 0) {
          return <h3 key={subIndex}>{text}</h3>;
        } else {
          return <p key={subIndex}>{text}</p>;
        }
      })}
    </div>
  ));

  return (
    <section className={styles.section} id="bereich3" ref={sectionRefs[2]}>
      <h2>Beratung</h2>
      {content}
    </section>
  );
}
