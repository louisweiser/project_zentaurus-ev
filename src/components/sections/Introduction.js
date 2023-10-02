import ImageSlider from "@/components/ImageSlider";
import { useSectionRefs } from "@/pages/_app.js";

import { introductionText } from "../../../public/content/aboutus.js";

import styles from "./Introduction.module.css";

export default function IntroductionContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section
      id="section0"
      ref={sectionRefs[0]}
      className={styles["section-container"]}
    >
      <ImageSlider />

      <article className={styles["article-container"]}>
        <ul className={styles.quote}>
          <li>{introductionText[0]}</li>
          <li>{introductionText[1]}</li>
          <li>{introductionText[2]}</li>
        </ul>
      </article>
    </section>
  );
}
