import Article from "../Article";

import {
  experienceText,
  actWithAnminmalsText,
  comminityText,
} from "../../../public/content/approach.js";

import { useSectionRefs } from "@/pages/_app.js";

export default function ApproachContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section4" ref={sectionRefs[3]}>
      <h1>Vorgehen</h1>
      <Article title="Erfahrungen" text={experienceText}></Article>
      <Article title="Tiere" text={actWithAnminmalsText}></Article>
      <Article title="Gemeinschaft" text={comminityText}></Article>
    </section>
  );
}
