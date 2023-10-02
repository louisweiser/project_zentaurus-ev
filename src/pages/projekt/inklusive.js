import Article from "@/components/Article";
import RoutingHeader from "@/components/Header/RoutingHeader";

import { projectData } from "../../../public/content/project";

export default function beratung() {
  return (
    <>
      <RoutingHeader />
      <Article text={projectData[0].text} />
    </>
  );
}
