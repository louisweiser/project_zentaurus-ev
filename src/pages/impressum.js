import Article from "@/components/Article.js";
import RoutingHeader from "@/components/Header/RoutingHeader.js";
import { impressumData } from "../../public/content/impressum.js";

import styles from "./index.module.css";

export default function Impressum() {
  const impressum = impressumData.impressum;
  const haftungsausschluss = impressumData.haftungsausschluss;
  const urheberrecht = impressumData.urheberrecht;

  return (
    <div className={styles.section}>
      <RoutingHeader />
      <article>
        <h1 className={styles.headline}>{impressum.title}</h1>
        {impressum.content.map((abschnitt, index) => (
          <div key={index}>
            <Article title={abschnitt.title} text={abschnitt.text}></Article>
          </div>
        ))}
      </article>
      <article>
        <h1 className={styles.headline}>{haftungsausschluss.title}</h1>
        {haftungsausschluss.content.map((abschnitt, index) => (
          <div key={index}>
            <Article title={abschnitt.title} text={abschnitt.text}></Article>
          </div>
        ))}
      </article>
      <article>
        <h1 className={styles.headline}>{urheberrecht.title}</h1>
        <Article text={urheberrecht.text}></Article>
      </article>
    </div>
  );
}
