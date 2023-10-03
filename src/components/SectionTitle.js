import styles from "./SectionTitle.module.css";

export default function SectionTitle({ title }) {
  return <h1 className={styles.sectionTitle}>{title}</h1>;
}
