import SectionTitle from "../SectionTitle.js";
import Article from "../Article";
import { bankData } from "../../../public/content/contact";
import styles from "./Donate.module.css";

export default function DonateContent() {
  return (
    <section id="section5">
      <SectionTitle title="Spenden" />
      <div className={styles["grid-container"]}>
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
      </div>
    </section>
  );
}
