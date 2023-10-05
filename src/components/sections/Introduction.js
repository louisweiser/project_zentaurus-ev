import Image from "next/image.js";

import ImageSlider from "@/components/ImageSlider";
import { useSectionRefs } from "@/contexts/SectionRefsContext";
import { introductionText } from "../../../public/content/aboutus.js";

import styles from "./Introduction.module.css";

export default function IntroductionContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section0" ref={sectionRefs[0]} className={styles["section"]}>
      <ImageSlider />
      <article className={styles["article__container"]}>
        <ul className={styles["article__list"]}>
          <li>{introductionText[0]}</li>
          <li>{introductionText[1]}</li>
          <li>{introductionText[2]}</li>
        </ul>
        <div className={styles.image}>
          <Image
            src={"/images/illustration_02.png"}
            alt="image"
            width={450}
            height={450}
          ></Image>
        </div>
      </article>
    </section>
  );
}
