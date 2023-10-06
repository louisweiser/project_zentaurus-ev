import Image from "next/image.js";
import { useSectionRefs } from "@/contexts/SectionRefsContext";
import { useDevice } from "@/contexts/DeviceContext.js";

import SectionTitle from "../SectionTitle.js";
import { counselingData } from "../../../public/content/counseling.js";

import styles from "./Consultation.module.css";

export default function ConsultationContent() {
  const sectionRefs = useSectionRefs();
  const { innerWidth } = useDevice();

  if (!innerWidth) {
    return;
  }

  const content = counselingData.map((object) => (
    <article key={object.title}>
      <h3 className={styles["article__title"]}>{object.title}</h3>
      <ul className={styles["article__list"]}>
        {object.content.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </article>
  ));

  return (
    <section id="section2" ref={sectionRefs[2]} className={styles.section}>
      <SectionTitle title="Beratung" />
      <div className={styles["article__container"]}>{content}</div>
      <div className={styles["image-container"]}>
        <Image
          src={"/images/illustration_01.png"}
          alt={"Illustration"}
          width={innerWidth / 3}
          height={innerWidth / 5}
        ></Image>
      </div>
    </section>
  );
}
