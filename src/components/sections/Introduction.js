import Image from "next/image.js";
import { useDevice } from "@/contexts/DeviceContext.js";
import { useSectionRefs } from "@/contexts/SectionRefsContext";

import ImageSlider from "@/components/ImageSlider";
import { introductionText } from "../../../public/content/aboutus.js";

import styles from "./Introduction.module.css";

export default function IntroductionContent() {
  const sectionRefs = useSectionRefs();
  const { innerWidth } = useDevice();

  const logoSize = Math.floor(innerWidth / 5);

  return (
    <section id="section0" ref={sectionRefs[0]} className={styles["section"]}>
      <ImageSlider />
      <article className={styles["article__container"]}>
        <ul className={styles["article__list"]}>
          <li className={styles["article__list-item"]}>
            {introductionText[0]}
          </li>
          <li className={styles["article__list-item"]}>
            {introductionText[1]}
          </li>
          <li className={styles["article__list-item"]}>
            {introductionText[2]}
          </li>
        </ul>
      </article>
      <div className={styles.image}>
        <Image
          src={"/images/logo.png"}
          alt="union-logo"
          width={logoSize}
          height={logoSize}
          loading={"eager"}
        />
      </div>
      <div className={styles.svg}>
        {innerWidth && (
          <Image
            src={"/svgs/background.svg"}
            alt={"background"}
            width={innerWidth}
            height={innerWidth / 5}
          ></Image>
        )}
      </div>
    </section>
  );
}
