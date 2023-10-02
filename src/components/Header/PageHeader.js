import React from "react";
import { useRouter } from "next/router";

export default function PageHeader() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div>
      <button onClick={goBack}>back</button>
    </div>
  );
}
