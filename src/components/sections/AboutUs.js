import Article from "../Article.js";

import {
  philosophyText,
  actWithAnminmalsText,
  aboutUsText,
  unionText,
} from "../../../public/content/home";

export default function AboutUsContent() {
  return (
    <section>
      <Article topic="Über Uns" text={aboutUsText}></Article>
      <Article topic="Der Verein" text={unionText}></Article>
      <Article topic="Philosophie" text={philosophyText}></Article>
      <Article topic="Unser Vorgehen" text={actWithAnminmalsText}></Article>
      <article>
        <h2>Das Team</h2>
      </article>
    </section>
  );
}
