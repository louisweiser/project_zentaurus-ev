import ImageSlider from "@/components/ImageSlider";
import { useSectionRefs } from "@/pages/_app.js";

import { introductionText } from "../../../public/content/aboutus.js";

import styles from "./Introduction.module.css";

export default function IntroductionContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section
      id="section1"
      ref={sectionRefs[0]}
      className={styles["section-container"]}
    >
      <ImageSlider />
      <article className={styles["article-container"]}>
        <h1>Warum ist das Thema Inklusion für uns so wichtig ?</h1>
        <h1>Jeder Mensch ist einzigartig - </h1>
        <h1>... voneinander lernen bringt uns in der Gemeinschaft weiter!</h1>
      </article>
    </section>
  );
}
