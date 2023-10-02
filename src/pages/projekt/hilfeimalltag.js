import Article from "@/components/Article";
import PageHeader from "@/components/Header/PageHeader";

import { projectData } from "../../../public/content/project";

export default function HilfeImAlltag() {
  return (
    <>
      <PageHeader />
      <Article text={projectData[1].text} />
    </>
  );
}
