import SectionTitle from "../SectionTitle.js";
import Article from "../Article";
import { bankData } from "../../../public/content/contact";
import { useSectionRefs } from "@/pages/_app.js";

import styles from "./Donate.module.css";

export default function DonateContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section7" ref={sectionRefs[6]}>
      <SectionTitle title="Spenden" />
      <Article text={bankData.text} colored={true} />
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.td}>Registergericht:</td>
            <td className={styles.td}>{bankData.county}</td>
          </tr>
          <tr>
            <td className={styles.td}>Registernummer:</td>
            <td className={styles.td}>{bankData.number}</td>
          </tr>
          <tr>
            <td className={styles.td}>Bank:</td>
            <td className={styles.td}>{bankData.name}</td>
          </tr>
          <tr>
            <td className={styles.td}>IBAN:</td>
            <td className={styles.td}>{bankData.iban}</td>
          </tr>
          <tr>
            <td className={styles.td}>BIC:</td>
            <td className={styles.td}>{bankData.bic}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
