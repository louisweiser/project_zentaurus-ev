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
    <section id="section4" ref={sectionRefs[3]}>
      <SectionTitle title="Vorgehen" />
      <Article subtitle="Erfahrungen" text={experienceText}></Article>
      <Article subtitle="Tiere" text={actWithAnminmalsText}></Article>
      <Article subtitle="Gemeinschaft" text={comminityText}></Article>
    </section>
  );
}
