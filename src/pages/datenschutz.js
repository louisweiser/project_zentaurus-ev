import Article from "@/components/Article.js";
import RoutingHeader from "@/components/Header/RoutingHeader.js";

import { dataProtectionData } from "../../public/content/datenschutz.js";

import styles from "../styles/pages.module.css";

export default function Datenschutz() {
  return (
    <div className={styles.section}>
      <RoutingHeader />
      {dataProtectionData.map((item, index) => (
        <div key={index}>
          <Article title={item.title} text={item.text}></Article>
        </div>
      ))}
    </div>
  );
}
