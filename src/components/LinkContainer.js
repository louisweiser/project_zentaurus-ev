import Image from "next/image";

import styles from "./LinkContainer.module.css";

export default function ProjectLinkContainer({ project }) {
  return (
    <div className={styles["component-container"]}>
      <div className={styles["image-container"]}>
        <Image
          src={"/images" + project.image}
          alt="Image"
          fill={true}
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
      <h2 className={styles.text}>{project.name}</h2>
    </div>
  );
}
