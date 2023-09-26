import { useSectionRefs } from "@/pages/_app.js";
import SectionTitle from "../SectionTitle.js";
import { counselingData } from "../../../public/content/counseling.js";

import styles from "./Consultation.module.css";

export default function ConsultationContent() {
  const sectionRefs = useSectionRefs();

  const content = counselingData.map((object, index) => (
    <div key={index}>
      <h3>{object.title}</h3>
      <ul className={styles.list}>
        {object.content.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <section id="section3" ref={sectionRefs[2]}>
      <SectionTitle title="Beratung" />
      <div className={styles.section}>{content}</div>
    </section>
  );
}
