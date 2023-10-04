import SectionTitle from "../SectionTitle.js";
import Article from "../Article";
import { bankData } from "../../../public/content/contact";
import { useSectionRefs } from "@/contexts/SectionRefsContext";
import styles from "./Donate.module.css";

export default function DonateContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section5" ref={sectionRefs[5]}>
      <SectionTitle title="Spenden" />
      <Article text={bankData.text} colored={true} />
      <div className={styles["content__container"]}>
        <ul>
          <li className={styles["content__list-item"]}>Registergericht:</li>
          <li className={styles["content__list-item"]}>{bankData.county}</li>
        </ul>
        <ul>
          <li className={styles["content__list-item"]}>Registernummer:</li>
          <li className={styles["content__list-item"]}>{bankData.number}</li>
        </ul>
        <ul>
          <li className={styles["content__list-item"]}>Bank:</li>
          <li className={styles["content__list-item"]}>{bankData.name}</li>
        </ul>
        <ul>
          <li className={styles["content__list-item"]}>IBAN:</li>
          <li className={styles["content__list-item"]}>{bankData.iban}</li>
        </ul>
        <ul>
          <li className={styles["content__list-item"]}>BIC:</li>
          <li className={styles["content__list-item"]}>{bankData.bic}</li>
        </ul>
      </div>
    </section>
  );
}
