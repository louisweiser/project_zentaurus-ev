import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./RoutingHeader.module.css";

export default function RoutingHeader() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <header className={styles.header}>
      <button onClick={goBack}>
        <Image
          src={"/svgs/arrowBack.svg"}
          alt={"back routing"}
          width={40}
          height={40}
        ></Image>
      </button>
    </header>
  );
}
