import Article from "@/components/Article";
import RoutingHeader from "@/components/Header/RoutingHeader";

import { projectData } from "../../../public/content/project";

import styles from "../index.module.css";

export default function HilfeImAlltag() {
  return (
    <div className={styles.section}>
      <RoutingHeader />
      <Article text={projectData[1].text} />
    </div>
  );
}
