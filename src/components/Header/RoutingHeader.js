import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./RoutingHeader.module.css";

export default function RoutingHeader() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <header className={styles["routing-header"]}>
      <button
        onClick={goBack}
        className={styles["routing-header__button"]}
        aria-label="Go back"
        role="button"
      >
        <Image
          src={"/svgs/arrowBack.svg"}
          alt="Go back"
          width={40}
          height={40}
        />
      </button>
    </header>
  );
}
