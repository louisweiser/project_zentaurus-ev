import Article from "../Article";

import {
  experienceText,
  actWithAnminmalsText,
  comminityText,
} from "../../../public/content/approach.js";

export default function ApproachContent() {
  return (
    <section>
      <h1>Vorgehen</h1>
      <Article title="Erfahrungen" text={experienceText}></Article>
      <Article title="Tiere" text={actWithAnminmalsText}></Article>
      <Article title="Gemeinschaft" text={comminityText}></Article>
    </section>
  );
}
