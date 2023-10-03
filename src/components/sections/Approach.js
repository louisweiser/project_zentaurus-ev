import { useSectionRefs } from "@/pages/_app.js";
import SectionTitle from "../SectionTitle.js";
import Article from "../Article";
import { approachData } from "../../../public/content/approach.js";

import styles from "./Approach.module.css";

export default function ApproachContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section3" ref={sectionRefs[3]}>
      <SectionTitle title="Vorgehen" />
      {approachData.map((article) => (
        <Article
          key={article.title}
          subtitle={article.title}
          text={article.text}
          colored={true}
        />
      ))}
    </section>
  );
}
