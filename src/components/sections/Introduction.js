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
        <p>{introductionText[0]}</p>
        <p>{introductionText[1]}</p>
        <p>{introductionText[2]}</p>
      </article>
    </section>
  );
}
