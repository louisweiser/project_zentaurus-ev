import SectionTitle from "../SectionTitle.js";
import Article from "../Article";
import { bankData } from "../../../public/content/contact";
import { useSectionRefs } from "@/pages/_app.js";

import styles from "./Donate.module.css";

export default function DonateContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section5" ref={sectionRefs[5]}>
      <SectionTitle title="Spenden" />
      <Article text={bankData.text} colored={true} />
      <div className={styles.table}>
        <ul>
          <li className={styles.td}>Registergericht:</li>
          <li className={styles.td}>{bankData.county}</li>
        </ul>
        <ul>
          <li className={styles.td}>Registernummer:</li>
          <li className={styles.td}>{bankData.number}</li>
        </ul>
        <ul>
          <li className={styles.td}>Bank:</li>
          <li className={styles.td}>{bankData.name}</li>
        </ul>
        <ul>
          <li className={styles.td}>IBAN:</li>
          <li className={styles.td}>{bankData.iban}</li>
        </ul>
        <ul>
          <li className={styles.td}>BIC:</li>
          <li className={styles.td}>{bankData.bic}</li>
        </ul>
      </div>
    </section>
  );
}
