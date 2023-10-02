import { useSectionRefs } from "@/pages/_app.js";
import SectionTitle from "../SectionTitle.js";
import Article from "../Article";
import {
  experienceText,
  actWithAnminmalsText,
  comminityText,
} from "../../../public/content/approach.js";

import styles from "./Approach.module.css";

export default function ApproachContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section3" ref={sectionRefs[3]}>
      <SectionTitle title="Vorgehen" />
      <Article
        subtitle="Erfahrung"
        text={experienceText}
        colored={true}
      ></Article>
      <Article
        subtitle="Tiere"
        text={actWithAnminmalsText}
        colored={true}
      ></Article>
      <Article
        subtitle="Gemeinschaft"
        text={comminityText}
        colored={true}
      ></Article>
    </section>
  );
}
